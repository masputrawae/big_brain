---
title: Install Apache
date: 2024-11-18T23:43:42+07:00
last_modified: 2024-11-18T23:43:42+07:00
description: Panduan langkah demi langkah untuk menginstall Apache di Ubuntu, mulai dari update sistem hingga cek status server.
excerpt: Panduan lengkap cara install Apache di Ubuntu untuk server lokal.
categories:
  - Linux
  - Server
  - Apache
tags:
  - ubuntu
  - server
  - apache
  - install_apache
  - web_server
  - instalasi
  - tutorial
thumbnail: 
pinned: false
draft: false
mathjax: false
---
Apache adalah server web yang paling populer dan digunakan untuk menyajikan konten website di internet. Secara teknis, Apache bekerja dengan menerima permintaan (request) dari pengguna melalui protokol HTTP, lalu mengirimkan halaman web atau file terkait sebagai respons. Apache mendukung berbagai modul, seperti untuk PHP, sehingga kamu bisa menjalankan aplikasi web dinamis di server ini. Apache juga terkenal karena fleksibilitas, keamanannya, dan kemampuannya untuk mengelola banyak situs dalam satu server.
## Langkah 1: Update Package Manager
Kita mulai dengan memastikan semua paket di sistemmu up-to-date:
```bash
sudo apt update && sudo apt upgrade
```
## Langkah 2: Install Apache
Install Apache dengan perintah berikut:
```bash
sudo apt install apache2
```
Setelah selesai, Apache seharusnya langsung berjalan otomatis.
## Langkah 3: Cek Status Apache
Kamu bisa cek apakah Apache sudah aktif dengan perintah ini:
```bash
sudo systemctl status apache2
```
Kalau sudah jalan, kamu akan lihat statusnya “active (running)”. harusnya seperti di bawah ini:
```bash
└─$ sudo systemctl status apache2
● apache2.service - The Apache HTTP Server
     Loaded: loaded (/usr/lib/systemd/system/apache2.service; enabled; preset: >
     Active: active (running) since Mon 2024-11-18 08:02:39 WIB; 9min ago
       Docs: https://httpd.apache.org/docs/2.4/
   Main PID: 8648 (apache2)
      Tasks: 55 (limit: 18806)
     Memory: 5.9M (peak: 6.8M)
        CPU: 50ms
     CGroup: /system.slice/apache2.service
             ├─8648 /usr/sbin/apache2 -k start
             ├─8650 /usr/sbin/apache2 -k start
             └─8651 /usr/sbin/apache2 -k start
```

## Langkah 4: Coba Akses di Browser
Sekarang, buka browser dan ketik:
```
http://localhost/
```
Kalau instalasi berhasil, kamu akan melihat halaman “Apache2 Ubuntu Default Page”. Artinya, Apache sudah berjalan dengan baik!

## Langkah 5: Konfigurasi Firewall (Opsional)
Kalau kamu pakai firewall, kamu bisa buka akses untuk Apache dengan perintah:
```bash
sudo ufw allow 'Apache'
```
## Langkah 6: Atur Hak akses
Jangan lupa juga untuk mengatur hak akses direktori server-nya, agar user biasa bebas membuat file dan direktori di sana.
```bash
sudo chmod 777 /var/www/html -R
```
### Selesai!
Apache sudah berhasil terinstall dan berjalan di sistemmu. Gimana, sampai sini lancar? 😊