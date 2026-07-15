# Struktur Data Node — `KATEGORI_DATA`

Setiap file `assets/js/kategori-N.js` mendefinisikan satu variabel global:

```js
window.KATEGORI_DATA = {
  id: "kategori-1",          // harus sama dengan nama file (tanpa .js)
  title: "...",               // judul ditampilkan di header halaman & hasil.html
  subtitle: "...",            // deskripsi singkat di bawah judul
  legalRef: "...",            // referensi pasal utama kategori ini
  startId: "start",           // id node pertama yang dirender
  nodes: {
    "<id-node>": {
      type: "start" | "process" | "decision" | "end",
      title: "...",
      description: "...",
      actor: "...",            // opsional — siapa pelaksana langkah ini
      legalRef: "...",         // opsional — pasal spesifik langkah ini
      next: "<id-node-lain>",  // wajib untuk start/process, TIDAK untuk decision/end
      choices: [                // wajib HANYA untuk type "decision"
        { label: "Ya", next: "<id-node>" },
        { label: "Tidak", next: "<id-node>" }
      ]
    }
  }
}
```

## Validasi Manual Sebelum Commit
1. `startId` harus ada di `nodes`.
2. Semua target `next` / `choices[].next` harus mengarah ke id yang ada di `nodes`.
3. Tidak boleh ada node `end` yang punya `next`.
4. Tepat satu node `type: "start"` per kategori (node pertama).

## Sinkronisasi ke `data/kategori-N.json`
File JSON di folder `data/` adalah salinan human-readable dari isi `KATEGORI_DATA`
(tanpa wrapper `window.KATEGORI_DATA = ...`). Untuk menyinkronkan ulang setelah mengedit
`kategori-N.js`, jalankan (butuh Node.js terpasang):

```bash
node -e "
global.window = {};
require('./assets/js/kategori-1.js');
require('fs').writeFileSync('./data/kategori-1.json', JSON.stringify(window.KATEGORI_DATA, null, 2) + '\n');
"
```//ganti angka 1 sesuai kategori yang diedit.
