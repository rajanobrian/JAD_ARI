const DASHBOARD_META = {
  unitTitle:   "Unit ARI · Analisa Risiko Bisnis",
  pageTitle:   "Job Assignment Dashboard",
  titleAccent: "Unit ARI",
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
  {no:1,  job:"Stresstesting PM Juni-26",                                                  cat:"Operasional",         cc:"cat-op", pics:["BAI"],       prio:"Q1", pl:"I·U",  st:"done", wl:4},
  {no:2,  job:"Stresstesting PUVA Juni-26",                                                cat:"Operasional",         cc:"cat-op", pics:["RFA"],       prio:"Q1", pl:"I·U",  st:"done", wl:3},
  {no:3,  job:"Perhitungan KCCP PUVA Juni-26",                                             cat:"Operasional",         cc:"cat-op", pics:["RFA"],       prio:"Q1", pl:"I·U",  st:"done", wl:4},
  {no:4,  job:"Backtesting PM Juni-26",                                                    cat:"Operasional",         cc:"cat-op", pics:["SSO"],       prio:"Q1", pl:"I·U",  st:"done", wl:4},
  {no:5,  job:"Input dan Analisa Laporan Keuangan - Signifikan",                   cat:"Operasional",         cc:"cat-op", pics:["NDI"],       prio:"Q1", pl:"I·U",  st:"on", wl:4},
  {no:6,  job:"Kalkulasi Haircut, Eligible SBL, Colldiss Juni-26",                     cat:"Operasional",         cc:"cat-op", pics:["NDI"],       prio:"Q1", pl:"I·U",  st:"on",   wl:5},
  {no:7,  job:"Sensitivity Analysis April-26: Simulasi MKBD, Simulasi Trading Limit",      cat:"Operasional",         cc:"cat-op", pics:["NDI"],       prio:"Q1", pl:"I·U",  st:"on",   wl:3},
  {no:8,  job:"Finalisasi Pengujian Backtest PUVA (EOM-Juni)",                       cat:"Inisiatif Project",   cc:"cat-ip", pics:["RFA"],       prio:"Q1", pl:"I·U",  st:"on",   wl:5},
  {no:9,  job:"Weekly Report Analisa Risiko PM-PUVA",                              cat:"Inisiatif non Proj.", cc:"cat-np", pics:["SSO","NDI"], prio:"Q2", pl:"I·NU", st:"on",   wl:5},
  {no:10, job:"Review & Analisa LK + parameter fundamental",                      cat:"Kajian & Review",     cc:"cat-np", pics:["NDI"],       prio:"Q2", pl:"I·NU", st:"on",   wl:5},
  {no:11, job:"Kajian Transparansi Marjin PM-PUVA",                                cat:"Kajian & Review",     cc:"cat-np", pics:["RFA"],       prio:"Q2", pl:"I·NU", st:"on",   wl:4},
  {no:12, job:"Concentration Limit SBN PUVA - Finalisasi",                         cat:"Kajian & Review",     cc:"cat-np", pics:["SSO"],       prio:"Q2", pl:"I·NU", st:"on",   wl:5},
  {no:13, job:"Review RC 0%, Min. Agunan Offline",                                 cat:"Model Review",        cc:"cat-sp", pics:["BAI","SSO"], prio:"Q2", pl:"I·NU", st:"on",   wl:5},
  {no:14, job:"Assessment Saham Not Eligible as Collateral",                       cat:"Kajian & Review",     cc:"cat-np", pics:["NDI","BAI"], prio:"Q2", pl:"I·NU", st:"on",   wl:5},
  {no:15, job:"Review Credit Rating/Risk Charge CCP PUVA",                         cat:"Model Review",        cc:"cat-sp", pics:["RFA"],       prio:"Q2", pl:"I·NU", st:"on",   wl:5},
  {no:16, job:"VM request, Otomasi Proses ARI",                                    cat:"Inisiatif non Proj.", cc:"cat-np", pics:["SSO"],       prio:"Q2", pl:"I·NU", st:"on",   wl:5},
  {no:17, job:"SPAN License Updated",                                              cat:"Inisiatif non Proj.", cc:"cat-np", pics:["NDI"],       prio:"Q2", pl:"I·NU", st:"on",   wl:4},
  {no:18, job:"Pengadaan Laptop Workstation @risk",                                cat:"Inisiatif non Proj.", cc:"cat-np", pics:["SSO"],       prio:"Q3", pl:"U·NI", st:"on",   wl:3},
  {no:19, job:"Migrasi DWH – Big Data (All PPR)",                                  cat:"Kajian & Review",     cc:"cat-np", pics:["BAI","SSO"], prio:"Q2", pl:"I·NU", st:"on",   wl:5},
  {no:20, job:"Impact Analysis Ticker Code (PSPP)",                                cat:"Kajian & Review",     cc:"cat-np", pics:["RFA","NDI"], prio:"Q2", pl:"I·NU", st:"on",   wl:5},
  {no:21, job:"Upgrade System Razor Risk 5.0",                                     cat:"Inisiatif non Proj.", cc:"cat-np", pics:["BAI","SSO"], prio:"Q1", pl:"I·U",  st:"on",   wl:5},
  {no:22, job:"Omnibus – Kliring & Risk SETW (live Juni)",                       cat:"Support Project",     cc:"cat-sp", pics:["BAI","SSO"], prio:"Q1", pl:"I·U",  st:"on",   wl:4},
  {no:23, job:"Surrounding SKD Exchange – Risk System",                            cat:"Support Project",     cc:"cat-sp", pics:["RFA","NDI"], prio:"Q3", pl:"U·NI", st:"on",   wl:4},
  {no:24, job:"Pengembangan Produk PALN (Derivatif)",                              cat:"Support Project",     cc:"cat-sp", pics:["RFA", "BAI"],prio:"Q2", pl:"I·NU", st:"on",   wl:5},
  {no:25, job:"Pengembangan CCP Repo",                                             cat:"Support Project",     cc:"cat-sp", pics:["RFA","BAI"], prio:"Q2", pl:"I·NU", st:"on",   wl:5},
  {no:26, job:"PSKR – Migrasi Nasdaq to LSEG (W3-Mei)",                                     cat:"Support Project",     cc:"cat-sp", pics:["BAI"],       prio:"Q1", pl:"I·U",  st:"on",   wl:5},
  {no:27, job:"Produk UDR, EGR (Equity)",                                          cat:"Support Project",     cc:"cat-sp", pics:["RFA","NDI"], prio:"Q2", pl:"I·NU", st:"on",   wl:5},
  {no:28, job:"Review & Kajian HSC, Rekomendasi HC",                               cat:"Adhoc",               cc:"cat-ad", pics:["NDI","SSO"], prio:"Q1", pl:"I·U",  st:"on",   wl:5},
  {no:29, job:"Assessment Digital Asset Product in CCP Risk",                      cat:"Support Project",     cc:"cat-sp", pics:["BAI","SSO"], prio:"Q2", pl:"I·NU", st:"on",   wl:4},
  {no:30, job:"Review dan perubahan masa jabatan Komite HC – Juni 2026",           cat:"Adhoc",               cc:"cat-ad", pics:["NDI"],       prio:"Q1", pl:"I·U",  st:"on",   wl:5},
  {no:31, job:"Review Kebijakan Manajemen Risiko seluruh pasal PM - KPEI",                       cat:"Legal Review",        cc:"cat-np", pics:["NDI"],       prio:"Q2", pl:"I·NU", st:"on",   wl:5},
  {no:32, job:"Revisi Kebijakan - Manual Kebijakan PUVA (Stresstest Cover 1)",                 cat:"Legal Review",        cc:"cat-np", pics:["RFA"],       prio:"Q2", pl:"I·NU", st:"on",   wl:3},
  {no:33, job:"Assessment impact Perubahan & perpanjangan jam bursa",              cat:"Support Project",     cc:"cat-sp", pics:["NDI","SSO"], prio:"Q2", pl:"I·NU", st:"on",   wl:4},
  {no:34, job:"Implementasi ETP pada CCP PUVA",                                    cat:"Support Project",     cc:"cat-sp", pics:["RFA"],       prio:"Q2", pl:"I·NU", st:"on",   wl:3},
  {no:35, job:"Assessment kesiapan sistem risk untuk live OIS/IRS PUVA",           cat:"Support Project",     cc:"cat-sp", pics:["RFA","SSO"], prio:"Q2", pl:"I·NU", st:"on",   wl:5},
  {no:36, job:"Pengisian & Review Public Quantitative Disclosure",           cat:"Legal Review",     cc:"cat-np", pics:["RFA"], prio:"Q1", pl:"I·U", st:"on",   wl:5},
  {no:37, job:"Materi dan Persiapan Checklist Onsite Visit Razor",           cat:"Adhoc",     cc:"cat-np", pics:["BAI"], prio:"Q1", pl:"I·U", st:"on",   wl:4},
  {no:38, job:"Permohonan Assessment Pengelolaan jaminan dan Penjaminan Transaksi Margin PEI",           cat:"Support Project",     cc:"cat-sp", pics:["BAI","SSO"], prio:"Q2", pl:"I·NU", st:"on",   wl:4},
  {no:39, job:"Materi PSKR - Opsi strategi Risk Management System (1)Razor, (2)Razor-LSEG, (3)LSEG",           cat:"Support Project",     cc:"cat-sp", pics:["BAI"], prio:"Q2", pl:"I·NU", st:"on",   wl:4},
  {no:40, job:"Asessment IM dan Stresstest PUVA (volatilitas nilai hasil kalkulasi) ke Razor",           cat:"Adhoc",     cc:"cat-np", pics:["RFA"], prio:"Q2", pl:"I·NU", st:"on",   wl:4},
  {no:41, job:"PIC persiapan Audit ISO - Divisi PPR/ARI",           cat:"Adhoc",     cc:"cat-np", pics:["BAI"], prio:"Q1", pl:"I·U", st:"on",   wl:5},
];

