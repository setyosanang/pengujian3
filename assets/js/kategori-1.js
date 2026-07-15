/* KATEGORI 1 — Sidang: Process Flowchart
   Sumber: flow-kategoriA/sidang/sidang-process.png
   Silang-acu: pedoman_teknis_re4.docx Pasal 27 ayat (5) & SIPETRA Pasal 29 */
window.KATEGORI_DATA = {
  id: "kategori-1",
  title: "Administrasi SIPETRA hingga Sidang Kepengurusan Kategori A",
  subtitle: "Process Flowchart — jalur utama tanpa cabang, langkah demi langkah dari pengajuan SIPETRA sampai Sidang Kategori A resmi dibuka.",
  legalRef: "Pedoman Teknis Pasal 27 ayat (5) & Persus SIPETRA Pasal 29",
  startId: "start",
  nodes: {
    start: {
      type: "start",
      title: "MULAI",
      description: "Titik awal alur administrasi penanganan SIPETRA yang berpotensi menjadi Sidang Kepengurusan Kategori A.",
      next: "n1"
    },
    n1: {
      type: "process",
      title: "Pelapor mengajukan SIPETRA",
      description: "Pelapor (anggota aktif HIMAGRIND-PNC) mengajukan dokumen SIPETRA dengan memenuhi syarat: data diri, data saksi (minimal 2 orang), bukti terlampir, bebas SARA dan ad hominem.",
      actor: "Pelapor",
      legalRef: "Persus SIPETRA Pasal 29 & 32",
      next: "n2"
    },
    n2: {
      type: "process",
      title: "Dokumen SIPETRA diterima & diseleksi",
      description: "Dokumen diterima dan diseleksi oleh bidang Peraturan Organisasi di bawah Divisi Kebijakan Publik untuk pemeriksaan kelengkapan awal.",
      actor: "Bidang Peraturan Organisasi (Div. Kebijakan Publik)",
      next: "n3"
    },
    n3: {
      type: "process",
      title: "Kajian dokumen SIPETRA",
      description: "Divisi Kebijakan Publik melakukan kajian substansial atas isi dokumen SIPETRA yang telah lolos seleksi awal.",
      actor: "Divisi Kebijakan Publik",
      next: "n4"
    },
    n4: {
      type: "process",
      title: "SIPETRA dinyatakan absah & terkait Sidang Kepengurusan",
      description: "Setelah dikaji, Divisi Kebijakan Publik menyatakan dokumen SIPETRA absah dan relevan untuk ditindaklanjuti sebagai Sidang Kepengurusan.",
      actor: "Divisi Kebijakan Publik",
      next: "n5"
    },
    n5: {
      type: "process",
      title: "Rapat khusus digelar",
      description: "Divisi Kebijakan Publik mengundang pihak terkait bersama Ketua HIMAGRIND-PNC dan Divisi PSDM untuk menimbang perkara sebelum sidang.",
      actor: "Rapat Khusus (Div. Kebijakan Publik + Ketua Himpunan + Div. PSDM)",
      legalRef: "Pedoman Teknis Pasal 27 ayat (5) huruf d",
      next: "d1"
    },
    d1: {
      type: "decision",
      title: "Pihak terkait terbukti melanggar P2 dan P3?",
      description: "Rapat khusus menimbang apakah pihak terkait terbukti melakukan pelanggaran kode etik kategori P2 dan P3, yang menjadi syarat perkara diteruskan ke Sidang Kepengurusan Kategori A.",
      actor: "Rapat Khusus",
      choices: [
        { label: "Tidak (bukan pelanggaran P2/P3)", next: "n6" },
        { label: "Ya, terbukti", next: "n7" }
      ]
    },
    n6: {
      type: "process",
      title: "Perkara diserahkan ke Divisi PSDM",
      description: "Karena bukan pelanggaran P2/P3, perkara tidak dilanjutkan ke Sidang Kepengurusan dan diserahkan kepada Divisi PSDM untuk ditindak sesuai sanksi P1.",
      actor: "Divisi PSDM",
      next: "end1"
    },
    end1: {
      type: "end",
      title: "SELESAI (bukan Sidang Kepengurusan)",
      description: "Alur berhenti di sini karena perkara tidak memenuhi kriteria pelanggaran berat yang diperlukan untuk Sidang Kepengurusan Kategori A."
    },
    n7: {
      type: "process",
      title: "Penetapan perkara & kategori Sidang Kepengurusan (Kategori A)",
      description: "Perkara resmi ditetapkan masuk kategori Sidang Kepengurusan Kategori A berdasarkan hasil rapat khusus.",
      actor: "Divisi Kebijakan Publik",
      next: "n8"
    },
    n8: {
      type: "process",
      title: "Sidang Kepengurusan Kategori A diselenggarakan",
      description: "Surat Tugas diterbitkan dan Majelis mulai menjalankan Sidang Kepengurusan Kategori A sesuai Hukum Acara Persidangan.",
      actor: "Majelis",
      next: "end2"
    },
    end2: {
      type: "end",
      title: "LANJUT KE TAHAP PUTUSAN",
      description: "Proses administrasi selesai. Alur berlanjut ke kategori 'Putusan' yang membahas jalannya sidang hingga Putusan Akhir dijatuhkan."
    }
  }
};
