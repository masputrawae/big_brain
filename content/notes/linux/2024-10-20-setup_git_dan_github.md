---
title: "Setup Git dan Github Lengkap"
date: 2024-10-20T23:43:42+07:00
last_modified: 2024-10-20T23:43:42+07:00
description: Setup Git dan Github lengkap
excerpt: 
categories:
  - Software Development
  - Git
  - Linux
  - Github
tags:
  - git
  - github
  - version_control
  - projects
  - push
  - pull
  - programming
  - development
  - linux
  - linux_command
  - terminal
thumbnail: 
pinned: true
draft: false
mathjax: false
---
Pada Tanggal: Minggu, 20 Oktober 2024 pukul 13.15, saat hujan dan entah kenapa kepikiran untuk menulis ini, ya walaupun tidak niat tetapi aku tetap berusaha untuk menuliskan catatan berharga ini. 

## Persiapan
- Doa sebelum memulai
- Desktop (Aku pakai Ubuntu)
- Terminal (bukan terminal bus ya!!)
- Tekat yang kuat dan iman yang tebal

## Langkah demi langkah

### Instalasi Git dan Configuration 

- Buka Terminal
```bash
sudo apt update
sudo apt install git
```
- Memastikan Instalasi
```bash
git --version
```
- Setting Setelah Install Git
	Setelah Git terinstall, set identitas Git (nama dan email) biar kalau commit, identitas terdaftar:
```bash
git config --global user.name "Nama Kamu"
git config --global user.email "email@kamu.com"
```
- Membuat Repositori Lokal
	Berhubungan saya sedang belajar python, saya membuat dengan nama "program-python-sederhana" Dan kedepannya akan saya gunakan untuk menyimpan hasil praktik python saya.
```bash
mkdir program-python-sederhana
cd program-python-sederhana
touch README.md
git init
```
> Perintah `git init` akan mengubah folder tersebut menjadi repository Git. Semua perubahan yang kamu buat pada file di dalam folder itu akan dilacak oleh Git.
- Menulis isi file README.md
```bash
nano README.md
```
> Simpan dengan menekan CTRL+ALT+O, lalu ENTER, kemudian CTRL+X
- Periksa status file kamu:
```bash
git status
```
>   File baru akan muncul sebagai "untracked" (belum dilacak).
- **Stage file** berarti menyiapkan file untuk di-commit
```bash
git add README.md
```
- **Commit file** yang sudah di-stage:
```bash
git commit -m "Commit pertama: Tambah README.md"
```

#### Setting SSH untuk GitHub

- Cek SSH Key
```bash
ls -al ~/.ssh
```
- Generate SSH Key
```bash
ssh-keygen -t rsa -b 4096 -C "email@kamu.com"
```
  - Gantilah `email@kamu.com` dengan email GitHub kamu.
  - Tekan **Enter** untuk menggunakan lokasi penyimpanan default.
  - Tambahkan passphrase jika ingin, atau tekan **Enter** jika tidak.

#### **Tambah SSH Key ke SSH Agent**

- Mulai SSH agent:
```bash
eval "$(ssh-agent -s)"
```
- Tambahkan SSH key ke agent:
```bash
ssh-add ~/.ssh/id_rsa
```
- Tambahkan SSH Key ke GitHub
- Salin SSH public key:
   ```bash
   cat ~/.ssh/id_rsa.pub
   ```
- Salin seluruh isi dari output perintah.
- Login ke GitHub, buka **Settings**:
	- Di sidebar kiri, pilih **SSH and GPG keys**.
	- Klik tombol **New SSH key**.
	- Beri nama key dan **paste** public key yang sudah kamu salin.
	- Klik **Add SSH key**.

#### Buat Repository di GitHub

- Login ke akun GitHub kamu.
- Klik tombol **New** untuk membuat repository baru.
- Beri nama repository dan klik **Create repository**
	GitHub akan kasih instruksi buat koneksi repository lokal kamu dengan GitHub.
```bash
git remote add origin git@github.com:username/nama-repo.git
git branch -M main
git push -u origin main
```
> Untuk nama branch tidak selalu "main" bisa juga "master" atau bisa kamu beri nama sesuai selera, tapi untuk mempermudah gunakan "main" atau "master" 
- Masukkan perintah tadi ke terminal, setelah selesai Periksa remote:
```bash
git remote -v
```
- Uji koneksi SSH ke GitHub:
```bash
ssh -T git@github.com
```
- Jika berhasil, kamu akan melihat pesan:
```
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```

#### **Push ke Repository**

Sekarang kamu bisa melakukan push ke repository GitHub:
```bash
git push -u origin main
```
## Hasil 
Dari hal yang sudah saya lakukan di atas, semuanya berhasil, kecuali ketikan menggunakan:
```bash
git remote add origin http
```
Ini tidak bisa, jadi pastikan mengambil yang ssh
```bash
git remote add origin git@github:
```