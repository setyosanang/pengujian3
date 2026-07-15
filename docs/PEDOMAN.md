# PEDOMAN — Flowchart Game Sidang Kepengurusan Kategori A

## 1. Nama Project
Flowchart Game / Decision Tree Game — Sidang Kepengurusan Kategori A HIMAGRIND-PNC.

## 2. Tujuan Project
Media edukasi interaktif berbasis flowchart untuk mengenalkan alur SIPETRA, mekanisme
Sidang Kepengurusan Kategori A, dan jenis-jenis Putusan Majelis kepada anggota HIMAGRIND-PNC.

## 3. Prinsip Desain
- Cute, soft, sage, clean, minim warna (1 warna utama sage + 1 aksen amber + 1 aksen rose).
- Data-driven: teks node tidak ditulis langsung di HTML.
- Satu mesin render (`flowchart-core.js`) dipakai oleh 6 halaman kategori.

## 4. Struktur Folder
```
project/
├── index.html            → menu 6 kategori
├── kategori-1.html … 6   → satu flowchart per halaman
├── hasil.html             → ringkasan jalur yang dipilih pengguna
├── assets/css/main.css    → satu file gaya utama
├── assets/js/
│   ├── main.js             → render grid kategori + util
│   ├── flowchart-core.js   → mesin render generik (JANGAN diedit per kategori)
│   ├── flowchart-data.js   → metadata 6 kategori utk index.html
│   ├── hasil.js             → logika halaman ringkasan
│   └── kategori-1.js … 6.js → ISI DATA tiap kategori (window.KATEGORI_DATA)
├── data/kategori-1.json … 6.json → salinan referensi/dokumentasi data (mirror dari kategori-N.js)
└── docs/                  → dokumen ini & catatan lain
```

## 5. Aturan Penulisan File
1. HTML hanya kerangka + pemanggilan data. Tidak ada teks node hardcode di HTML.
2. CSS hanya di `assets/css/main.css`.
3. Logika interaktif hanya di `assets/js/*.js`.
4. Isi/teks node hanya di `assets/js/kategori-N.js` (runtime) — `data/kategori-N.json`
   adalah salinan referensi yang mudah dibaca manusia/di-diff, dan **harus disinkronkan**
   setiap kali `kategori-N.js` diubah (lihat `docs/struktur-data.md`).

## 6. Format Data Node
Lihat `docs/struktur-data.md` untuk skema lengkap `KATEGORI_DATA`.

## 7. Aturan CSS
- Gunakan variabel warna di `:root` (`--sage`, `--amber`, `--rose`, dst) — jangan hardcode hex baru.
- Kelas mengikuti pola `.f-node.type-*` untuk membedakan start/process/decision/end.

## 8. Aturan JavaScript
- `flowchart-core.js` bersifat generik: menerima `window.KATEGORI_DATA` + referensi elemen DOM.
- Tidak boleh menambah logika khusus-kategori ke dalam `flowchart-core.js`;
  kekhususan cukup lewat isi data.

## 9. Aturan Menambah Kategori Baru (mis. Kategori ke-7)
1. Buat `assets/js/kategori-7.js` berisi `window.KATEGORI_DATA = {...}`.
2. Tambahkan entri baru di `assets/js/flowchart-data.js` (`CATEGORY_LIST`).
3. Duplikasi salah satu `kategori-N.html`, ganti `__N__` → `7` pada `<script src>` dan `crumbs`.
4. Jalankan sinkronisasi JSON (lihat `struktur-data.md`) agar `data/kategori-7.json` tersedia.

## 10. Aturan Mengganti Teks Node
Edit langsung objek node terkait di `assets/js/kategori-N.js` (field `title`,
`description`, `actor`, `legalRef`, `choices[].label`). Tidak perlu menyentuh HTML/CSS.

## 11. Menjaga Konsistensi Warna
Selalu pakai token warna di `:root` pada `main.css`. Palet: sage (utama), amber (decision),
biru (process), rose (end/selesai), hijau pale (start).

## 12. Catatan Maintenance
- Setiap node wajib punya `id` unik dalam satu kategori.
- Node `decision` wajib punya `choices` (array `{label, next}`), bukan `next`.
- Node selain `decision`/`end` wajib punya `next`.
- Node `end` tidak boleh punya `next`/`choices`.

## 13. Catatan Pengembangan Lanjutan
- Bisa ditambah audio klik node, animasi transisi antar-halaman, atau progress tersimpan
  (in-memory saja — hindari `localStorage` bila akan dijalankan sebagai artifact/online preview).
- Bisa ditambah mode "cetak ringkasan ke PDF" di `hasil.html`.
