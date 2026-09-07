#!/usr/bin/env python3
"""Regenerate the KPI_UNIT block in data.js from "KPI Unit ARP.xlsx".

Run this whenever the excel file changes, so the KPI Unit table in the
exported report ("Laporan Status Pekerjaan Unit ARP") always matches the
source spreadsheet:

    python generate_kpi_unit.py

Uses only the standard library (zipfile + xml) — no pandas/openpyxl needed.
"""
import json
import re
import sys
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

HERE = Path(__file__).resolve().parent
XLSX_PATH = HERE / "KPI Unit ARP.xlsx"
DATA_JS_PATH = HERE / "data.js"
SHEET_PATH_IN_ZIP = "xl/worksheets/sheet1.xml"

NS = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}


def col_letters(cell_ref):
    return re.match(r"([A-Z]+)(\d+)", cell_ref).group(1)


def load_shared_strings(z):
    try:
        data = z.read("xl/sharedStrings.xml")
    except KeyError:
        return []
    root = ET.fromstring(data)
    strings = []
    for si in root.findall("m:si", NS):
        text = "".join(t.text or "" for t in si.iter("{%s}t" % NS["m"]))
        strings.append(text)
    return strings


def load_rows(z, shared):
    data = z.read(SHEET_PATH_IN_ZIP)
    root = ET.fromstring(data)
    rows = []
    for row in root.find("m:sheetData", NS).findall("m:row", NS):
        cells = {}
        for c in row.findall("m:c", NS):
            ref = c.get("r")
            col = col_letters(ref)
            ctype = c.get("t")
            v = c.find("m:v", NS)
            if v is None:
                cells[col] = ""
                continue
            if ctype == "s":
                cells[col] = shared[int(v.text)]
            else:
                cells[col] = v.text
        rows.append(cells)
    return rows


def normalize_target(raw):
    raw = raw.strip()
    # Strip a stray pair of wrapping double-quotes some cells were typed with
    # (e.g. a cell literally containing `"Q1: 1 Q2: 1 Q3: 1 Q4: 1"`).
    if len(raw) >= 2 and raw[0] == '"' and raw[-1] == '"':
        raw = raw[1:-1].strip()
    # Multi-quarter targets can be separated by newlines or by plain spaces
    # depending on how the cell was typed — normalize both to "Q1:1 · Q2:1 · ...".
    quarter_matches = re.findall(r"Q\d:\s*\S+", raw)
    if len(quarter_matches) > 1:
        parts = [re.sub(r"^(Q\d):\s*", r"\1:", m.strip()) for m in quarter_matches]
        return " · ".join(parts)
    return raw


def js_string(value):
    return json.dumps(value, ensure_ascii=False)


def main():
    if not XLSX_PATH.exists():
        print(f"ERROR: {XLSX_PATH.name} not found next to this script.", file=sys.stderr)
        sys.exit(1)

    with zipfile.ZipFile(XLSX_PATH) as z:
        shared = load_shared_strings(z)
        rows = load_rows(z, shared)

    if not rows:
        print("ERROR: no rows found in sheet.", file=sys.stderr)
        sys.exit(1)

    header_row = rows[0]
    headers = {col: (text or "").strip() for col, text in header_row.items()}
    col_by_name = {}
    for col, name in headers.items():
        key = re.sub(r"\s+", " ", name).strip()
        col_by_name[key] = col

    def find_col(*candidates):
        for cand in candidates:
            for key, col in col_by_name.items():
                if key.lower().startswith(cand.lower()):
                    return col
        raise KeyError(f"Could not find a column for any of: {candidates}")

    col_kpi     = find_col("KPI")
    col_unit    = find_col("Unit")
    col_pic     = find_col("PIC")
    col_sasaran = find_col("Sasaran KPI")
    col_jenis   = find_col("Jenis KPI")
    col_target  = find_col("Target Min")
    col_status  = find_col("Status")

    target_period = headers.get(col_target, "")
    if "\n" in target_period:
        target_period = target_period.split("\n")[-1].strip()

    unit_value = None
    pics_order = []
    pics_items = {}

    for row in rows[1:]:
        if col_kpi not in row or not row[col_kpi]:
            continue
        pic = (row.get(col_pic) or "").strip()
        if not pic:
            continue
        if unit_value is None:
            unit_value = (row.get(col_unit) or "ARP").strip()
        item = {
            "kpi": (row.get(col_kpi) or "").strip(),
            "sasaran": (row.get(col_sasaran) or "").strip(),
            "jenis": (row.get(col_jenis) or "").strip(),
            "target": normalize_target(row.get(col_target) or ""),
            "status": (row.get(col_status) or "").strip(),
        }
        if pic not in pics_items:
            pics_items[pic] = []
            pics_order.append(pic)
        pics_items[pic].append(item)

    lines = []
    lines.append("// KPI_UNIT_START")
    lines.append("const KPI_UNIT = {")
    lines.append(f"  unit: {js_string(unit_value or 'ARP')},")
    lines.append(f"  targetPeriod: {js_string(target_period or 'Tengah Tahun')},")
    lines.append("  pics: [")
    for pic in pics_order:
        lines.append(f'    {{ pic: {js_string(pic)}, items: [')
        for item in pics_items[pic]:
            lines.append(
                "      { kpi: %s, sasaran: %s, jenis: %s, target: %s, status: %s },"
                % (
                    js_string(item["kpi"]),
                    js_string(item["sasaran"]),
                    js_string(item["jenis"]),
                    js_string(item["target"]),
                    js_string(item["status"]),
                )
            )
        lines.append("    ]},")
    lines.append("  ],")
    lines.append("};")
    lines.append("// KPI_UNIT_END")
    new_block = "\n".join(lines)

    text = DATA_JS_PATH.read_text(encoding="utf-8")
    pattern = re.compile(r"// KPI_UNIT_START.*?// KPI_UNIT_END", re.DOTALL)
    if not pattern.search(text):
        print("ERROR: KPI_UNIT_START/END markers not found in data.js.", file=sys.stderr)
        sys.exit(1)
    new_text = pattern.sub(new_block, text, count=1)
    DATA_JS_PATH.write_text(new_text, encoding="utf-8")

    total_items = sum(len(v) for v in pics_items.values())
    print(f"KPI_UNIT updated: {len(pics_order)} PIC, {total_items} items total.")
    for pic in pics_order:
        print(f"  {pic}: {len(pics_items[pic])} items")


if __name__ == "__main__":
    main()
