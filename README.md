# Tabungan Pribadi 2026–2027

Aplikasi PWA pencatatan pemasukan, pengeluaran, dan tabungan pribadi.

## Isi awal
- Data transaksi 2026 dan 2027 dimulai kosong.
- `data-2026.json` adalah berkas data awal kosong (tidak berisi transaksi lama).
- Data transaksi yang ditambahkan setelah aplikasi dibuka disimpan di penyimpanan browser/perangkat masing-masing.
- Gunakan Export JSON untuk membuat backup sebelum mengganti perangkat atau menghapus data browser.

## Fitur
- Ringkasan pemasukan, pengeluaran, tabungan bulan ini, dan total tabungan.
- Grafik 12 bulan dan ringkasan tahunan.
- Pilihan tahun 2026 dan 2027.
- Tabel ringkasan dapat digeser horizontal pada layar kecil.
- Tambah, edit, dan hapus transaksi.
- Export dan import backup JSON.
- Total tabungan dapat disesuaikan manual.

## Aturan saldo
- Pemasukan dicatat terpisah dan tidak otomatis menambah tabungan.
- Pengeluaran mengurangi total tabungan satu kali.
- Tabungan/investasi menambah total tabungan.
- Saat pertama kali membuka tahun 2027, saldo akhir 2026 menjadi saldo awal 2027.

## Deploy GitHub Pages
Unggah seluruh isi folder ini ke root repository, lalu tunggu workflow GitHub Pages selesai.
