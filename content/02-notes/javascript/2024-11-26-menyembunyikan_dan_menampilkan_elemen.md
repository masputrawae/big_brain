---
title: Show & Hidden Element
date: 2024-11-26T23:43:42+07:00
last_modified: 2024-11-26T23:43:42+07:00
description: Cara sederhana untuk menyembunyikan dan menampilkan elemen menggunakan JavaScript di HTML
excerpt: Panduan untuk membuat tombol yang dapat menyembunyikan atau menampilkan elemen di halaman web menggunakan JavaScript.
categories:
  - Web Development
  - Javascript
  - CSS
  - HTML
tags:
  - catatan_belajar
  - cheat_sheet
  - javascript
  - html
  - css
  - web_development
  - belajar_javascript
thumbnail: 
pinned: false
draft: false
mathjax: false
---
## Struktur Html

```html
<!DOCTYPE html>
<html>
<head>
    <title>01 Menampilkan Dan Menyembunyikan Elemen</title>
    <!--=| CSS dan JavaScript |=-->
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>
<body>

    <!--=| Tombol untuk Menampilkan dan Menyembunyikan |=-->
    <button id="tampil">Tampilkan Elemen</button>

    <!--=| Konten yang Ingin Ditampilkan atau Disembunyikan |=-->
    <div id="konten">
        <p>Ini adalah konten yang bisa ditampilkan dan disembunyikan.</p>
    </div>

</body>
</html>
```
## CSS
```css
/* Konten default disembunyikan */
#konten{
    display: none;
}
```
## JavaScript
```javascript
document.getElementById('tampil').addEventListener('click', function () {
    const konten = document.getElementById('konten');

    if (konten.style.display === 'none') {
        konten.style.display = 'block';
    } else {
        konten.style.display = 'none';
    }
});
```
### Apa Fungsi Kode Ini?
Kode ini membuat tombol (atau elemen dengan `id="tampil"`) dapat digunakan untuk menampilkan atau menyembunyikan elemen lain (dengan `id="konten"`) melalui mekanisme *toggle*. Jadi, ketika elemen dengan `id="tampil"` diklik:
- Jika elemen `konten` tersembunyi, maka elemen akan muncul.
- Jika elemen `konten` terlihat, maka elemen akan disembunyikan.

### Bagaimana Cara Kerjanya?

1. Ambil Elemen Berdasarkan ID
   ```javascript
   document.getElementById('tampil')
   ```
   Baris ini mencari elemen dengan `id="tampil"` di dalam dokumen HTML. Metode `document.getElementById` mengembalikan referensi ke elemen tersebut sehingga JavaScript bisa mengendalikannya.

2. Tambahkan *Event Listener* 
   ```javascript
   .addEventListener('click', function() { ... })
   ```
   Bagian ini menambahkan pendengar (listener) untuk mendeteksi apakah elemen `tampil` diklik. Jika ada *event* klik (`'click'`), JavaScript akan menjalankan fungsi yang ada di dalamnya (`function(){...}`).

3. Ambil Elemen `konten`
   ```javascript
   const konten = document.getElementById('konten');
   ```
   Di dalam fungsi, kita mengambil elemen lain dengan `id="konten"` agar bisa diatur properti tampilannya.

4. Cek Properti `style.display`
   ```javascript
   if (konten.style.display === 'none') { ... }
   ```
   Properti `style.display` digunakan untuk mengontrol tampilan elemen di CSS:
   - `'none'` berarti elemen tidak terlihat (disembunyikan).
   - `'block'` berarti elemen terlihat (biasanya dalam bentuk blok).

   Di sini, kita memeriksa apakah elemen `konten` disembunyikan (`style.display === 'none'`). Jika iya, maka kita membuatnya terlihat (`konten.style.display = 'block'`).

5. Ganti Status Tampil/Sembunyi
   ```javascript
   if (konten.style.display === 'none') {
       konten.style.display = 'block';
   } else {
       konten.style.display = 'none';
   }
   ```
   Jika elemen tersembunyi, tampilkan dengan `display = 'block'`. Sebaliknya, jika elemen terlihat, sembunyikan dengan `display = 'none'`.

---

### Kenapa Bisa Bekerja?
- JavaScript DOM (Document Object Model) memungkinkan kita untuk mengakses dan memanipulasi elemen HTML melalui kode.
- Event Listener memonitor interaksi pengguna (dalam hal ini, klik), lalu mengeksekusi kode saat event terjadi.
- CSS Property `display` menentukan apakah elemen terlihat di halaman atau tidak.

---

## Contoh HTML untuk Kode Ini
```html
<button id="tampil">Tampilkan/Sembunyikan</button>
<div id="konten" style="display: none;">
    Ini adalah konten yang akan ditampilkan atau disembunyikan.
</div>
```

---

## Kenapa Menarik?
Kode ini sederhana tapi sangat berguna untuk fitur interaktif seperti:
- Tombol "Lihat Selengkapnya".
- Menu dropdown.
- Menyembunyikan dan menampilkan bagian tertentu dari halaman tanpa memuat ulang.
