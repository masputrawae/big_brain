---
title: Pengenalan JavaScript
date: 2025-02-19T23:12:00+07:00
last_modified: 2025-02-21T12:37:00+07:00
description: Catatan belajar pengenalan JavaScript
excerpt: Catatan belajar atau ringkasan tentang pengenalan JavaScript
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
## Apa Itu JavaScript?

JavaScript adalah bahasa pemrograman yang digunakan untuk membuat halaman web lebih interaktif dan dinamis. Bersama dengan HTML dan CSS, JavaScript menjadi bagian penting dalam pengembangan web modern. Dengan JavaScript, kita bisa menambahkan fitur seperti animasi, validasi formulir, manipulasi elemen di halaman, dan bahkan mengembangkan aplikasi berbasis web.

## Sejarah Singkat JavaScript

JavaScript pertama kali dikembangkan oleh Brendan Eich pada tahun 1995 saat bekerja di Netscape. Awalnya, bahasa ini diberi nama Mocha, kemudian berubah menjadi LiveScript, dan akhirnya menjadi JavaScript. Meskipun namanya mirip dengan Java, keduanya adalah bahasa yang berbeda.

## Kegunaan JavaScript

JavaScript memiliki banyak kegunaan, di antaranya:

- **Manipulasi DOM (Document Object Model):** Mengubah dan mengontrol elemen HTML secara dinamis.
- **Interaksi Pengguna:** Menangani event seperti klik, hover, input pengguna, dll.
- **Validasi Formulir:** Memastikan data yang dimasukkan pengguna sesuai dengan aturan sebelum dikirim ke server.
- **Animasi dan Efek Visual:** Membuat animasi di halaman web.
- **Pengembangan Aplikasi Web:** Menggunakan framework dan library seperti React, Vue, dan Angular untuk membangun aplikasi web yang kompleks.

## Dasar-Dasar JavaScript

### 1. Menyisipkan JavaScript ke dalam HTML

JavaScript bisa dituliskan langsung di dalam file HTML dengan tag `<script>`, baik di dalam file HTML maupun di file terpisah dengan ekstensi `.js`.

**Contoh:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Belajar JavaScript</title>
</head>
<body>
    <h1>Halo, Dunia!</h1>
    <script>
        alert("Selamat datang di JavaScript!");
    </script>
</body>
</html>
```

### 2. Variabel dan Tipe Data

JavaScript memiliki tiga cara mendeklarasikan variabel: `var`, `let`, dan `const`.

```javascript
var nama = "John";  // Bisa diubah dan memiliki cakupan global
let umur = 25;      // Bisa diubah dan memiliki cakupan blok
const PI = 3.14;    // Tidak bisa diubah
```

### 3. Operator

JavaScript mendukung berbagai operator, seperti:

- **Aritmatika:** `+`, `-`, `*`, `/`, `%`
- **Perbandingan:** `==`, `!=`, `===`, `!==`, `>`, `<`
- **Logika:** `&&`, `||`, `!`

### 4. Kondisi (if, else, switch)

Contoh penggunaan `if-else`:

```javascript
let angka = 10;
if (angka > 0) {
    console.log("Angka positif");
} else {
    console.log("Angka negatif atau nol");
}
```

### 5. Perulangan (Looping)

Contoh `for` loop:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Iterasi ke-" + i);
}
```

### 6. Fungsi

Fungsi digunakan untuk mengelompokkan kode agar bisa digunakan kembali.

```javascript
function sapa(nama) {
    return "Halo, " + nama;
}
console.log(sapa("Aldi"));
```

## Kesimpulan

JavaScript adalah bahasa yang sangat kuat dan fleksibel untuk pengembangan web. Dengan memahami dasar-dasarnya, kita bisa mulai membuat website yang interaktif dan dinamis. Setelah menguasai dasar JavaScript, kita bisa mempelajari lebih lanjut tentang manipulasi DOM, event handling, dan framework modern untuk pengembangan aplikasi web.