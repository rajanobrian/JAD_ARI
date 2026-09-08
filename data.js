const DASHBOARD_META = {
  unitTitle:   "Unit ARI · Analisa Risiko Bisnis",
  pageTitle:   "Job Internal Highlights Assignment Dashboard",
  titleAccent: "Unit ARP",
  headName:    "Raja Nobriansyah [RNR]",
  period:      "Q2–Q3 2026",
  liveDate:    "27 APR 2026",
  framework:   "Eisenhower Matrix & Workload Analysis",
};

// Order here controls display order in workload list and collab matrix.
// The id must match the CSS class names already defined (.pic-badge.NDI, .pt-chip .d.NDI, etc.)
const PIC_CONFIG = [
  { id: "NDI" },
  { id: "RFA" },
  { id: "BAI" },
  { id: "SSO" },
];

// Each entry maps one or more `cat` values from JOBS to a single chart bar.
// colorClass must match a CSS modifier: navy | red | slate | amber
const CATEGORY_CONFIG = [
  { label: "Operasional",             match: ["Operasional"],                      colorClass: "navy"  },
  { label: "Inisiatif Project",       match: ["Inisiatif Project"],                colorClass: "red"   },
  { label: "Inisiatif non Project",   match: ["Inisiatif non Proj."],              colorClass: "red"   },
  { label: "Kajian & Review",         match: ["Kajian & Review", "Legal Review"],  colorClass: "red"   },
  { label: "Model Review",            match: ["Model Review"],                     colorClass: "slate" },
  { label: "Support Project",         match: ["Support Project"],                  colorClass: "slate" },
  { label: "Adhoc",                   match: ["Adhoc"],                            colorClass: "amber" },
];

