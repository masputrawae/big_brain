---
title: "Javascript bagian 1"
date: 2025-02-19T23:12:00+07:00
last_modified: 2025-02-19T23:12:00+07:00
description: "Catatan belajar JavaScript bagian 1"
excerpt: "Catatan belajar atau ringkasan tentang JavaScript bagian 1."
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
## Pendahuluan JavaScript
JavaScript adalah bahasa pemrograman yang digunakan untuk membuat halaman web yang lebih interaktif. dengan javascript kita bisa:
- [x] Menampilkan Pesan Pop-up (alert)
- [x] Mengubah Teks / Warna secara dinamis 
- [x] Membuat animasi dan efek visual 
- [x] Mengambil data dari server tanpa harus reload halaman (Fetch API)
- [x] Validasi Form 
- [x] Dan masih banyak lagi 
### Menjalankan JavaScript
Ada beberapa cara menjalankan JavaScript:  
1. Di dalam HTML (Inline Script)
```html
<button onclick="alert('Halo, ini JavaScript!')">Klik Aku</button>
```
2. Di dalam tag `<script>` di HTML
```html
<script>
    alert("Halo dari JavaScript!");
</script>
```
3. Di file terpisah (`.js` file)
	-  HTML (`index.html`)
	```html
	<script src="script.js"></script>
	```
	- JavaScript (`script.js`)
    ```javascript
    alert("Halo dari file JavaScript eksternal!");
    ```
    

---

## Variabel di JavaScript

Variabel digunakan untuk menyimpan data. Ada tiga cara mendeklarasikan variabel:  
- `var` (cara lama, sebaiknya tidak digunakan)  
- `let` (bisa diubah nilainya)  
- `const` (nilai tetap, tidak bisa diubah)

Contoh penggunaan:
```javascript
let nama = "Budi";
const umur = 25;
console.log(nama); // Output: Budi
console.log(umur); // Output: 25
```
`let` bisa diubah nilainya, tetapi `const` tidak bisa:
```js
let kota = "Jakarta";
kota = "Surabaya";  // ✅ Boleh diubah

const negara = "Indonesia";
negara = "Malaysia"; // ❌ Error! Tidak bisa diubah
```

---

## Latihan Singkat
Coba jalankan kode ini di browser atau console (tekan `F12` di browser, lalu buka tab `Console`):
```js
let nama = prompt("Siapa namamu?");
alert("Halo, " + nama + "! Selamat belajar JavaScript.");
```
Kode ini akan meminta input dari pengguna dan menampilkan pesan selamat.