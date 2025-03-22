---
title: "Rclone Full Guide"
date: 2024-10-21T23:43:42+07:00
last_modified: 2024-10-21T23:43:42+07:00
description: "Menerangkan tentang bagaimana penggunaan Rclone, dengan Gdrive full"
excerpt: "rclone adalah sebuah alat baris perintah (command-line tool) yang digunakan untuk mengelola dan mentransfer data ke dan dari berbagai layanan penyimpanan cloud. Rclone mendukung berbagai penyedia cloud, termasuk Google Drive, Dropbox, Amazon S3, OneDrive, dan banyak lagi."
categories:
  - File Synchronization
  - Rclone
tags:
  - rclone
  - install_rclone
  - rclone_cpnfig
  - sync
  - cloud_storage
thumbnail: 
pinned: false
draft: false
mathjax: false
---
## Apa Itu Rclone
rclone adalah sebuah alat baris perintah (command-line tool) yang digunakan untuk mengelola dan mentransfer data ke dan dari berbagai layanan penyimpanan cloud. Rclone mendukung berbagai penyedia cloud, termasuk Google Drive, Dropbox, Amazon S3, OneDrive, dan banyak lagi.
### Fitur Utama Rclone
1. **Sinkronisasi dan Cadangan**: Rclone memungkinkan pengguna untuk menyinkronkan data antara sistem file lokal dan layanan cloud atau antar layanan cloud.
2. **Migrasi Data**: Pengguna dapat memindahkan data dari satu penyedia penyimpanan ke penyedia lain tanpa harus mengunduhnya terlebih dahulu ke sistem lokal.
3. **Enkripsi**: Rclone menyediakan opsi untuk mengenkripsi data sebelum diunggah ke cloud untuk meningkatkan keamanan.
4. **Dukungan Multithreading**: Rclone dapat melakukan transfer data secara paralel, yang mempercepat proses pemindahan file.
5. **Penyaringan File**: Pengguna dapat memilih file atau folder tertentu untuk disinkronkan atau dipindahkan berdasarkan berbagai kriteria.
### Kegunaan Rclone:
- **Backup Data**: Membuat cadangan data secara otomatis ke penyimpanan cloud.
- **Migrasi**: Memindahkan data antara layanan cloud.
- **Manajemen File**: Mengelola file di berbagai penyimpanan cloud dari satu tempat.

Rclone merupakan alat yang sangat berguna bagi pengguna yang sering bekerja dengan penyimpanan cloud dan memerlukan fleksibilitas dalam manajemen data.