// ─── JOBS ────────────────────────────────────────────────────────────────────
// Fields:
//   no    – row number (display only, does NOT need to be unique)
//   job   – full job description
//   cat   – category name (must appear in a CATEGORY_CONFIG match array)
//   cc    – CSS pill class: cat-op | cat-ip | cat-np | cat-sp | cat-ad
//   pics  – array of PIC initials (single = solo, multiple = collab)
//   prio  – Eisenhower quadrant: Q1 | Q2 | Q3 | Q4
//   pl    – priority label shown in table: "I·U" | "I·NU" | "U·NI"
//   st    – status: "done" | "on"
//   wl    – workload scale 1–5: 1 Ringan · 2 Sedang-Ringan · 3 Sedang · 4 Sedang-Berat · 5 Berat
const JOBS = [
  {no:1,  job:"Laporan & Analisa Stresstesting PM Sep-26",                                                  cat:"Operasional",         cc:"cat-op", pics:["BAI"],       prio:"Q1", pl:"I·U",  st:"done", wl:4},
  {no:2,  job:"Laporan & Analisa Stresstesting PUVA Sep-26",                                                cat:"Operasional",         cc:"cat-op", pics:["RFA","SSO"],       prio:"Q1", pl:"I·U",  st:"done", wl:3},
  {no:3,  job:"Laporan dan Analisa Perhitungan KCCP PUVA Sep-26",                                             cat:"Operasional",         cc:"cat-op", pics:["RFA"],       prio:"Q1", pl:"I·U",  st:"done", wl:4},
  {no:4,  job:"Laporan & Analisa Backtesting PM Sep-26",                                                    cat:"Operasional",         cc:"cat-op", pics:["SSO"],       prio:"Q1", pl:"I·U",  st:"done", wl:4},
  {no:5,  job:"Analisa Input dan Analisa Laporan Keuangan - Signifikan Sep-26",                   cat:"Operasional",         cc:"cat-op", pics:["NDI"],       prio:"Q1", pl:"I·U",  st:"on", wl:4},
  {no:6,  job:"Kalkulasi Haircut, Eligible SBL, Colldiss Sep-26",                     cat:"Operasional",         cc:"cat-op", pics:["NDI"],       prio:"Q1", pl:"I·U",  st:"on",   wl:5},
  {no:7,  job:"Sensitivity Analysis Sep-26-26: Simulasi MKBD, Simulasi Trading Limit",      cat:"Operasional",         cc:"cat-op", pics:["NDI"],       prio:"Q1", pl:"I·U",  st:"on",   wl:4},
  {no:8,  job:"Implementasi Backtest PUVA - Production",                       cat:"Inisiatif Project",   cc:"cat-ip", pics:["RFA"],       prio:"Q1", pl:"I·U",  st:"done",   wl:4},
  {no:9,  job:"Operational Weekly Report Analisa Risiko PM Sep-26 W1",                              cat:"Inisiatif non Proj.", cc:"cat-np", pics:["SSO"], prio:"Q1", pl:"I·U", st:"done",   wl:4},
  {no:10, job:"Operational Weekly Report Analisa Risiko PM Sep-26 W2",                              cat:"Inisiatif non Proj.", cc:"cat-np", pics:["SSO"], prio:"Q2", pl:"I·NU", st:"on",   wl:4},
  {no:11, job:"Operational Weekly Report Analisa Risiko PM Sep-26 W3",                              cat:"Inisiatif non Proj.", cc:"cat-np", pics:["SSO"], prio:"Q2", pl:"I·NU", st:"on",   wl:4},
  {no:12, job:"Operational Weekly Report Analisa Risiko PM Sep-26 W4",                              cat:"Inisiatif non Proj.", cc:"cat-np", pics:["SSO"], prio:"Q2", pl:"I·NU", st:"on",   wl:4},
  {no:13, job:"Review & Analisa LK + parameter fundamental",                      cat:"Kajian & Review",     cc:"cat-np", pics:["NDI"],       prio:"Q2", pl:"I·NU", st:"on",   wl:5},
  {no:14, job:"Kajian Transparansi Marjin PM-PUVA",                                cat:"Kajian & Review",     cc:"cat-np", pics:["RFA"],       prio:"Q2", pl:"I·NU", st:"done",   wl:4},
  {no:15, job:"Review RC 0%, Min. Agunan Offline",                                 cat:"Model Review",        cc:"cat-sp", pics:["BAI","SSO"], prio:"Q2", pl:"I·NU", st:"done",   wl:5},
  {no:16, job:"Assessment Saham Not Eligible as Collateral",                       cat:"Kajian & Review",     cc:"cat-np", pics:["NDI","BAI"], prio:"Q1", pl:"I·U", st:"on",   wl:5},
  {no:17, job:"Review Credit Rating/Risk Charge CCP PUVA",                         cat:"Model Review",        cc:"cat-sp", pics:["RFA"],       prio:"Q1", pl:"I·NU", st:"on",   wl:5},
  {no:18, job:"Kajian Impact Coll & Risk System Migrasi DWH – Big Data (Scope PPR)",                                  cat:"Kajian & Review",     cc:"cat-np", pics:["BAI","SSO"], prio:"Q1", pl:"I·U", st:"on",   wl:5},
  {no:19, job:"Kajian Impact Analysis Ticker Code (PSPP)",                                cat:"Kajian & Review",     cc:"cat-np", pics:["RFA","NDI"], prio:"Q1", pl:"I·U", st:"on",   wl:4},
  {no:20, job:"Asessment Upgrade System Razor Risk 5.0",                                     cat:"Inisiatif non Proj.", cc:"cat-np", pics:["BAI","SSO"], prio:"Q2", pl:"I·NU", st:"done",   wl:5},
  {no:21, job:"Assessment Pengembangan Produk PALN (Derivatif)",                              cat:"Support Project",     cc:"cat-sp", pics:["RFA", "BAI"],prio:"Q2", pl:"I·NU", st:"done",   wl:5},
  {no:22, job:"Assesment Pengembangan CCP Repo",                                             cat:"Support Project",     cc:"cat-sp", pics:["RFA","BAI"], prio:"Q2", pl:"I·NU", st:"on",   wl:5},
  {no:23, job:"Pengembangan Produk UDR, EGR (Equity)",                             cat:"Support Project",     cc:"cat-sp", pics:["RFA","NDI"], prio:"Q2", pl:"I·NU", st:"on",   wl:3},
  {no:24, job:"Asessment IM dan Stresstest PUVA (volatilitas nilai hasil kalkulasi) ke Razor",           cat:"Adhoc",     cc:"cat-ad", pics:["RFA"], prio:"Q1", pl:"I·U", st:"on",   wl:4},
  {no:25, job:"Assessment Digital Asset Product in CCP Risk",                      cat:"Support Project",     cc:"cat-sp", pics:["BAI","SSO"], prio:"Q2", pl:"I·NU", st:"on",   wl:4},
  {no:26, job:"Implementasi ETP pada CCP PUVA",                                    cat:"Support Project",     cc:"cat-sp", pics:["RFA"],       prio:"Q2", pl:"I·NU", st:"on",   wl:3},
  {no:27, job:"Assessment impact Perubahan & perpanjangan jam bursa",              cat:"Support Project",     cc:"cat-sp", pics:["NDI","SSO"], prio:"Q2", pl:"I·NU", st:"on",   wl:4},
  {no:28, job:"Follow up Issue Volatilitas Margin dan Stresstest PUVA",           cat:"Adhoc",     cc:"cat-ad", pics:["RFA"], prio:"Q1", pl:"I·U", st:"on",   wl:3},
  {no:29, job:"Persiapan Audit SPI : audit KPI & SMKI ",           cat:"Adhoc",     cc:"cat-ad", pics:["NDI","BAI"], prio:"Q1", pl:"I·U", st:"on",   wl:3},  
  {no:30, job:"Third Party Model Review (phase 2) - Proposal, RKAT, Pengadaan.",           cat:"Operasional",     cc:"cat-op", pics:["SSO"], prio:"Q1", pl:"I·U", st:"on",   wl:4},  
  {no:31, job:"KPI Officer - Update pemenuhan KPI Unit - bulanan",           cat:"Operasional",     cc:"cat-op", pics:["NDI"], prio:"Q1", pl:"I·U", st:"on",   wl:4}, 
  {no:32, job:"Risk Officer - Penyesuaian UAM dan Daftar User Access System (Razor, ARMS, dll)",           cat:"Operasional",     cc:"cat-op", pics:["BAI"], prio:"Q1", pl:"I·U", st:"on",   wl:4},
  {no:33, job:"Implementasi dan Pemanfaatan GitLab KPEI (on Sept 26)",           cat:"Adhoc",     cc:"cat-ad", pics:["SSO"], prio:"Q3", pl:"NI·U", st:"on",   wl:4},
  {no:34, job:"Monthly data Fulfillment for Radirkom Sep-26 (Exp, Margin Call, KCCP)",           cat:"Operasional",     cc:"cat-op", pics:["RFA"], prio:"Q1", pl:"I·U", st:"on",   wl:2},  
  {no:35, job:"Asessment KCCP - Client Level Razor-Cguards (PUVA)",           cat:"Support Project",     cc:"cat-sp", pics:["RFA"], prio:"Q2", pl:"I·NU", st:"on",   wl:3},
  {no:36, job:"Design Study - LSEG (Marginining Methodology)",           cat:"Support Project",     cc:"cat-sp", pics:["BAI","SSO"], prio:"Q1", pl:"I·U", st:"on",   wl:5},
  {no:37, job:"Design Study - LSEG (Business CCP REPO design)",           cat:"Support Project",     cc:"cat-sp", pics:["BAI"], prio:"Q1", pl:"I·U", st:"on",   wl:5},
  {no:38, job:"Design Study - LSEG (Risk Testing & POC)",           cat:"Support Project",     cc:"cat-sp", pics:["BAI","SSO"], prio:"Q1", pl:"I·U", st:"on",   wl:5},
  {no:39, job:"Kalkulasi Persentase Kecukupan Sumber Keuangan CCP dan Keandalan Stress Testing - KPI Unggulan",           cat:"Operasional",     cc:"cat-op", pics:["NDI"], prio:"Q1", pl:"I·U", st:"on",   wl:4},
  {no:40, job:"Simulasi Rebalancing MSCI/FTSE - 18Sep-26",           cat:"Adhoc",     cc:"cat-ad", pics:["NDI","SSO","RFA","BAI"], prio:"Q1", pl:"I·U", st:"on",   wl:5},
  {no:41, job:"Update POS dan Risk Register atas penyesuaian operasional HC KPEI",           cat:"Adhoc",     cc:"cat-ad", pics:["BAI"], prio:"Q1", pl:"I·U", st:"on",   wl:3},
  {no:42, job:"Koordinasi Aktivasi Scheduler penarikan data price intraday dari PDC",           cat:"Adhoc",     cc:"cat-ad", pics:["BAI"], prio:"Q2", pl:"I·NU", st:"on",   wl:3},
  {no:43, job:"Pemenuhan data Statistik PUVA ke RPB periode Aug-26 (H+3 Awal Bulan)",           cat:"Adhoc",     cc:"cat-ad", pics:["RFA"], prio:"Q2", pl:"I·NU", st:"on",   wl:3},
];

