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
  {no:1,  job:"Stresstesting PM Aug-26",                                                  cat:"Operasional",         cc:"cat-op", pics:["BAI"],       prio:"Q1", pl:"I·U",  st:"done", wl:4},
  {no:2,  job:"Stresstesting PUVA Aug-26",                                                cat:"Operasional",         cc:"cat-op", pics:["RFA","SSO"],       prio:"Q1", pl:"I·U",  st:"done", wl:3},
  {no:3,  job:"Perhitungan KCCP PUVA Aug-26",                                             cat:"Operasional",         cc:"cat-op", pics:["RFA"],       prio:"Q1", pl:"I·U",  st:"done", wl:4},
  {no:4,  job:"Backtesting PM Aug-26",                                                    cat:"Operasional",         cc:"cat-op", pics:["SSO"],       prio:"Q1", pl:"I·U",  st:"done", wl:4},
  {no:5,  job:"Input dan Analisa Laporan Keuangan - Signifikan Aug-26",                   cat:"Operasional",         cc:"cat-op", pics:["NDI"],       prio:"Q1", pl:"I·U",  st:"on", wl:4},
  {no:6,  job:"Kalkulasi Haircut, Eligible SBL, Colldiss Aug-26",                     cat:"Operasional",         cc:"cat-op", pics:["NDI"],       prio:"Q1", pl:"I·U",  st:"on",   wl:5},
  {no:7,  job:"Sensitivity Analysis Aug-26-26: Simulasi MKBD, Simulasi Trading Limit",      cat:"Operasional",         cc:"cat-op", pics:["NDI"],       prio:"Q1", pl:"I·U",  st:"on",   wl:4},
  {no:8,  job:"Implementasi Backtest PUVA - Production",                       cat:"Inisiatif Project",   cc:"cat-ip", pics:["RFA"],       prio:"Q1", pl:"I·U",  st:"on",   wl:4},
  {no:9,  job:"Weekly Report Analisa Risiko PM-PUVA",                              cat:"Inisiatif non Proj.", cc:"cat-np", pics:["SSO","NDI"], prio:"Q2", pl:"I·NU", st:"on",   wl:5},
  {no:10, job:"Review & Analisa LK + parameter fundamental",                      cat:"Kajian & Review",     cc:"cat-np", pics:["NDI"],       prio:"Q2", pl:"I·NU", st:"on",   wl:5},
  {no:11, job:"Kajian Transparansi Marjin PM-PUVA",                                cat:"Kajian & Review",     cc:"cat-np", pics:["RFA"],       prio:"Q2", pl:"I·NU", st:"done",   wl:4},
  {no:12, job:"Review RC 0%, Min. Agunan Offline",                                 cat:"Model Review",        cc:"cat-sp", pics:["BAI","SSO"], prio:"Q2", pl:"I·NU", st:"done",   wl:5},
  {no:13, job:"Assessment Saham Not Eligible as Collateral",                       cat:"Kajian & Review",     cc:"cat-np", pics:["NDI","BAI"], prio:"Q1", pl:"I·U", st:"on",   wl:5},
  {no:14, job:"Review Credit Rating/Risk Charge CCP PUVA",                         cat:"Model Review",        cc:"cat-sp", pics:["RFA"],       prio:"Q1", pl:"I·NU", st:"on",   wl:5},
  {no:15, job:"VM request, Otomasi Proses ARI",                                    cat:"Inisiatif non Proj.", cc:"cat-np", pics:["SSO"],       prio:"Q4", pl:"NI·NU", st:"Closed",   wl:5},
  {no:16, job:"SPAN License Updated",                                              cat:"Inisiatif non Proj.", cc:"cat-np", pics:["NDI"],       prio:"Q2", pl:"I·NU", st:"done",   wl:4},
  {no:17, job:"Pengadaan Mobile Workstation @risk",                                cat:"Inisiatif non Proj.", cc:"cat-np", pics:["SSO"],       prio:"Q3", pl:"U·NI", st:"done",   wl:3},
  {no:18, job:"Kajian Impact Coll & Risk System Migrasi DWH – Big Data (Scope PPR)",                                  cat:"Kajian & Review",     cc:"cat-np", pics:["BAI","SSO"], prio:"Q1", pl:"I·U", st:"on",   wl:5},
  {no:19, job:"Kajian Impact Analysis Ticker Code (PSPP)",                                cat:"Kajian & Review",     cc:"cat-np", pics:["RFA","NDI"], prio:"Q1", pl:"I·U", st:"on",   wl:4},
  {no:20, job:"Asessment Upgrade System Razor Risk 5.0",                                     cat:"Inisiatif non Proj.", cc:"cat-np", pics:["BAI","SSO"], prio:"Q2", pl:"I·NU",  st:"on",   wl:5},
  {no:21, job:"Materi PSKR - Opsi strategi Risk Management System (1)Razor, (2)Razor-LSEG, (3)LSEG",           cat:"Support Project",     cc:"cat-sp", pics:["BAI"], prio:"Q2", pl:"I·NU", st:"on",   wl:4},
  {no:22, job:"Surrounding SKD Exchange – Risk System",                            cat:"Support Project",     cc:"cat-sp", pics:["RFA","NDI"], prio:"Q3", pl:"U·NI", st:"on",   wl:4},
  {no:23, job:"Assessment Pengembangan Produk PALN (Derivatif)",                              cat:"Support Project",     cc:"cat-sp", pics:["RFA", "BAI"],prio:"Q2", pl:"I·NU", st:"done",   wl:5},
  {no:24, job:"Assesment Pengembangan CCP Repo",                                             cat:"Support Project",     cc:"cat-sp", pics:["RFA","BAI"], prio:"Q2", pl:"I·NU", st:"on",   wl:5},
  {no:25, job:"Doc Requirement PSKR – Migrasi Nasdaq to LSEG",                                     cat:"Support Project",     cc:"cat-sp", pics:["BAI"],       prio:"Q1", pl:"I·U",  st:"done",   wl:5},
  {no:26, job:"Pengembangan Produk UDR, EGR (Equity)",                             cat:"Support Project",     cc:"cat-sp", pics:["RFA","NDI"], prio:"Q2", pl:"I·NU", st:"on",   wl:3},
  {no:27, job:"Asessment IM dan Stresstest PUVA (volatilitas nilai hasil kalkulasi) ke Razor",           cat:"Adhoc",     cc:"cat-ad", pics:["RFA"], prio:"Q2", pl:"I·NU", st:"on",   wl:4},
  {no:28, job:"Assessment Digital Asset Product in CCP Risk",                      cat:"Support Project",     cc:"cat-sp", pics:["BAI","SSO"], prio:"Q2", pl:"I·NU", st:"on",   wl:4},
  {no:29, job:"Assessment kesiapan sistem risk untuk live OIS PUVA",           cat:"Support Project",     cc:"cat-sp", pics:["RFA","SSO"], prio:"Q2", pl:"I·NU", st:"done",   wl:5},
  {no:30, job:"Review Kebijakan Manajemen Risiko seluruh pasal PM - KPEI",                       cat:"Legal Review",        cc:"cat-np", pics:["NDI"],       prio:"Q2", pl:"I·NU", st:"done",   wl:5},
  {no:31, job:"Implementasi ETP pada CCP PUVA",                                    cat:"Support Project",     cc:"cat-sp", pics:["RFA"],       prio:"Q2", pl:"I·NU", st:"on",   wl:3},
  {no:32, job:"Assessment impact Perubahan & perpanjangan jam bursa",              cat:"Support Project",     cc:"cat-sp", pics:["NDI","SSO"], prio:"Q2", pl:"I·NU", st:"on",   wl:4},
  {no:33, job:"Follow up Issue Volatilitas Margin dan Stresstest PUVA",           cat:"Adhoc",     cc:"cat-ad", pics:["RFA"], prio:"Q1", pl:"I·U", st:"on",   wl:3},
  {no:34, job:"Third Party- Model Review & Validation (phase 1)",           cat:"Inisiatif Project",     cc:"cat-ip", pics:["SSO","RFA"], prio:"Q1", pl:"I·U", st:"done",   wl:5},
  {no:35, job:"Persiapan Audit SPI : audit KPI & SMKI ",           cat:"Adhoc",     cc:"cat-ad", pics:["NDI","BAI"], prio:"Q1", pl:"I·U", st:"on",   wl:4},  
  {no:36, job:"Third Party Model Review (phase 2) - Proposal, RKAT, Pengadaan.",           cat:"Operasional",     cc:"cat-op", pics:["SSO"], prio:"Q1", pl:"I·U", st:"on",   wl:4},  
  {no:41, job:"Trading Limit Troubleshooting Calculation on Razor PM",           cat:"Operasional",     cc:"cat-op", pics:["BAI"], prio:"Q1", pl:"I·U", st:"done",   wl:4},
  {no:37, job:"KPI Officer - Update pemenuhan KPI Unit - bulanan",           cat:"Operasional",     cc:"cat-op", pics:["NDI"], prio:"Q1", pl:"I·U", st:"done",   wl:4}, 
  {no:38, job:"Risk Officer - Penyesuaian UAM dan Daftar User Access System (Razor, ARMS, dll)",           cat:"Operasional",     cc:"cat-op", pics:["BAI"], prio:"Q1", pl:"I·U", st:"done",   wl:4},
  {no:39, job:"Implementasi dan Pemanfaatan GitLab KPEI (on Sept 26)",           cat:"Adhoc",     cc:"cat-ad", pics:["SSO"], prio:"Q3", pl:"NI·U", st:"on",   wl:4},
  {no:40, job:"Monthly data Fulfillment for Radirkom Aug-26 (Exp, Margin Call, KCCP)",           cat:"Operasional",     cc:"cat-op", pics:["RFA"], prio:"Q1", pl:"I·U", st:"done",   wl:2},
  {no:41, job:"Quarterly data Fulfillment for PQD-PFMI Q2-26",           cat:"Operasional",     cc:"cat-op", pics:["RFA","SSO"], prio:"Q2", pl:"I·NU", st:"done",   wl:3},
  {no:41, job:"Operational Issue - Troubleshooting BBRI missing data",           cat:"Operasional",     cc:"cat-op", pics:["BAI"], prio:"Q1", pl:"I·U", st:"done",   wl:4},
  {no:42, job:"Asessment KCCP - Client Level Razor-Cguards (PUVA)",           cat:"Support Project",     cc:"cat-sp", pics:["RFA"], prio:"Q2", pl:"I·NU", st:"done",   wl:3},
  {no:43, job:"Support Industrial Test Calon Anggota CCP (OCBC & JTrust)",           cat:"Adhoc",     cc:"cat-ad", pics:["RFA"], prio:"Q1", pl:"I·U", st:"done",   wl:3},
  {no:44, job:"BCP Officer - Pengecekan Alternater Site DRC dan Aplikasi Unit ARP",           cat:"Adhoc",     cc:"cat-ad", pics:["RFA"], prio:"Q2", pl:"I·NU", st:"done",   wl:3},
  {no:45, job:"Design Study - LSEG (Marginining Methodology)",           cat:"Support Project",     cc:"cat-sp", pics:["BAI","SSO"], prio:"Q1", pl:"I·U", st:"done",   wl:5},
  {no:46, job:"Materi Calculation Method and Collateral - for Management & FTSE",           cat:"Adhoc",     cc:"cat-ad", pics:["NDI","SSO"], prio:"Q1", pl:"I·U", st:"on",   wl:4},
  {no:47, job:"Materi Haircut Flow & Calculation - For Blackrock",           cat:"Adhoc",     cc:"cat-ad", pics:["NDI","SSO"], prio:"Q1", pl:"I·U", st:"on",   wl:4},
  {no:48, job:"Kalkulasi Persentase Kecukupan Sumber Keuangan CCP dan Keandalan Stress Testing - KPI Unggulan",           cat:"Operasional",     cc:"cat-op", pics:["NDI"], prio:"Q1", pl:"I·U", st:"done",   wl:4},
  {no:49, job:"Review Peraturan BEI Nomor I-E tentang Kewajiban Penyampaian Informasi",           cat:"Adhoc",     cc:"cat-ad", pics:["NDI"], prio:"Q3", pl:"I·U", st:"done",   wl:2},

 
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
  "FOKUS PERSIAPAN AUDIT ." +
  " · " +
  " · " +
  "UPDATE CAPAIAN DAN CATATAN PROGRESS MASING MASING PROJECT DAN ASSESSMENT ." +
  " · " +
  " · " +
  "SEMANGAT SEMUANYA :) .";
  

