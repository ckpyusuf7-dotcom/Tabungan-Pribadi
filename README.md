# Tabungan Pribadi — Salinan Kosong 2026–2027

Ini adalah salinan mandiri untuk pengguna baru.

- Database awal benar-benar kosong: tidak ada transaksi pemasukan, pengeluaran, atau tabungan.
- Saldo awal 2026 = Rp0.
- Pilihan tahun hanya 2026 dan 2027.
- Saldo akhir 2026 otomatis menjadi saldo awal 2027 berdasarkan tabungan dikurangi pengeluaran.
- Penyimpanan browser menggunakan key khusus `tabunganPribadiPacar2026_2027`, terpisah dari aplikasi utama `KeuanganSaya`.
- Fitur tambah, edit, hapus, export, dan import backup tetap tersedia.

## PENTING: Deploy terpisah
Agar aplikasi pasangan tidak bercampur dengan aplikasi utama, buat repository GitHub baru (misalnya `Tabungan-Pribadi`) dan deploy ZIP ini di repository tersebut. Jangan upload ke repository `KeuanganSaya` milik aplikasi utama.

Setelah GitHub Pages aktif, pasangan membuka URL Pages baru itu dari perangkatnya sendiri. Data disimpan di browser/perangkat masing-masing dan tidak otomatis tersinkron antarperangkat.
