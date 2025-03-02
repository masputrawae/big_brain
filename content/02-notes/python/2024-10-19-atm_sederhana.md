---
title: Program ATM Sederhana
date: 2024-10-19T23:43:42+07:00
last_modified: 2024-10-19T23:43:42+07:00
description: membuat program ATM sederhana menggunakan python
excerpt: Pada Tanggal; Minggu, 19 Oktober 2024 pukul 20.10, aku sedang belajar python dan membuat sebuah program atm sederhana, ini adalah kodenya, siapa tahu ada yang sedang mencari contekan ☝️
categories:
  - Python
  - Programing
tags:
  - python
  - basic_python
  - belajar_python
  - programming
  - atm_sederhana
thumbnail: 
pinned: false
draft: false
mathjax: false
---
Pada Tanggal: Minggu, 19 Oktober 2024 pukul 20.10, aku sedang belajar python dan membuat sebuah program atm sederhana, ini adalah kodenya, siapa tahu ada yang sedang mencari contekan ☝️

```python
import time

saldo = 0
riwayat_transaksi = []

while True:
    print(f'''
====[$] Selamat Datang Di ATM Sederhana [$]====

    [1] Cek Saldo
    [2] Deposit
    [3] Tarik Tunai
    [4] Riwayat Transaksi
    [5] Keluar

====[$] Selamat Datang Di ATM Sederhana [$]====''')

    pilihan = int(input("Pilih 1/2/3/4/5: "))
    if pilihan == 1:
        print("Sedang Mencari Saldo Anda, Tunggu Sebentar...")
        time.sleep(3)
        print(f"\nSaldo Yang Tersimpan: {saldo}")
        print("Tunggu 3 Detik...")
        time.sleep(3)

    elif pilihan == 2:
        jumlah = int(input(f"\n[$]==Deposit==[$]\nMasukkan Jumlah Saldo: "))
        saldo += jumlah
        riwayat_transaksi.append(f"Deposit Sebesar {jumlah}!")
        print(f"Sedang Diproses...")
        time.sleep(3)
        print(f"Berhasil Menambahkan Saldo Sebesar: ${jumlah}")
        time.sleep(3)

    elif pilihan == 3:
        jumlah = int(input(f"\n[$]==Tarik Tunai==[$]\nMasukkan Jumlah Saldo: "))
        time.sleep(1)
        if jumlah <= saldo:
            saldo -= jumlah
            riwayat_transaksi.append(f"Tarik Tunai Sebesar {jumlah}")
            print("Sedang Diproses...")
            time.sleep(3)
            print(f"Tarik Tunai Sebesar {jumlah} Berhasil")
            time.sleep(3)
        else:
            print("Saldo Anda Tidak Cukup!!")
            print("Tunggu 1 Detik...")
            time.sleep(1)

    elif pilihan == 4:
        if not riwayat_transaksi:
            print("Belum Ada Transaksi")
        else:
            print("Melacak Riwayat Transakasi, Tunggu Sebentar...")
            time.sleep(3)
            for transaksi in riwayat_transaksi:
                print(transaksi)
                time.sleep(3)

    elif pilihan == 5:
        print("Sampai Jumpa Lain Waktu")
        break

    else:
        print("Pilihan Tidak Valid...Coba Lagi!")
        time.sleep(3)
        
```
---

