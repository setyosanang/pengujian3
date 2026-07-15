/* KATEGORI 5 — Putusan: Decision Flowchart
   Sumber: flow-kategoriA/putusan/putusan-decision.png
   Silang-acu: Tartib Persidangan Kategori A Pasal 12 ayat (4)-(5), Pasal 15-16 */
window.KATEGORI_DATA = {
  id: "kategori-5",
  title: "Kemungkinan Putusan Sidang Kepengurusan Kategori A",
  subtitle: "Decision Flowchart — seluruh percabangan yang mungkin terjadi, dari SIPETRA ditolak sampai pemberhentian tidak dengan hormat.",
  legalRef: "Tartib Persidangan Pasal 15 & 16",
  startId: "start",
  nodes: {
    start: {
      type: "start",
      title: "Tahap Pemeriksaan SIPETRA oleh Majelis",
      description: "Titik awal pemeriksaan formal SIPETRA oleh Majelis sebelum menentukan arah Putusan.",
      next: "d1"
    },
    d1: {
      type: "decision",
      title: "Dokumen SIPETRA lengkap, sah, dan tidak rusak parah?",
      description: "Majelis memeriksa keabsahan formal dokumen SIPETRA sebelum melanjutkan pemeriksaan substantif.",
      legalRef: "Tartib Persidangan Pasal 12 ayat (4)",
      choices: [
        { label: "Tidak", next: "d2" },
        { label: "Ya", next: "d3" }
      ]
    },
    d2: {
      type: "decision",
      title: "Dapat diperbaiki melalui pending/skorsing?",
      description: "Jika dokumen tidak lengkap, Majelis menimbang apakah kekurangan tersebut masih dapat diperbaiki dalam jangka waktu tertentu.",
      legalRef: "Tartib Persidangan Pasal 12 ayat (5)",
      choices: [
        { label: "Tidak", next: "end1" },
        { label: "Ya", next: "p1" }
      ]
    },
    end1: {
      type: "end",
      title: "PUTUSAN AKHIR: SIPETRA DITOLAK",
      description: "Sidang Kategori A dibatalkan. Jika SIPETRA hendak diajukan kembali, prosedur harus dimulai ulang dari awal.",
      legalRef: "Tartib Persidangan Pasal 16 ayat (4)"
    },
    p1: {
      type: "process",
      title: "Pending/Skorsing untuk jangka waktu perbaikan",
      description: "Majelis memberi waktu perbaikan dokumen melalui mekanisme pending atau skorsing, ditandai dan diakhiri dua ketukan palu.",
      legalRef: "Tartib Persidangan Pasal 1 (definisi Pending & Skorsing)",
      next: "d1"
    },
    d3: {
      type: "decision",
      title: "PUTUSAN SELA: ditemukan dugaan pelanggaran kode etik P2/P3?",
      description: "Setelah dokumen dinyatakan sah, Majelis menjatuhkan Putusan Sela berdasarkan ada-tidaknya dugaan pelanggaran kode etik berat.",
      legalRef: "Tartib Persidangan Pasal 15",
      choices: [
        { label: "Tidak", next: "end2" },
        { label: "Ya", next: "p2" }
      ]
    },
    end2: {
      type: "end",
      title: "PUTUSAN AKHIR: SIPETRA DISERAHKAN KE PSDM",
      description: "Perkara dinyatakan bukan pelanggaran P2/P3 sehingga dikembalikan kepada Divisi PSDM agar ditindak sesuai sanksi P1.",
      legalRef: "Tartib Persidangan Pasal 16 ayat (3)"
    },
    p2: {
      type: "process",
      title: "SIPETRA Dikabulkan → status berubah jadi Terlapor",
      description: "Status Pihak Utama berubah menjadi Terlapor dan Persidangan memasuki Tahap Pemeriksaan Etik: pembuktian, tanggapan Terlapor, dan pemeriksaan saksi.",
      legalRef: "Tartib Persidangan Pasal 15 ayat (3)",
      next: "d4"
    },
    d4: {
      type: "decision",
      title: "Musyawarah akhir Majelis: terbukti melakukan pelanggaran kode etik?",
      description: "Setelah seluruh pembuktian dan pemeriksaan saksi, Majelis bermusyawarah untuk menyimpulkan terbukti atau tidaknya pelanggaran.",
      choices: [
        { label: "Tidak terbukti", next: "end3" },
        { label: "Terbukti", next: "d5" }
      ]
    },
    end3: {
      type: "end",
      title: "PUTUSAN AKHIR: TIDAK TERBUKTI melakukan pelanggaran kode etik",
      description: "Amar Putusan Akhir memuat penetapan tidak terbukti sehingga Terlapor dipulihkan kedudukannya.",
      legalRef: "Tartib Persidangan Pasal 16 ayat (8)"
    },
    d5: {
      type: "decision",
      title: "Tingkat pelanggaran yang terbukti?",
      description: "Majelis menentukan tingkat keparahan pelanggaran kode etik yang terbukti sebagai dasar penjatuhan sanksi.",
      legalRef: "Catatan Ps.16 ayat (8): amar Putusan memuat dasar penjatuhan sanksi sesuai Kode Etik",
      choices: [
        { label: "Pelanggaran P2", next: "end4" },
        { label: "Pelanggaran P3 (berat)", next: "end5" }
      ]
    },
    end4: {
      type: "end",
      title: "PUTUSAN AKHIR: PENJATUHAN SANKSI P2",
      description: "Terlapor dikenai sanksi organisasi sesuai Kode Etik untuk tingkat pelanggaran P2.",
      legalRef: "Tartib Persidangan Pasal 16 ayat (2)"
    },
    end5: {
      type: "end",
      title: "PUTUSAN AKHIR: PEMBERHENTIAN TIDAK DENGAN HORMAT (P3)",
      description: "Untuk pelanggaran P3 yang bersifat berat, Ketua Himpunan turut menyelenggarakan prosesi simbolis pencopotan atribut organisasi setelah Putusan berkekuatan hukum tetap.",
      legalRef: "Tartib Persidangan Pasal 16 ayat (2) & Pasal 20 ayat (4)"
    }
  }
};
