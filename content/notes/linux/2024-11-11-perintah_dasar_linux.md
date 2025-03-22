---
title: Perintah Dasar Linux
date: 2024-11-11T23:43:42+07:00
last_modified: 2024-11-11T23:43:42+07:00
description: Perintah linux yang sering digunakan dan contoh praktis nya
excerpt: P"erintah linux yang sering digunakan dan contoh praktis nya"
categories:
  - Linux
tags:
  - linux
  - cli
  - terminal
  - cheat_sheet
  - basic_command
  - basic_linux
  - belajar_linux
  - dasar_linux
  - linux_command
  - perintah_dasar
thumbnail: 
pinned: true
draft: false
mathjax: false
---
## Navigasi File dan Direktori
- **`pwd`**: Menampilkan direktori kerja saat ini.
```bash
pwd
```
- **`ls`**: Menampilkan daftar file dan direktori.
```bash
ls             # Daftar file di direktori saat ini
ls -l          # Daftar dengan detail
ls -a          # Termasuk file tersembunyi
ls -lh         # Daftar dengan ukuran file dalam format yang mudah dibaca
```
- **`cd`**: Mengubah direktori.
```bash
cd /path/to/directory  # Pindah ke direktori tertentu
cd ..                  # Pindah ke direktori induk
cd ~                   # Pindah ke direktori home
```
## Manajemen File
- **`cp`**: Menyalin file atau direktori.
```bash
cp source.txt destination.txt                   # Menyalin file
cp -r source_directory/ destination_directory/   # Menyalin direktori secara rekursif
```
- **`mv`**: Memindahkan atau mengganti nama file atau direktori.
```bash
mv oldname.txt newname.txt                      # Mengganti nama file
mv file.txt /path/to/directory/                 # Memindahkan file
  ```
- **`rm`**: Menghapus file atau direktori.
```bash
rm file.txt                                      # Menghapus file
rm -r directory_name/                            # Menghapus direktori secara rekursif
rm -f file.txt                                   # Menghapus file tanpa konfirmasi
  ```
- **`touch`**: Membuat file baru atau memperbarui timestamp file.
```bash
touch newfile.txt                                # Membuat file baru
```
- **`mkdir`**: Membuat direktori baru.
```bash
mkdir new_directory                              # Membuat direktori baru
mkdir -p parent_directory/new_directory         # Membuat direktori secara rekursif
  ```
- **`rmdir`**: Menghapus direktori kosong.
```bash
rmdir empty_directory                            # Menghapus direktori kosong
  ```
## Melihat dan Mengedit File
- **`cat`**: Menampilkan isi file.
```bash
cat file.txt                                     # Menampilkan isi file
cat file1.txt file2.txt > combined.txt          # Menggabungkan dua file
  ```
- **`less`**: Melihat isi file dengan kemampuan scroll.
```bash
less file.txt                                    # Melihat isi file dengan scroll
```
- **`more`**: Melihat isi file halaman demi halaman.
```bash
more file.txt                                    # Melihat isi file dengan lebih sederhana
```
- **`head`**: Menampilkan beberapa baris pertama dari file.
```bash
head -n 10 file.txt                              # Menampilkan 10 baris pertama
```

- **`tail`**: Menampilkan beberapa baris terakhir dari file.
```bash
tail -n 10 file.txt                              # Menampilkan 10 baris terakhir
tail -f file.txt                                 # Mengikuti penambahan baru pada file
  ```
- **`nano`** atau **`vim`**: Mengedit file teks.
```bash
nano file.txt                                    # Mengedit file dengan nano
vim file.txt                                     # Mengedit file dengan vim
  ```
## Informasi Sistem
- **`top`**: Menampilkan proses yang berjalan secara real-time.
```bash
top                                              # Menampilkan proses
  ```
- **`htop`**: Versi interaktif dari `top` (perlu diinstal).
```bash
htop                                             # Menampilkan proses secara interaktif
  ```
- **`ps`**: Menampilkan daftar proses yang berjalan.
```bash
ps                                               # Menampilkan proses yang dimiliki pengguna
ps aux                                           # Menampilkan semua proses
```

- **`df`**: Menampilkan informasi tentang penggunaan disk.
```bash
df -h                                            # Menampilkan informasi penggunaan disk dalam format yang mudah dibaca
  ```
