---
title: "Javascript bagian 4"
date: 2025-02-20T03:00:00+07:00
last_modified: 2025-02-20T03:00:00+07:00
description: "Catatan belajar JavaScript bagian 4"
excerpt: "Catatan belajar atau ringkasan tentang JavaScript bagian 4."
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
## Kondisi (if-else) di JavaScript
`if-else` digunakan untuk membuat keputusan berdasarkan kondisi tertentu.

### if statement (hanya if)
Jika `umur` lebih dari atau sama dengan `18`, maka akan mencetak `"Kamu sudah dewasa."`.
```javascript
let umur = 18;
if (umur >= 18) {
	console.log("Kamu sudah dewasa.");
}
```

### if-else statement
Jika `umur < 18`, akan mencetak `"Kamu masih anak-anak."`.
```javascript
let umur = 16;
if (umur >= 18) {
    console.log("Kamu sudah dewasa.");
} else {
    console.log("Kamu masih anak-anak.");
}
```

### if-else if-else (multi kondisi)
Kode ini akan memberi nilai **A, B, C, atau D** tergantung skor yang dimasukkan.
```javascript
let nilai = 80;
if (nilai >= 90) {
    console.log("Grade: A");
} else if (nilai >= 75) {
    console.log("Grade: B");
} else if (nilai >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}
```

### Ternary Operator (if-else singkat)
Jika umur >= 18, maka `status` adalah `"Dewasa"`, jika tidak `"Anak-anak"`.
```javascript
let umur = 20;
let status = (umur >= 18) ? "Dewasa" : "Anak-anak";
console.log(status); // Output: Dewasa
```

## 📌 Perulangan (Looping) di JavaScript
Looping digunakan untuk mengulang kode beberapa kali.

### for loop
Digunakan jika kita tahu berapa kali perulangan harus dilakukan.
Akan mencetak **"Loop ke-1" sampai "Loop ke-5"**.
```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Loop ke-" + i);
}
```

### while loop
Digunakan jika kita tidak tahu pasti berapa kali perulangan.
Sama seperti `for`, tapi menggunakan `while`.
```javascript
let i = 1;
while (i <= 5) {
    console.log("Loop ke-" + i);
    i++;
}
```

### do-while loop
Mirip dengan `while`, tapi dijalankan minimal sekali.
Perbedaannya: **`do-while` akan selalu menjalankan kode minimal sekali**, walaupun kondisi `false`.
```js
let i = 1;
do {
    console.log("Loop ke-" + i);
    i++;
} while (i <= 5);
```

### Loop dalam Array (for-of & forEach)
Digunakan untuk menelusuri elemen dalam array.
```js
let buah = ["Apel", "Mangga", "Jeruk"];
for (let item of buah) {
    console.log(item);
}
// Output: Apel, Mangga, Jeruk
```

Cara lain dengan `forEach`:
```js
buah.forEach(function(item) {
    console.log(item);
});
```

---

## Latihan Singkat
Coba jalankan di browser atau console:
```js
let angka = prompt("Masukkan angka:");
if (angka > 0) {
    alert("Angka positif");
} else if (angka < 0) {
    alert("Angka negatif");
} else {
    alert("Angka nol");
}
```

Kode ini mengecek apakah angka yang dimasukkan **positif, negatif, atau nol**.