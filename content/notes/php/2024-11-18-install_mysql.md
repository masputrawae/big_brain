---
title: Install MySQL
date: 2024-11-18T23:43:42+07:00
last_modified: 2024-11-18T23:43:42+07:00
description: Panduan langkah-langkah untuk menginstal dan mengamankan MySQL di Ubuntu.
excerpt: MySQL adalah sistem manajemen basis data (DBMS) yang bersifat open-source dan digunakan untuk menyimpan dan mengelola data dalam aplikasi web. MySQL menggunakan bahasa SQL (Structured Query Language) untuk mengakses, mengubah, dan mengelola data.
categories:
  - Server
  - Database
  - Linux
  - MySQL
tags:
  - mysql
  - ubuntu
  - instalasi
  - database
  - server
  - tutorial
thumbnail: 
pinned: false
draft: false
mathjax: false
---
MySQL adalah sistem manajemen basis data (DBMS) yang bersifat open-source dan digunakan untuk menyimpan dan mengelola data dalam aplikasi web. MySQL menggunakan bahasa SQL (Structured Query Language) untuk mengakses, mengubah, dan mengelola data. Biasanya digunakan bersama PHP dalam aplikasi web dinamis, seperti sistem manajemen konten (CMS) dan aplikasi berbasis data lainnya. MySQL dikenal karena kecepatan, reliabilitas, dan kemampuannya menangani jumlah data yang besar.
## Langkah 1: Install MySQL
Masukkan perintah berikut untuk install MySQL:
```bash
sudo apt install mysql-server
```
Ini akan menginstall MySQL server di sistem kamu. Biasanya nggak butuh waktu lama, jadi tunggu sampai selesai, ya.
## Langkah 2: Amankan Instalasi MySQL
MySQL menyediakan cara cepat untuk meningkatkan keamanan. Jalankan perintah berikut:
```bash
sudo mysql_secure_installation
```
Saat proses ini berjalan, kamu akan ditanya beberapa pertanyaan keamanan:
- **Setel Password untuk User Root MySQL**: Ini penting buat amankan akses root di MySQL. Kalau diminta buat password, setel password baru sesuai keinginan.
- **Pertanyaan Keamanan Lainnya**: Kamu akan diminta untuk menghapus user anonim, menonaktifkan login root jarak jauh, menghapus database testing, dan reload privilege tables. Kamu bisa ketik `Y` (Yes) untuk semua pertanyaan ini.
### VALIDATE PASSWORD COMPONENT
```bash
Securing the MySQL server deployment. Connecting to MySQL using a blank password. VALIDATE PASSWORD COMPONENT can be used to test passwords and improve security. It checks the strength of password and allows the users to set only those passwords which are secure enough. Would you like to setup VALIDATE PASSWORD component? Press y|Y for Yes, any other key for No:
```
Oke, di bagian ini MySQL menawarkan fitur **VALIDATE PASSWORD COMPONENT** yang akan mengecek kekuatan password setiap kali kamu buat atau ubah password untuk pengguna di MySQL. Kalau kamu pilih "Yes" (tekan `Y`), MySQL bakal minta password yang lebih kuat sesuai standar tertentu (misalnya harus ada huruf besar, angka, dan karakter khusus).

**Pilihan:**
- **Kalau kamu pilih `Y` (Yes)**, MySQL akan mengaktifkan fitur ini, dan password yang kamu buat nanti harus memenuhi kriteria keamanan tertentu.
- **Kalau kamu pilih `No`**, password tetap bisa dibuat tanpa aturan khusus ini. Tapi kalau cuma untuk latihan atau pengembangan di lokal, kamu bisa pilih `No` agar password lebih fleksibel.