const WL_LABELS = {
  1: "Ringan",
  2: "Sedang-Ringan",
  3: "Sedang",
  4: "Sedang-Berat",
  5: "Berat",
};

// ─── KPI UNIT (sumber: KPI Unit ARP.xlsx) ───────────────────────────────────
// AUTO-GENERATED oleh generate_kpi_unit.py — JANGAN edit manual di sini.
// Setiap kali "KPI Unit ARP.xlsx" berubah, jalankan:  python generate_kpi_unit.py
// Skrip akan membaca ulang file excel dan menulis ulang blok KPI_UNIT_START..KPI_UNIT_END di bawah.
// unit = ARP untuk semua baris. target "1" berarti 100%; item #Number ditarget per-quartal.
// KPI_UNIT_START
const KPI_UNIT = {
  unit: "ARP",
  targetPeriod: "Tengah Tahun",
  pics: [
    { pic: "NDI", items: [
      { kpi: "%Timely and Accurate Daily Parameter Calculation", sasaran: "Parameter Pengendalian Risiko", jenis: "Harian", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Sensitivity Analysis", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Haircut Calculation Saham Agunan MKBD dan Triparty Repo - PM", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Haircut Calculation Perhitungan SBN - PUVA", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Risk Parameter Calculation", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Analisa dan Laporan Perhitungan Backtesting - PM", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Analisa dan Laporan Perhitungan Backtesting - PUVA", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate KCCP Calculation", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "#Number of Risk Model Review Pasar Modal", sasaran: "Parameter Pengendalian Risiko", jenis: "Quartalan", target: "Q1:1 · Q2:1 · Q3:1 · Q4:1", status: "Done" },
      { kpi: "#Number of Risk Model Review PUVA", sasaran: "Parameter Pengendalian Risiko", jenis: "Quartalan", target: "Q1:1 · Q2:1 · Q3:1 · Q4:1", status: "Done" },
      { kpi: "%Timely and Accurate Stress Testing Calculation Pasar Modal", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Stress Testing Calculation PUVA", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "% Kecukupan Sumber Keuangan CCP & Keandalan Stress Testing", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
    ]},
    { pic: "SSO", items: [
      { kpi: "%Timely and Accurate Daily Parameter Calculation", sasaran: "Parameter Pengendalian Risiko", jenis: "Harian", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Sensitivity Analysis", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Haircut Calculation Saham Agunan MKBD dan Triparty Repo - PM", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Haircut Calculation Perhitungan SBN - PUVA", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Risk Parameter Calculation", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Analisa dan Laporan Perhitungan Backtesting - PM", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Analisa dan Laporan Perhitungan Backtesting - PUVA", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate KCCP Calculation", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "#Number of Risk Model Review Pasar Modal", sasaran: "Parameter Pengendalian Risiko", jenis: "Quartalan", target: "Q1:1 · Q2:1 · Q3:1 · Q4:1", status: "Done" },
      { kpi: "#Number of Risk Model Review PUVA", sasaran: "Parameter Pengendalian Risiko", jenis: "Quartalan", target: "Q1:1 · Q2:1 · Q3:1 · Q4:1", status: "Done" },
      { kpi: "%Timely and Accurate Stress Testing Calculation Pasar Modal", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Stress Testing Calculation PUVA", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "% Kecukupan Sumber Keuangan CCP & Keandalan Stress Testing", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
    ]},
    { pic: "BAI", items: [
      { kpi: "%Timely and Accurate Daily Parameter Calculation", sasaran: "Parameter Pengendalian Risiko", jenis: "Harian", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Sensitivity Analysis", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Haircut Calculation Saham Agunan MKBD dan Triparty Repo - PM", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Haircut Calculation Perhitungan SBN - PUVA", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Risk Parameter Calculation", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Analisa dan Laporan Perhitungan Backtesting - PM", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Analisa dan Laporan Perhitungan Backtesting - PUVA", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate KCCP Calculation", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "#Number of Risk Model Review Pasar Modal", sasaran: "Parameter Pengendalian Risiko", jenis: "Quartalan", target: "Q1:1 · Q2:1 · Q3:1 · Q4:1", status: "Done" },
      { kpi: "#Number of Risk Model Review PUVA", sasaran: "Parameter Pengendalian Risiko", jenis: "Quartalan", target: "Q1:1 · Q2:1 · Q3:1 · Q4:1", status: "Done" },
      { kpi: "%Timely and Accurate Stress Testing Calculation Pasar Modal", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Stress Testing Calculation PUVA", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "% Kecukupan Sumber Keuangan CCP & Keandalan Stress Testing", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
    ]},
    { pic: "RFA", items: [
      { kpi: "%Timely and Accurate Daily Parameter Calculation", sasaran: "Parameter Pengendalian Risiko", jenis: "Harian", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Sensitivity Analysis", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Haircut Calculation Saham Agunan MKBD dan Triparty Repo - PM", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Haircut Calculation Perhitungan SBN - PUVA", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Risk Parameter Calculation", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Analisa dan Laporan Perhitungan Backtesting - PM", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Analisa dan Laporan Perhitungan Backtesting - PUVA", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate KCCP Calculation", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "#Number of Risk Model Review Pasar Modal", sasaran: "Parameter Pengendalian Risiko", jenis: "Quartalan", target: "Q1:1 · Q2:1 · Q3:1 · Q4:1", status: "Done" },
      { kpi: "#Number of Risk Model Review PUVA", sasaran: "Parameter Pengendalian Risiko", jenis: "Quartalan", target: "Q1:1 · Q2:1 · Q3:1 · Q4:1", status: "Done" },
      { kpi: "%Timely and Accurate Stress Testing Calculation Pasar Modal", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "%Timely and Accurate Stress Testing Calculation PUVA", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
      { kpi: "% Kecukupan Sumber Keuangan CCP & Keandalan Stress Testing", sasaran: "Parameter Pengendalian Risiko", jenis: "Bulanan", target: "1", status: "Done" },
    ]},
  ],
};
// KPI_UNIT_END

// ─── RUNNING TEXT (Ticker Bar) ───────────────────────────────────────────────
// Edit the text below to update the scrolling red bar between header and content.
// Use  " · "  as a separator between items.
const RUNNING_TEXT =
  "SELAMAT PAGI ! ." +
  " ." +
  " ." +
  "WELCOME TO SEPTEMBER ." +
  " · " +
  " · " +
  "EMOGA HAL-HAL BAIK DATANG KE KITA ." +
  " · " +
  " · " +
  "SEMANGAT SEMUANYA :) .";
  

// ─── KEY TAKEAWAYS ───────────────────────────────────────────────────────────
// Tambah, hapus, atau edit poin di sini. Setiap string = satu bullet point.
const KEY_TAKEAWAYS = [
  "Jadwal Piket | Analisa IPO : SSO | Upload Parameter : RFA | Rebalancing : NDI | ",
  "JD.08 : (Backtest_PUVA) - Sudah dilakukan implementasi production, babysitting 7-11 Sep26.",
  "JD.09 : (Weekly Report Analysis) - sudah finalisasi design dan poc, ops berjalan per Week (sembari penyempurnaan analisa)",
  "JD.11 : (Kajian Transparansi Margin) - Menunggu ketersediaan jadwal pemaparan ke Kadiv PPR.",
  "JD.12 : (Review RC 0%, Min. Offline Coll) - Menunggu ketersediaangit a jadwal pemaparan ke Direktur Ops.",
  "JD.15 : (Virtual Machine) - Jobdesk Closed, diubah menjadi Gitlab KPEI (Ready to use on Sept 26).",
  "JD.16 : (SPAN License Updated) - sudah dikonfirmasi ke Legal dan IT, tidak diperlukan update lisensi dan otomatis untuk penggunaan lanjutan - tbc Razor Risk.",
];
