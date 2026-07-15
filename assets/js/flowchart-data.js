/* =========================================================
   FLOWCHART-DATA.JS
   Daftar metadata 6 kategori (dipakai di index.html untuk
   membangun kartu kategori). Isi node lengkap tiap kategori
   ada di file terpisah: assets/js/kategori-1.js s/d kategori-6.js
   (sumber acuan/dokumentasi tersedia juga di data/kategori-N.json)
   ========================================================= */

window.CATEGORY_LIST = [
  {
    id: "kategori-1",
    file: "kategori-1.html",
    icon: "🗂️",
    tag: "Sidang",
    tagClass: "tag-sidang",
    title: "Administrasi SIPETRA → Sidang Kepengurusan",
    desc: "Alur proses (process flowchart): dari SIPETRA diajukan Pelapor sampai Sidang Kepengurusan Kategori A resmi digelar."
  },
  {
    id: "kategori-2",
    file: "kategori-2.html",
    icon: "🚦",
    tag: "Sidang",
    tagClass: "tag-sidang",
    title: "Gerbang Keputusan Menuju Sidang Kategori A",
    desc: "Alur keputusan (decision flowchart): titik-titik cabang Ya/Tidak yang menentukan apakah SIPETRA lanjut ke Sidang Kategori A."
  },
  {
    id: "kategori-3",
    file: "kategori-3.html",
    icon: "🏊",
    tag: "Sidang",
    tagClass: "tag-sidang",
    title: "Siapa Mengerjakan Apa? (Swimlane)",
    desc: "Alur per-aktor (swimlane): Pelapor, Divisi Kebijakan Publik, Rapat Khusus, hingga Divisi PSDM — siapa bertanggung jawab di tiap langkah."
  },
  {
    id: "kategori-4",
    file: "kategori-4.html",
    icon: "⚖️",
    tag: "Putusan",
    tagClass: "tag-putusan",
    title: "Jalannya Sidang hingga Pelaksanaan Putusan",
    desc: "Alur proses (process flowchart): dari pembukaan sidang, Tahap Pemeriksaan Etik, hingga Putusan berkekuatan hukum tetap."
  },
  {
    id: "kategori-5",
    file: "kategori-5.html",
    icon: "🧭",
    tag: "Putusan",
    tagClass: "tag-putusan",
    title: "Kemungkinan Jenis Putusan Akhir",
    desc: "Alur keputusan (decision flowchart): cabang menuju SIPETRA ditolak, diserahkan ke PSDM, sanksi P2, atau pemberhentian P3."
  },
  {
    id: "kategori-6",
    file: "kategori-6.html",
    icon: "🏊",
    tag: "Putusan",
    tagClass: "tag-putusan",
    title: "Siapa Mengerjakan Apa Saat Putusan? (Swimlane)",
    desc: "Alur per-aktor (swimlane): Pengawas Persidangan, Majelis, Terlapor, Saksi, Sekretaris Majelis, hingga Ketua Himpunan."
  }
];