Silakan pilih sesuai kebutuhanmu. Kalau cuma untuk belajar di lokal, pilihan "No" aman kok. 😊
### menghapus user anonim
```bash
Skipping password set for root as authentication with auth_socket is used by default. If you would like to use password authentication instead, this can be done with the "ALTER_USER" command. See https://dev.mysql.com/doc/refman/8.0/en/alter-user.html#alter-user-password-management for more information. By default, a MySQL installation has an anonymous user, allowing anyone to log into MySQL without having to have a user account created for them. This is intended only for testing, and to make the installation go a bit smoother. You should remove them before moving into a production environment. Remove anonymous users? (Press y|Y for Yes, any other key for No) :
```
Bagian ini menawarkan untuk **menghapus user anonim** di MySQL. User anonim memungkinkan siapa saja untuk mengakses MySQL tanpa login, yang kurang aman jika server ini nantinya digunakan di lingkungan yang lebih publik atau produksi.

Untuk pengaturan yang lebih aman (meskipun di lokal), disarankan pilih `Y` (Yes) agar akses MySQL lebih terbatas hanya untuk user terdaftar. Jadi, tekan `Y` untuk menghapus pengguna anonim ini, terutama kalau kamu berencana menggunakan database ini secara serius atau belajar dengan konfigurasi yang mirip produksi. 😊
### Untuk keamanan
```bash
Normally, root should only be allowed to connect from 'localhost'. This ensures that someone cannot guess at the root password from the network. Disallow root login remotely? (Press y|Y for Yes, any other key for No) :
```
Untuk keamanan, disarankan pilih `Y` (Yes) di sini agar **root hanya bisa login dari `localhost`**. Artinya, akun root MySQL hanya bisa diakses langsung dari komputer tempat MySQL diinstall (yaitu komputer kamu) dan nggak bisa diakses dari jaringan luar.

Ini penting untuk mencegah percobaan login dari jaringan luar, yang lebih aman untuk pemakaian di lokal dan terutama kalau suatu saat kamu konek ke jaringan yang lebih luas. Jadi, **tekan `Y` untuk memilih Yes** di bagian ini. 😊
### Menghapus Database test
```bash
Remove test database and access to it? (Press y|Y for Yes, any other key for No) :
```
Yes, pilih `Y` (Yes) di sini juga. Database *test* ini hanya digunakan untuk keperluan testing, dan secara default terbuka untuk semua pengguna. Jadi, lebih aman untuk dihapus agar nggak ada akses yang nggak sengaja ke database ini nantinya.

Tekan `Y` aja untuk melanjutkan, dan kita hampir selesai dengan setup keamanannya! 😊
### Reload privilege tables
```bash
Reload privilege tables now? (Press y|Y for Yes, any other key for No) :
```
Yes, tekan `Y` di sini untuk *reload privilege tables*. Ini akan memastikan bahwa semua perubahan yang tadi kamu buat langsung diterapkan ke MySQL. 

Dengan ini, semua setting keamanan yang kita pilih akan aktif tanpa perlu restart MySQL lagi. Setelah ini, setup keamanan MySQL selesai! 🎉😊

---
## Langkah 3: Cek Status MySQL
Setelah proses keamanan selesai, cek apakah MySQL sudah aktif dan berjalan:
```bash
sudo systemctl status mysql
```
Harusnya tampil `active (running)`, yang artinya MySQL sudah berhasil terinstall dan berjalan.
```bash
● mysql.service - MySQL Community Server
     Loaded: loaded (/usr/lib/systemd/system/mysql.service; enabled; preset: enabled)
     Active: active (running) since Mon 2024-11-18 08:35:26 WIB; 12min ago
    Process: 19808 ExecStartPre=/usr/share/mysql/mysql-systemd-start pre (code=exited, status=0/SUCCESS)
   Main PID: 19816 (mysqld)
     Status: "Server is operational"
      Tasks: 39 (limit: 18806)
     Memory: 364.8M (peak: 379.0M)
        CPU: 4.292s
     CGroup: /system.slice/mysql.service
             └─19816 /usr/sbin/mysqld
```

## Langkah 4: Masuk ke MySQL (Opsional, Buat Tes)
Coba login ke MySQL untuk pastikan semuanya berjalan lancar:
```bash
sudo mysql -u root -p
```
Masukkan password root yang sudah kamu setel tadi, lalu kamu akan masuk ke antarmuka MySQL. Kalau sudah berhasil masuk, artinya MySQL siap digunakan!

Ketik `exit;` untuk keluar dari MySQL.

---

Selesai! 🎉 Sekarang, kamu sudah punya MySQL