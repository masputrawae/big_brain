---
title: Shortcut Vim
date: 2025-02-17T14:53:00+07:00
last_modified: 2025-02-17T14:53:00+07:00
description: Shortcut Vim yang harus diketahui
excerpt: Beberapa shortcut dasar yang sering digunakan di Vim
categories:
  - Vim
  - Text Editor
  - Linux
tags:
  - vim
  - linux
  - text_editor
  - shortcut
  - programmer
thumbnail: 
pinned: true
draft: false
mathjax: false
---
## Mode dasar di vim
- Normal Mode -> Untuk navigasi dan perintah (default saat membuka Vim)
- Insert Mode → Untuk mengetik teks (masuk dengan i, a, dll.).
- Visual Mode → Untuk memilih teks (v atau V).
- Command Mode → Untuk menjalankan perintah (:).

## Navigasi Dasar

| No. | Key      | Description                    |
| --- | -------- | ------------------------------ |
| 1.  | h        | Gerak ke kiri.                 |
| 2.  | l        | Gerak Ke janan.                |
| 3.  | j        | Gerak ke bawah.                |
| 4.  | k        | Gerak ke atas.                 |
| 5.  | 0        | ke Awal baris.                 |
| 6.  | ^        | ke Awal teks baris.            |
| 7.  | $        | ke Akhir baris.                |
| 8.  | gg       | ke Awal file.                  |
| 9.  | G        | ke Akhir file.                 |
| 10. | ctrl + d | Scroll turun setengah halaman. |
| 11. | ctrl + u | Scroll naik setengah halaman.  |
## Masuk ke Insert Mode

| No. | Key | Description                                  |
| --- | --- | -------------------------------------------- |
| 1.  | i   | Masuk insert sebelum kursor.                 |
| 2.  | I   | Masuk insert di awal baris.                  |
| 3.  | a   | Masuk insert setelah kursor.                 |
| 4.  | A   | Masuk insert di akhir baris.                 |
| 5.  | o   | Tambah baris baru di bawah dan masuk insert. |
| 6.  | O   | Tambah baris baru di atas dan masuk insert.  |
## Editing Dasar

| No. | Key           | Description                          |
| --- | ------------- | ------------------------------------ |
| 1.  | x             | Hapus karakter di bawah kursor.      |
| 2.  | dd            | Hapus (cut) satu baris.              |
| 3.  | yy            | Copy satu baris.                     |
| 4.  | p             | Paste setelah kursor.                |
| 5.  | P             | Paste sebelum kursor.                |
| 6.  | u             | Undo perubahan terakhir.             |
| 7.  | ctrl + r      | Redo perubahan.                      |
| 8.  | `r<karakter>` | Ganti satu karakter di bawah kursor. |
## Visual Mode (Seleksi Teks)

| No. | Key      | Description                            |
| --- | -------- | -------------------------------------- |
| 1.  | v        | Masuk Visual Mode (pilih karakter).    |
| 2.  | V        | Masuk Visual Line Mode (pilih baris).  |
| 3.  | ctrl + v | Masuk Visual Block Mode (pilih kolom). |
| 4.  | y        | Copy teks yang dipilih.                |
| 5.  | d        | Cut teks yang dipilih.                 |
| 6.  | p        | Paste setelah kursor.                  |
## Command Mode (Perintah :)

| No. | Key           | Description                      |
| --- | ------------- | -------------------------------- |
| 1.  | :w            | Simpan file.                     |
| 2.  | :q            | Keluar jika tidak ada perubahan. |
| 3.  | :q!           | Keluar tanpa menyimpan.          |
| 4.  | :wq atau ZZ   | Simpan dan keluar.               |
| 5.  | :e filename   | Buka file lain.                  |
| 6.  | :set number   | Tampilkan nomor baris.           |
| 7.  | :set nonumber | Sembunyikan nomor baris.         |
## Pencarian & Replace

| No. | Key           | Description                            |
| --- | ------------- | -------------------------------------- |
| 1.  | /kata         | Cari kata dalam file.                  |
| 2.  | ?kata         | Cari kata ke atas.                     |
| 3.  | n             | Lanjut ke hasil pencarian berikutnya.  |
| 4.  | N             | Kembali ke hasil pencarian sebelumnya. |
| 5.  | :%s/old/new/g | Ganti semua old menjadi new.           |