## Installation Rclone 
Ada beberapa cara umum yang digunakan untuk menginstal rclone di linux. Berikut adalah cara yang umum dan sering digunakan untuk install rclone di linux
### Menggunakan apt (Debian/Ubuntu)
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install rclone
```
### Menggunakan Script Instalasi Resmi
1. **Buka Terminal**.
2. **Jalankan Perintah Berikut**:
```bash
curl https://rclone.org/install.sh | sudo bash
```
- Perintah ini akan mengunduh dan menjalankan script instalasi Rclone.

3. **Verifikasi Instalasi**:
   Setelah instalasi selesai, Anda bisa memeriksa apakah Rclone terinstal dengan benar dengan menjalankan:
```bash
rclone version
```

### Mengunduh Biner secara Manual
1. **Buka Terminal**.
2. **Unduh Rclone**:
	- Anda dapat mencari versi terbaru dari Rclone di [halaman rclone.org](https://rclone.org/downloads/). Untuk contoh, kita akan menggunakan versi `v1.64.0`:
```bash
curl -O https://downloads.rclone.org/v1.64.0/rclone-v1.64.0-linux-amd64.zip
```

3. **Ekstrak File ZIP**:
```bash
unzip rclone-v1.64.0-linux-amd64.zip
```

4. **Pindah ke Direktori yang Sesuai**:
```bash
cd rclone-v1.64.0-linux-amd64
```

5. **Salin Biner Rclone ke Direktori `/usr/bin/`**:
```bash
sudo cp rclone /usr/bin/
```

6. **Beri Izin Eksekusi**:
```bash
sudo chmod 755 /usr/bin/rclone
```

7. **Verifikasi Instalasi**:
```bash
rclone version
```

### Menggunakan Package Manager (Debian/Ubuntu)
1. **Buka Terminal**.
2. **Tambahkan Repository** (Hanya untuk Debian/Ubuntu):
```bash
echo "deb https://rclone.org/ubuntu/ $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/rclone.list
```

3. **Impor Kunci GPG**:
```bash
curl https://rclone.org/rclone.asc | sudo gpg --dearmor -o /usr/share/keyrings/rclone-archive-keyring.gpg
```

4. **Perbarui Daftar Paket**:
```bash
sudo apt update
```

5. **Instal Rclone**:
```bash
sudo apt install rclone
```

6. **Verifikasi Instalasi**:
```bash
rclone version
```
___
## Perintah Yang Sering Digunakan
Berikut adalah daftar perintah Rclone yang paling sering digunakan beserta deskripsi singkatnya. Ini akan membantu Anda dengan cepat memahami fungsi dasar Rclone dalam mengelola file dan folder.
### Perintah Rclone yang Sering Digunakan

1. **Menyalin File dari Local ke Remote**
```bash
rclone copy /path/to/local/file.txt myremote:/path/to/remote/
   ```
**Deskripsi**:
Menyalin file dari sistem lokal ke remote storage.

2. **Menyalin Seluruh Direktori dari Local ke Remote**
```bash
rclone copy /path/to/local/dir myremote:/path/to/remote/dir
```
**Deskripsi**:
Menyalin semua file dalam direktori dari lokal ke remote storage.

3. **Menyinkronkan Dua Direktori**
```bash
rclone sync /path/to/local/dir myremote:/path/to/remote/dir
```
**Deskripsi**: 
Menyinkronkan file antara dua lokasi. Menghapus file di tujuan yang tidak ada di sumber.

4. **Memindahkan File dari Local ke Remote**
```bash
rclone move /path/to/local/file.txt myremote:/path/to/remote/
```
**Deskripsi**: 
Memindahkan file dari lokal ke remote dan menghapusnya dari sumber.

5. **Menghapus File di Remote**
```bash
rclone delete myremote:/path/to/remote/file.txt
```
**Deskripsi**:
Menghapus file tertentu di remote storage.

6. **Menampilkan Daftar File di Remote**
```bash
rclone ls myremote:/path/to/remote/
```
**Deskripsi**:
Menampilkan daftar file yang ada di remote storage.

7. **Menghitung Ukuran Total File di Remote**
```bash
rclone size myremote:/path/to/remote/
```
**Deskripsi**:
Menampilkan ukuran total dari semua file di dalam remote.

8. **Memeriksa Integritas Data**
```bash
rclone check /path/to/local myremote:/path/to/remote/
```
**Deskripsi**:
Memeriksa apakah file di sumber dan tujuan sama.

9. **Mengaitkan Remote sebagai Filesystem**
```bash
rclone mount myremote:/path/to/remote /path/to/mountpoint &
```
   **Deskripsi**:
   Mengaitkan remote storage ke sistem file lokal sehingga Anda bisa mengaksesnya seperti folder biasa.

10. **Menampilkan Progres saat Transfer**
```bash
rclone copy /path/to/local myremote:/path/to/remote --progress
```
**Deskripsi**:
Menampilkan status transfer file secara real-time.
### Catatan Tambahan
- **Gunakan `--dry-run`**: Untuk melakukan simulasi tanpa mengubah apa pun:
```bash
rclone copy /path/to/local myremote:/path/to/remote --dry-run
```
### **Yang sering saya gunakan**
 - Sync Dari Remote ke Lokal
```bash
rclone sync remote: ~/ --create-empty-src-dirs
```
 - Sync Dari Lokal ke Remote
```bash
rclone sync ~/ remote: --create-empty-src-dirs
```
Penjelasan: 
```bash
--create-empty-src-dirs
# (berfungsi untuk mensinkronisasikan folder kosong)
```
---

Dengan perintah-perintah ini, Anda dapat melakukan banyak tugas dasar menggunakan Rclone dengan efisien.