const WL_LABELS = {
  1: "Ringan",
  2: "Sedang-Ringan",
  3: "Sedang",
  4: "Sedang-Berat",
  5: "Berat",
};

// ─── RUNNING TEXT (Ticker Bar) ───────────────────────────────────────────────
// Edit the text below to update the scrolling red bar between header and content.
// Use  " · "  as a separator between items.
const RUNNING_TEXT =
  "SELAMAT PAGI ! ." +
  " ." +
  " ." +
  "PREPARE FOR BIG DAY ! ." +
  " · " +
  " · " +
  "REBALANCING FTSE & PRE-LIVE OMNIBUS ." +
  " · " +
  " · " +
  "SEMANGAT SEMUANYA :) .";
  

// ─── KEY TAKEAWAYS ───────────────────────────────────────────────────────────
// Tambah, hapus, atau edit poin di sini. Setiap string = satu bullet point.
const KEY_TAKEAWAYS = [
  "Jadwal Piket | Analisa IPO : BAI | Upload Parameter : SSO | Rebalancing : RFA | ",
  "JD.28 : (HSC Analysis) - Review ulang data analisa HSC dan Kepemilikan >1% sesuai arahan Kadiv",
  "JD.08 : (Backtest_PUVA) - BT summary sedang difollow up ke Priyank dan masuk JIRA",
  "JD.22 : (Omnibus Risk) - Final Testing, Release exposure omnibus Settlement sudah oke (finalisasi pengujian)",
  "JD.32 : (Review Kebijakan Risiko PM) - Done Penyampaian kepada Kadiv PPR, dan Revisi usulan",
  "JD.18 : (Pengadaan Laptop Workstation @Risk) - Kekurangan Anggaran pengadaan menggunakan budget DLT, usulan revisi RKAT unit ARI",
  "JD.16 : (Virtual Machine) - dalam proses Penetration Test",
  "JD.23 : (SKD Exchange) - Support Validasi hitungan VM dan Blocked coll",
];
