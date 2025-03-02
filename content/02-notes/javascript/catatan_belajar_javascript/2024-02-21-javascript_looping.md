---
title: Looping
date: 2025-02-21T15:00:00+07:00
last_modified: 2025-02-21T15:00:00+07:00
description: Catatan belajar JavaScript Looping
excerpt: Catatan belajar atau ringkasan tentang JavaScript Looping.
categories:
  - Programing
  - Javascript
tags:
  - programming
  - javascript
  - belajar_javascript
  - catatan_belajar
  - javascript_pemula
  - belajar_programming
  - web_development
  - front_end
thumbnail: 
pinned: false
draft: false
mathjax: false
---
Looping (perulangan) di JavaScript digunakan untuk menjalankan kode yang sama berulang kali selama suatu kondisi masih bernilai true. Ada beberapa jenis looping utama di JavaScript:
## for (Perulangan dengan Penghitung)
Digunakan ketika jumlah perulangan sudah diketahui.
Format Dasar:
```javascript
for (inisialisasi; kondisi; perubahan) {
  // kode yang akan dijalankan
}
```
Contoh:
```javascript
for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}
// Output:
// Iterasi ke-1
// Iterasi ke-2
// Iterasi ke-3
// Iterasi ke-4
// Iterasi ke-5
```
## while (Perulangan dengan Kondisi)
Digunakan ketika jumlah perulangan tidak diketahui pasti dan bergantung pada kondisi tertentu.
Format Dasar:
```javascript
while (kondisi) {
  // kode yang akan dijalankan
}
```
Contoh:
```javascript
let j = 1;
while (j <= 5) {
  console.log("Perulangan ke-" + j);
  j++;
}
// Output: Sama seperti `for` di atas
```
## do...while (Minimal Satu Kali Perulangan)
Mirip dengan while, tetapi dijalankan minimal satu kali, karena kondisi diperiksa setelah kode dieksekusi.
Format Dasar:
```javascript
do {
  // kode yang akan dijalankan
} while (kondisi);
```
Contoh:
```javascript
let k = 1;
do {
  console.log("Do-While ke-" + k);
  k++;
} while (k <= 5);
```
Perbedaan utama:
- Jika k = 10, while tidak akan berjalan karena kondisi langsung false. Tetapi do...while tetap berjalan sekali, lalu berhenti.
## for...in (Looping untuk Objek)
Digunakan untuk mengulang properti dalam objek.
Contoh:
```javascript
const person = { name: "Alice", age: 25, job: "Programmer" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: Alice
// age: 25
// job: Programmer
```
## for...of (Looping untuk Array/String)
Digunakan untuk mengulang nilai dalam array atau string.
Contoh:
```javascript
let angka = [10, 20, 30, 40];
for (let num of angka) {
  console.log(num);
}
// Output:
// 10
// 20
// 30
// 40
```
Untuk string:
```javascript
for (let huruf of "Hello") {
  console.log(huruf);
}
// Output:
// H
// e
// l
// l
// o
```
## break dan continue (Mengontrol Perulangan)
- break: Menghentikan perulangan sepenuhnya.
- continue: Melewati iterasi saat ini dan lanjut ke iterasi berikutnya.
Contoh break:
```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // Keluar dari loop saat i = 5
  }
  console.log(i);
}
// Output: 1, 2, 3, 4
```
Contoh continue:
```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Lewati angka 3
  }
  console.log(i);
}
// Output: 1, 2, 4, 5
```