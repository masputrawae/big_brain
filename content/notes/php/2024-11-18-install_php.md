---
title: Install PHP
date: 2024-11-18T23:43:42+07:00
last_modified: 2024-11-18T23:43:42+07:00
description: Panduan langkah-langkah untuk menginstal dan mengonfigurasi PHP di Ubuntu untuk aplikasi web dinamis.
excerpt: PHP (Hypertext Preprocessor) adalah bahasa pemrograman server-side yang digunakan untuk membuat aplikasi web dinamis. PHP memungkinkan pengembang untuk menghasilkan konten web yang interaktif, seperti form, login, dan pengelolaan data dari database (misalnya MySQL).
categories:
  - Web Development
  - Linux
  - PHP
tags:
  - php
  - ubuntu
  - apache
  - instalasi
  - web_server
  - tutorial
thumbnail: 
pinned: false
draft: false
mathjax: false
---

PHP (Hypertext Preprocessor) adalah bahasa pemrograman server-side yang digunakan untuk membuat aplikasi web dinamis. PHP memungkinkan pengembang untuk menghasilkan konten web yang interaktif, seperti form, login, dan pengelolaan data dari database (misalnya MySQL). PHP bekerja di sisi server, artinya kode PHP diproses di server sebelum hasilnya dikirimkan ke browser pengguna. PHP sering digunakan bersama HTML dan MySQL untuk membangun aplikasi web yang dinamis dan interaktif.
## Langkah 1: Install PHP
Ketikkan perintah ini di terminal untuk install PHP:
```bash
sudo apt install libapache2-mod-php php-mysql php-common
```
Ini akan menginstall PHP sekaligus modulnya untuk Apache biar mereka bisa saling terhubung.

## Langkah 2: Cek Versi PHP
Pastikan PHP berhasil terinstall dengan cek versinya:
```bash
php -v
```
Kalau PHP sudah terinstall dengan benar, kamu akan melihat versi PHP yang aktif (misalnya, PHP 7.x atau PHP 8.x).

## Langkah 3: Konfigurasi Apache untuk Utamakan PHP
Apache biasanya menampilkan file `index.html` lebih dulu dari file PHP. Untuk memastikan file PHP yang diutamakan, kita bisa edit sedikit file konfigurasi:
```bash
sudo nano /etc/apache2/mods-enabled/dir.conf
```

Cari baris seperti ini:
```
DirectoryIndex index.html index.php
```
Lalu, ubah agar `index.php` berada di depan `index.html`:
```
DirectoryIndex index.php index.html
```

Simpan perubahan (di Nano, tekan `CTRL + O` lalu `Enter` untuk simpan, dan `CTRL + X` untuk keluar).

## Langkah 4: Restart Apache
Supaya perubahan konfigurasi diterapkan, restart Apache:
```bash
sudo systemctl restart apache2
```

## Langkah 5: Tes PHP
Buat file PHP pertama kamu untuk cek apakah instalasi berhasil:
1. Buat file baru bernama `info.php` di folder root server (`/var/www/html/`):
   ```bash
   sudo nano /var/www/html/info.php
   ```
2. Tambahkan kode PHP berikut:
   ```php
   <?php
   phpinfo();
   ?>
   ```
3. Simpan file, lalu akses di browser dengan mengetik:
   ```
   http://localhost/info.php
   ```
Kalau halaman `phpinfo()` muncul dengan informasi tentang PHP, berarti instalasi kamu berhasil! 🎉 
Gimana, lancar?

Nah, file `info.php` ini sebenarnya hanya buat cek instalasi PHP aja, jadi setelah semuanya beres, sebaiknya dihapus supaya nggak ada informasi sistem yang bisa diakses orang lain secara nggak sengaja. 

Untuk hapus file `info.php`, tinggal pakai perintah ini di terminal:
```bash
sudo rm /var/www/html/info.php
```