// ─── KEY TAKEAWAYS ───────────────────────────────────────────────────────────
// Tambah, hapus, atau edit poin di sini. Setiap string = satu bullet point.
const KEY_TAKEAWAYS = [
  "Jadwal Piket | Analisa IPO : NDI | Upload Parameter : BAI | Rebalancing : SSO | ",
  "JD.08 : (Backtest_PUVA) - Sudah selesai PenTest, terdapat temuan dan diperlukan kesepakatan untuk proses lanjut dengan catatan dari tim IT terkait penanganan temuan.",
  "JD.11 : (Kajian Transparansi Margin) - Menunggu ketersediaan jadwal pemaparan ke Kadiv PPR.",
  "JD.12 : (Review RC 0%, Min. Offline Coll) - Menunggu ketersediaan jadwal pemaparan ke Direktur Ops.",
  "JD.15 : (Virtual Machine) - Jobdesk Closed, diubah menjadi Gitlab KPEI (Ready to use on Sept 26).",
  "JD.16 : (SPAN License Updated) - sudah dikonfirmasi ke Legal dan IT, tidak diperlukan update lisensi dan otomatis untuk penggunaan lanjutan - tbc Razor Risk.",
  "JD.22 : (Materi Opsi Strategi PSKR) - Menunggu Review Kanit ARP.",
  "JD.23 : (SKD Exchanges upgrade) - Pengujian masih berlangsung.",
  "JD.31 : (Review Risk Policy PM) - Review bisnis Done, Legal Done, Menunggu tanggapan/review PST untuk acuan PFMI.",
];
