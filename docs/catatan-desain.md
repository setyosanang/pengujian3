# Catatan Desain (v2 — Redesign Visual)

> Versi ini adalah **redesign tampilan saja**. Workflow flowchart, sistem kategori, isi
> node, substansi sidang, urutan interaksi, fungsi tombol utama, dan struktur data/logika
> inti **tidak berubah** dari versi sebelumnya (`pengujian2`). Referensi arah desain:
> gaya landing page yang bersih, bersection tegas, dan modular (mis. situs marketing
> Quizizz) — pola komposisi & hierarki ditiru, bukan konten/warnanya mentah-mentah.

## Perubahan Utama dari v1
1. **Index dipecah jadi 2 section tegas**: "Kategori Sidang" & "Kategori Putusan", masing-masing dengan eyebrow label + judul + deskripsi section, bukan satu grid campur seperti v1.
2. **Hero lebih fokus**: satu judul besar, satu subjudul, satu CTA utama ("Mulai Belajar") + satu CTA sekunder senyap, tanpa elemen bersaing.
3. **Kartu kategori jadi `<a>` utuh** (seluruh kartu bisa diklik), dengan baris CTA kecil "Mulai Kategori ➜" di footer kartu sebagai penutup visual — bukan tombol besar penuh lebar seperti v1.
4. **Halaman kategori (game)**: header dipisah ke band `.game-header` bertone `--bg-alt`, progress bar diringkas jadi satu baris ramping (`progress-strip`), toolbar redundan dihapus.
5. **Tombol dikelompokkan menurut peran**: aksi utama alur (Lanjut/pilihan cabang) tetap solid sage mencolok; aksi sekunder (Kembali/Ulangi) jadi `btn-quiet` tanpa border/background, "Menu Utama" jadi `btn-secondary` outline tenang.
6. **Info panel** lebih lega: pemisah antar-blok pakai border solid tipis + spacing, bukan garis putus-putus rapat seperti v1.
7. **Radius, shadow, dan spacing scale** dinaikkan/dirapikan lewat token baru (`--r-xl/lg/md/sm`, `--space-1..7`) agar konsisten di semua komponen.

## Palet Warna (tetap soft sage, sedikit dikalibrasi ulang)
| Token | Hex | Pemakaian |
|---|---|---|
| `--sage` | #86A97E | CTA utama, aksen |
| `--sage-dark` | #5F7D58 | Hover, teks aksen kuat |
| `--sage-pale` | #E9F0E4 | Latar kartu/node netral, badge |
| `--amber` / `--amber-pale` | #D9A854 / #FBF2E1 | Node tipe *decision*, meta pill |
| `--blue` / `--blue-pale` | #6F9BC2 / #EAF2F8 | Node tipe *process* |
| `--rose` / `--rose-pale` | #D98B85 / #FBEBE9 | Node tipe *end* |
| `--success-pale` | #E9F3E6 | Node tipe *start* |

## Tipografi
Font `Poppins` (fallback system sans-serif) — judul tebal (800), body reguler (400–600),
label/eyebrow huruf kecil kapital dengan letter-spacing lebar untuk kesan terstruktur.

## Prinsip Layout
- Section punya padding vertikal besar (`--space-6`/`--space-7`) agar halaman terasa lega, tidak sumpek.
- Warna latar berselang-seling (`section` putih ↔ `section-alt` hijau sangat pudar) untuk menegaskan batas section, meniru pola "pembagian section tegas" pada referensi.
- Hierarki tombol: **primer** (solid sage, shadow) → **sekunder** (outline tenang) → **quiet** (teks polos tanpa border) — hanya satu CTA primer yang boleh dominan dalam satu layar.
- Elemen yang tampil bersamaan dikurangi: toolbar judul area flowchart dihapus, progress diringkas satu baris, meta info (crumbs, badge legal) dikumpulkan di band header terpisah dari kartu interaksi.

## Interaksi Node (tidak berubah dari v1)
- Node process/start → tombol "Lanjut ➜" tunggal.
- Node decision → tombol pilihan (choice-btn) sejumlah cabang, terkunci setelah dipilih.
- Node end → tautan ke `hasil.html` dengan ringkasan jalur.
- Klik node manapun di area flowchart menampilkan detail di panel kanan tanpa mengubah alur.

## Logo
Belum ada file logo resmi, navbar masih memakai lambang darurat (emoji ⚖️ dalam kotak
gradien sage bersudut membulat). Ganti `.brand-emblem` di `main.css` + tambahkan
`<img>` ke `assets/img/logo.png` bila logo resmi tersedia.

