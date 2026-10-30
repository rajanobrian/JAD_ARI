const DASHBOARD_META = {
  unitTitle:   "Unit ARI · Analisa Risiko Bisnis",
  pageTitle:   "Job Internal Highlights Assignment Dashboard",
  titleAccent: "Unit ARP",
  headName:    "Raja Nobriansyah [RNR]",
  period:      "Q4 2026",
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
  {no:1,  job:"Laporan & Analisa Stresstesting PM Oct-26",                            cat:"Operasional",         cc:"cat-op", pics:["BAI"],       prio:"Q1", pl:"I·U",  st:"done", wl:4},
  {no:2,  job:"Laporan & Analisa Stresstesting PUVA Oct-26",                          cat:"Operasional",         cc:"cat-op", pics:["RFA","SSO"], prio:"Q1", pl:"I·U",  st:"done", wl:3},
  {no:3,  job:"Laporan dan Analisa Perhitungan KCCP PUVA Oct-26",                     cat:"Operasional",         cc:"cat-op", pics:["RFA"],       prio:"Q1", pl:"I·U",  st:"done", wl:3},
  {no:4,  job:"Laporan & Analisa Backtesting PM Oct-26",                              cat:"Operasional",         cc:"cat-op", pics:["SSO"],       prio:"Q1", pl:"I·U",  st:"done", wl:4},
  {no:5,  job:"Laporan & Analisa Backtesting PUVA Oct-26",                            cat:"Operasional",         cc:"cat-op", pics:["SSO"],       prio:"Q1", pl:"I·U",  st:"done", wl:4},
  {no:6,  job:"Analisa Input dan Analisa Laporan Keuangan - Signifikan Oct-26",       cat:"Operasional",         cc:"cat-op", pics:["NDI"],       prio:"Q1", pl:"I·U",  st:"done", wl:4},
  {no:7,  job:"Kalkulasi Haircut, Eligible SBL, Colldiss Oct-26",                     cat:"Operasional",         cc:"cat-op", pics:["NDI"],       prio:"Q1", pl:"I·U",  st:"on",   wl:5},
  {no:8,  job:"Operational Weekly Report Analisa Risiko PM Oct-26 W1",                cat:"Operasional", cc:"cat-op", pics:["SSO"],       prio:"Q1", pl:"I·U", st:"done",   wl:4},
  {no:9,  job:"Operational Weekly Report Analisa Risiko PM Oct-26 W2",                cat:"Operasional", cc:"cat-op", pics:["NDI"], prio:"Q2", pl:"I·NU", st:"done",   wl:4},
  {no:10, job:"Operational Weekly Report Analisa Risiko PM Oct-26 W3",                cat:"Operasional", cc:"cat-op", pics:["SSO","BAI"], prio:"Q2", pl:"I·NU", st:"done",   wl:4},
  {no:11, job:"Operational Weekly Report Analisa Risiko PM Oct-26 W4",                cat:"Operasional", cc:"cat-op", pics:["SSO","RFA"], prio:"Q2", pl:"I·NU", st:"done",   wl:4},
  {no:12, job:"Operational Weekly Report Analisa Risiko PM Oct-26 W5",                cat:"Operasional", cc:"cat-op", pics:["SSO","NDI"], prio:"Q2", pl:"I·NU", st:"done",   wl:4},
  {no:13, job:"Assessment Saham Not Eligible as Collateral",                          cat:"Kajian & Review",     cc:"cat-np", pics:["NDI","BAI"], prio:"Q1", pl:"I·U", st:"on",   wl:5},
  {no:14, job:"Review Credit Rating/Risk Charge CCP PUVA",                            cat:"Model Review",        cc:"cat-sp", pics:["RFA"],       prio:"Q1", pl:"I·U", st:"done",   wl:5},
  {no:15, job:"Kajian Impact Coll & Risk System Migrasi DWH – Big Data (Scope PPR)",  cat:"Kajian & Review",     cc:"cat-np", pics:["BAI","SSO"], prio:"Q1", pl:"I·U", st:"done",   wl:5},
  {no:16, job:"Kajian Impact Analysis Ticker Code (PSPP)",                            cat:"Kajian & Review",     cc:"cat-np", pics:["NDI"], prio:"Q1", pl:"I·U", st:"on",   wl:4},
  {no:17, job:"Assesment Pengembangan CCP Repo (phase 1-business Concept)",                                      cat:"Support Project",     cc:"cat-sp", pics:["RFA","BAI"], prio:"Q2", pl:"I·NU", st:"done",   wl:5},
  {no:18, job:"Pengembangan Produk UDR-Unit Depository Receipt (Equity)",                                     cat:"Support Project",     cc:"cat-sp", pics:["RFA","NDI"], prio:"Q2", pl:"I·NU", st:"on",   wl:3},
  {no:19, job:"Asessment IM dan Stresstest PUVA (volatilitas nilai hasil kalkulasi) ke Razor",     cat:"Adhoc",     cc:"cat-ad", pics:["RFA"], prio:"Q1", pl:"I·U", st:"done",   wl:4},
  {no:20, job:"Assessment Digital Asset Product in CCP Risk",                         cat:"Support Project",     cc:"cat-sp", pics:["BAI","SSO"], prio:"Q2", pl:"I·NU", st:"on",   wl:4},
  {no:21, job:"Implementasi bisnis ETP pada CCP PUVA",                                  cat:"Support Project",     cc:"cat-sp", pics:["RFA"],       prio:"Q2", pl:"I·NU", st:"on",   wl:3},
  {no:22, job:"Assessment impact Perubahan & perpanjangan jam bursa",                 cat:"Support Project",     cc:"cat-sp", pics:["NDI","SSO"], prio:"Q2", pl:"I·NU", st:"on",   wl:4},
  {no:23, job:"Follow up Issue Volatilitas Margin dan Stresstest PUVA",               cat:"Adhoc",     cc:"cat-ad", pics:["RFA","SSO"], prio:"Q1", pl:"I·U", st:"on",   wl:3},
  {no:24, job:"Persiapan Audit SPI : audit KPI & SMKI ",                              cat:"Adhoc",     cc:"cat-ad", pics:["NDI","BAI"], prio:"Q1", pl:"I·U", st:"on",   wl:3},  
  {no:25, job:"Third Party Model Review (phase 3) - Scope, Meeting, Consultancy.",    cat:"Operasional",     cc:"cat-op", pics:["SSO"], prio:"Q1", pl:"I·U", st:"on",   wl:4},  
  {no:26, job:"KPI Officer - Update pemenuhan KPI Unit - bulanan",                    cat:"Operasional",     cc:"cat-op", pics:["NDI"], prio:"Q1", pl:"I·U", st:"done",   wl:4}, 
  {no:27, job:"Risk Officer - Penyesuaian UAM dan Daftar User Access System (Razor, ARMS, dll)",           cat:"Operasional",     cc:"cat-op", pics:["BAI"], prio:"Q1", pl:"I·U", st:"done",   wl:4},
  {no:28, job:"Implementasi dan Pemanfaatan GitLab KPEI (on Dec 26)",                cat:"Adhoc",     cc:"cat-ad", pics:["SSO"], prio:"Q3", pl:"NI·U", st:"on",   wl:4},
  {no:29, job:"Monthly data Fulfillment for Radirkom Sep-26 (Exp, Margin Call, KCCP)",           cat:"Operasional",     cc:"cat-op", pics:["RFA"], prio:"Q1", pl:"I·U", st:"done",   wl:2},  
  {no:30, job:"Epic Discussion & Closed - LSEG (Marginining Methodology)",                        cat:"Support Project",     cc:"cat-sp", pics:["BAI","SSO"], prio:"Q1", pl:"I·U", st:"done",   wl:5},
  {no:31, job:"Epic Discussion &  Closed- LSEG (Business CCP REPO design)",                       cat:"Support Project",     cc:"cat-sp", pics:["BAI"], prio:"Q1", pl:"I·U", st:"on",   wl:5},
  {no:32, job:"Epic Discussion & Closed - LSEG (Risk Testing & POC)",                             cat:"Support Project",     cc:"cat-sp", pics:["BAI","SSO"], prio:"Q1", pl:"I·U", st:"done",   wl:5},
  {no:33, job:"Kalkulasi Persentase Kecukupan Sumber Keuangan CCP dan Keandalan Stress Testing - KPI Unggulan", cat:"Operasional",     cc:"cat-op", pics:["NDI"], prio:"Q1", pl:"I·U", st:"done",   wl:4},
  {no:34, job:"Update POS dan Risk Register atas penyesuaian operasional HC KPEI",    cat:"Adhoc",     cc:"cat-ad", pics:["BAI"], prio:"Q1", pl:"I·U", st:"done",   wl:2},
  {no:35, job:"Pemenuhan data Statistik PUVA ke RPB periode Oct-26 (H+3 Awal Bulan)", cat:"Adhoc",     cc:"cat-ad", pics:["RFA"], prio:"Q2", pl:"I·NU", st:"done",   wl:3},
  {no:36, job:"Risk Model Review - Adhoc Credit Risk",                                cat:"Adhoc",     cc:"cat-ad", pics:["NDI"], prio:"Q1", pl:"I·U", st:"done",   wl:4},
  {no:37, job:"Kajian Collateral Eligibility SBL, brief study  sbl v shortsell",      cat:"Adhoc",     cc:"cat-ad", pics:["SSO"], prio:"Q1", pl:"I·U", st:"on",   wl:3},
  {no:38, job:"Audit OJK - Parameter Risiko dan Publikasi perhitungan HC",            cat:"Adhoc",     cc:"cat-ad", pics:["NDI"], prio:"Q2", pl:"I·NU", st:"done",   wl:4},
  {no:39, job:"FU teknis XBRL ke Bursa Efek, asessment feeding data laporan keuangan",           cat:"Adhoc",     cc:"cat-ad", pics:["NDI", "SSO"], prio:"Q1", pl:"I·U", st:"on",   wl:2},
  {no:40, job:"Mock Penyempurnaan Sistem Kliring CCP OTC Derivatif Fase 2 (medium - Low)",           cat:"Support Project",     cc:"cat-sp", pics:["RFA"], prio:"Q2", pl:"I·NU", st:"done",   wl:3},
  {no:41, job:"Mock Perubahan Form SW (E082, E083, B029)",                            cat:"Adhoc",     cc:"cat-ad", pics:["NDI", "BAI"], prio:"Q1", pl:"I·U", st:"done",   wl:3},
  {no:42, job:"Review Kebijakan dan Manual Manajemen Risiko",                         cat:"Adhoc",     cc:"cat-ad", pics:["NDI"], prio:"Q1", pl:"I·U", st:"done",   wl:3},
  {no:43, job:"Pengembangan Produk EGR-Electronic Gold Receipt (Equity)",             cat:"Support Project",     cc:"cat-sp", pics:["SSO","NDI"], prio:"Q2", pl:"I·NU", st:"on",   wl:3},
  {no:44, job:"Laporan & Analisa Risk Charge Anggota Kliring PM",                     cat:"Operasional",     cc:"cat-op", pics:["BAI"], prio:"Q1", pl:"I·U", st:"done",   wl:3},
  {no:45, job:"Analisa dan Pemaparan Materi Sensitivity market risk & collateral (MSCI)",                     cat:"Adhoc",     cc:"cat-ad", pics:["NDI","SSO"], prio:"Q1", pl:"I·U", st:"done",   wl:3},
  {no:46, job:"Materi Executive Summary untuk FGD ke OJK",                     cat:"Adhoc",     cc:"cat-ad", pics:["NDI","SSO"], prio:"Q1", pl:"I·U", st:"done",   wl:3},
  {no:47, job:"Mock SW - Perubahan FORM ARMS-Razor",                     cat:"Support Project",     cc:"cat-sp", pics:["NDI","BAI"], prio:"Q1", pl:"I·U", st:"done",   wl:3},
  {no:48, job:"Mock SW - C-Guards Medium-Low - Razor",                     cat:"Support Project",     cc:"cat-sp", pics:["RFA"], prio:"Q1", pl:"I·U", st:"done",   wl:3},
  {no:49, job:"Penyampaian Data Rekap - Rebalancing Aug-25 - OJK",                     cat:"Adhoc",     cc:"cat-ad", pics:["SSO"], prio:"Q1", pl:"I·U", st:"done",   wl:3},
  {no:50, job:"Adhoc Rebal SImulation with current data (RX data Transaction 16-okt-26)",                     cat:"Adhoc",     cc:"cat-ad", pics:["SSO"], prio:"Q1", pl:"I·U", st:"done",   wl:3},
  {no:51, job:"Babysitting Implementasi C-Guards Medium-Low to Razor",                     cat:"Adhoc",     cc:"cat-ad", pics:["RFA"], prio:"Q1", pl:"I·U", st:"done",   wl:3},
  {no:52, job:"Kalkulasi DFC 3 bulanan dan Surat Penagihan kepada anggota CCP",                     cat:"Adhoc",     cc:"cat-ad", pics:["RFA"], prio:"Q1", pl:"I·U", st:"done",   wl:4},
  {no:53, job:"Presentasi Pengenalan Risk dan Collateral Management ke OKB KPEI 23-okt26",                     cat:"Adhoc",     cc:"cat-ad", pics:["RFA"], prio:"Q1", pl:"I·U", st:"done",   wl:3},
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
  "WELCOME TO November ." +
  " · " +
  " · " +
  "YOK KEJAR SEMUA DEADLINE BIAR GA DEADLOCK ." +
  " · " +
  " · " +
  "SEMANGAT SEMUANYA :) .";
  

// ─── KEY TAKEAWAYS ───────────────────────────────────────────────────────────
// Tambah, hapus, atau edit poin di sini. Setiap string = satu bullet point.
const KEY_TAKEAWAYS = [
  "Jadwal Piket | Analisa IPO : SSO | Upload Parameter : BAI | Rebalancing : NDI | ",
  "JD.08 : (Backtest_PUVA) - SUdah berjalan, babysitting perpanjang sampai desember s/d populasi data tercukupi",
  "JD.09 : (Weekly Report Analysis) - sudah diterapkan menjadi operasional rutin, sudah berjalan dan selesai tiap minggu.",
  "JD.11 : (Kajian Transparansi Margin) - Menunggu ketersediaan jadwal pemaparan ke Kadiv PPR.",
  "JD.12 : (Review RC 0%, Min. Offline Coll) - Sudah selesai pemaparan ke direksi dan disetujui",
  "JD.15 : (Virtual Machine) - Jobdesk Closed, diubah menjadi Gitlab KPEI (Ready to use on Sept 26).",
  "JD.16 : (SPAN License Updated) - sudah dikonfirmasi ke Legal dan IT, tidak diperlukan update lisensi dan otomatis untuk penggunaan lanjutan - tbc Razor Risk.",
  "JD.13 : (Risk Charge CCP PUVA) - Sudah disetujui Kadiv PPR, menunggu implementasi di Razor Risk. TBC- IT-Direksi-Komite",
];