- **`du`**: Menampilkan penggunaan disk oleh file dan direktori.
```bash
du -sh *                                        # Menampilkan ukuran direktori saat ini
```
- **`free`**: Menampilkan informasi penggunaan memori.
```bash
free -h                                          # Menampilkan informasi memori dalam format yang mudah dibaca
```
- **`uname -a`**: Menampilkan informasi sistem.
```bash
uname -a                                        # Menampilkan informasi kernel dan sistem
  ```
- **`hostname`**: Menampilkan atau mengatur nama host.
```bash
hostname                                        # Menampilkan nama host saat ini
```
## Manajemen Pengguna
- **`adduser`**: Menambahkan pengguna baru.
```bash
sudo adduser newusername                        # Menambahkan pengguna baru
  ```
- **`passwd`**: Mengubah password pengguna.
```bash
passwd newusername                              # Mengubah password untuk pengguna tertentu
```
- **`whoami`**: Menampilkan nama pengguna saat ini.
```bash
whoami                                          # Menampilkan nama pengguna
```
- **`groups`**: Menampilkan grup pengguna saat ini.
```bash
groups                                           # Menampilkan grup yang dimiliki oleh pengguna
  ```
## Jaringan
- **`ping`**: Mengirim paket ke alamat IP untuk menguji konektivitas.
```bash
ping google.com                                  # Mengirim ping ke Google
```
- **`ifconfig`**: Menampilkan konfigurasi jaringan (pada beberapa distribusi mungkin menggunakan `ip a`).
```bash
ifconfig                                         # Menampilkan konfigurasi jaringan
```
- **`ip`**: Menampilkan dan mengelola informasi jaringan.
```bash
ip a                                            # Menampilkan semua antarmuka jaringan
ip link                                         # Menampilkan status antarmuka jaringan
  ```
- **`netstat`**: Menampilkan statistik jaringan (sering perlu diinstal).
```bash
netstat -tuln                                   # Menampilkan port yang terbuka dan layanan yang mendengarkan
```
- **`traceroute`**: Menampilkan rute yang dilalui paket ke alamat IP.
```bash
traceroute google.com                           # Menampilkan rute ke Google
```
## Pencarian
- **`find`**: Mencari file dalam direktori.
```bash
find /path/to/search -name "filename.txt"     # Mencari file dengan nama tertentu
```
- **`grep`**: Mencari pola dalam file.
```bash
grep "search_term" file.txt                    # Mencari 'search_term' dalam file.txt
grep -r "search_term" /path/to/directory       # Mencari secara rekursif dalam direktori
```
- **`locate`**: Mencari file dengan cepat menggunakan database.
```bash
locate filename.txt                             # Mencari file berdasarkan nama
```
## Manajemen Paket (Debian/Ubuntu)
- **`apt update`**: Memperbarui daftar paket.
```bash
sudo apt update                                 # Memperbarui daftar paket
```
- **`apt upgrade`**: Mengupgrade paket yang terinstal.
```bash
sudo apt upgrade                                # Mengupgrade paket yang terinstal
  ```
- **`apt install`**: Menginstal paket baru.
```bash
sudo apt install package_name                   # Menginstal paket
  ```
- **`apt remove`**: Menghapus paket.
```bash
sudo apt remove package_name                    # Menghapus paket
```
- **`apt search`**: Mencari paket.
```bash
apt search package_name                         # Mencari paket yang sesuai dengan nama
  ```
- **`apt show`**: Menampilkan informasi tentang paket.
```bash
apt show package_name                           # Menampilkan informasi tentang paket
```
## Kompresi dan Ekstraksi
- **`tar`**: Mengompres dan mengekstrak file.
```bash
tar -cvf archive.tar /path/to/directory        # Mengompres direktori menjadi file .tar
tar -xvf archive.tar                            # Mengekstrak file .tar
tar -czvf archive.tar.gz /path/to/directory    # Mengompres dengan gzip
tar -xzvf archive.tar.gz                        # Mengekstrak file .tar.gz
```
- **`zip`**: Mengompres file.
```bash
zip archive.zip file1 file2                     # Mengompres file menjadi file zip
```
- **`unzip`**: Mengekstrak file zip.
```bash
unzip archive.zip                               # Mengekstrak file zip
```
## Skrip dan Otomatisasi
- **`bash`**: Menjalankan skrip bash.
```bash
bash script.sh                                  # Menjalankan skrip bash
```
- **`chmod`**: Mengubah hak akses file.
```bash
chmod +x script.sh                              # Memberikan izin eksekusi pada skrip
```
- **`crontab`**: Mengatur tugas terjadwal.
```bash
crontab -e                                      # Mengedit crontab untuk menambahkan tugas terjadwal
```