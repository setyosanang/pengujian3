/* KATEGORI 2 — Sidang: Decision Flowchart
   Sumber: flow-kategoriA/sidang/sidang-decision.png
   Silang-acu: Persus SIPETRA Pasal 29 & Pedoman Teknis Pasal 27 ayat (5)-(6) */
window.KATEGORI_DATA = {
  id: "kategori-2",
  title: "Gerbang Keputusan: SIPETRA Menuju Sidang Kepengurusan Kategori A",
  subtitle: "Decision Flowchart — fokus pada titik-titik cabang Ya/Tidak yang menentukan nasib sebuah SIPETRA.",
  legalRef: "Persus SIPETRA Pasal 29 & Pedoman Teknis Pasal 27",
  startId: "start",
  nodes: {
    start: {
      type: "start",
      title: "SIPETRA diajukan Pelapor",
      description: "Anggota aktif HIMAGRIND-PNC mengajukan dokumen SIPETRA sebagai titik masuk seluruh alur keputusan berikut.",
      next: "d1"
    },
    d1: {
      type: "decision",
      title: "Memenuhi syarat pengajuan SIPETRA?",
      description: "Diperiksa apakah pengaju adalah anggota aktif, data diri & saksi lengkap, bukti terlampir, serta bebas SARA/ujaran kebencian dan ad hominem (Pasal 29).",
      legalRef: "Persus SIPETRA Pasal 29",
      choices: [
        { label: "Tidak", next: "p1" },
        { label: "Ya", next: "d2" }
      ]
    },
    p1: {
      type: "process",
      title: "Dokumen dikembalikan untuk dilengkapi",
      description: "SIPETRA yang belum lengkap dikembalikan untuk diperbaiki, dengan batas maksimal 3 format SIPETRA yang tersedia dalam sebulan.",
      legalRef: "Persus SIPETRA Pasal 29 ayat (7)",
      next: "d1"
    },
    d2: {
      type: "decision",
      title: "Dokumen dikaji & dinyatakan absah?",
      description: "Setelah diseleksi bidang Peraturan Organisasi, Divisi Kebijakan Publik mengkaji dan menentukan keabsahan serta keterkaitan dokumen dengan Sidang Kepengurusan.",
      choices: [
        { label: "Tidak absah", next: "p2" },
        { label: "Ya, absah", next: "d3" }
      ]
    },
    p2: {
      type: "process",
      title: "SIPETRA tidak dilanjutkan ke Sidang Kepengurusan",
      description: "Dokumen yang dinyatakan tidak absah dihentikan di tahap ini dan tidak diteruskan ke Sidang Kepengurusan.",
      next: "end1"
    },
    end1: {
      type: "end",
      title: "SELESAI (tidak berlanjut ke sidang)",
      description: "Alur berhenti karena SIPETRA tidak lolos syarat awal atau dinyatakan tidak absah."
    },
    d3: {
      type: "decision",
      title: "Rapat khusus: terbukti melanggar P2/P3?",
      description: "Dalam rapat khusus yang melibatkan Divisi Kebijakan Publik, Ketua HIMAGRIND-PNC, dan Divisi PSDM, ditimbang apakah pihak terkait terbukti melanggar kode etik P2/P3.",
      actor: "Rapat Khusus",
      choices: [
        { label: "Tidak", next: "p3" },
        { label: "Ya", next: "p4" }
      ]
    },
    p3: {
      type: "process",
      title: "Perkara diserahkan ke Divisi PSDM",
      description: "Karena tidak terbukti melanggar P2/P3, perkara diserahkan ke Divisi PSDM untuk ditindak sesuai sanksi P1.",
      actor: "Divisi PSDM",
      next: "end1"
    },
    p4: {
      type: "process",
      title: "Penetapan perkara & kategori A → Sidang diselenggarakan",
      description: "Perkara ditetapkan sebagai Sidang Kepengurusan Kategori A dan sidang resmi diselenggarakan oleh Majelis.",
      actor: "Majelis",
      next: "end2"
    },
    end2: {
      type: "end",
      title: "LANJUT KE TAHAP PUTUSAN",
      description: "Keputusan administrasi selesai; proses berlanjut ke kategori 'Putusan' untuk pemeriksaan substantif oleh Majelis."
    }
  }
};
