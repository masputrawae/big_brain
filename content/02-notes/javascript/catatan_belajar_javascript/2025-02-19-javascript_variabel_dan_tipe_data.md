---
title: Variabel & Tipe Data
date: 2025-02-19T23:25:00+07:00
last_modified: 2025-02-21T14:01:00+07:00
description: Catatan belajar JavaScript Variabel dan Tipe Data
excerpt: Catatan belajar atau ringkasan tentang JavaScript Variabel dan Tipe Data.
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
## Variabel
Di JavaScript, ada tiga cara untuk mendeklarasikan variabel,
### `var` (Versi Lama)
Kelebihan:
- Dapat dideklarasikan ulang dalam scope yang sama.
- Bersifat function-scoped, artinya hanya dikenali di salam fungsi tempat ia di deklarasikan.

Kekurangan:
- Tidak memiliki block scope, sehingga bisa diakses dari luar blok `{}` jika tidak dalam fungsi.
- Dapat menimbulkan masalah karena dapat dideklarasikan ulang dan diubah secara tidak terduga 

**Contoh**:
```javascript
var x = 10;
if (true){
	var x = 20;  // Mengubah x dulu blok ini juga
}
console.log(x);  // Hasil 20
```
### `let` (Variabel Modern, Disarankan)
Kelebihan: 
- Memiliki block scope, hanya bisa di akses di dalam `{}` tempat ia dideklarasikan.
- Bisa diubah nilainya, tapi tidak bisa dideklarasikan ulang dalam scope yang sama.

Kekurangan:
- Tidak bisa diakses sebelum dideklarasikan (tidak seperti var yang mengalami hosting dengan nilai undefined).

**Contoh**:
```javascript
let y = 30;
if (true) {
	let y = 40; // Variabel y hanya ada dalam blok ini
}
console.log(y)  // Output 30 bukan 40
```
### `const` (Variabel Konstan, Tidak bisa diubah)
Kelebihan:
- Nilainya tidak bisa diubah setelah dideklarasikan.
- Memiliki block scope seperti let.

Kekurangan:
- Harus Langsung diberi nilai saat dideklarasikan.
- Tidak bisa diubah, tetapi jika nilainya berupa objek atau array, property di dalamnya masih bisa diubah.

**Contoh**:
```javascript
const z = 50;
z = 60; // • Error: Assignment to constant

const person = { name: "John" };
person.name = "Doe"; // Bisa diubah karena hanya mengubah property, bukan variabel nya
console.log(person.name) // Output: Doe
```

{{< status status="tips" title="Rekomendasi!" >}}
- Gunakan let untuk variabel yang bisa berubah.
- Gunakan const untuk nilai yang tidak berubah.
- Hindari var, kecuali jika memang diperlukan untuk kompatibilitas dengan kode lama.
{{< /status >}}

---
## Tipe Data di JavaScript
Tipe data adalah jenis nilai yang bisa disimpan di variabel. Di JavaScript, ada beberapa tipe data utama:
### String(teks)
Teks harus diapit oleh tanda kutip (`" "` atau `' '`).
```javascript
let nama = "Budi";
console.log(nama); // Output: Budi
```

### Number (angka)
Bisa berupa bilangan bulat atau desimal.
```javascript
let umur = 25;
let berat = 60.5;
console.log(umur, berat); // Output: 25 60.5
```

### Boolean (benar/salah)
Hanya memiliki dua nilai: `true` atau `false`.
```javascript
let sudahMakan = true;
console.log(sudahMakan); // Output: true
```

### Undefined (tidak ada nilai)
Variabel dibuat tetapi belum diberi nilai.
```javascript
let alamat;
console.log(alamat); // Output: undefined
```

### Null (kosong)
Variabel memiliki nilai kosong (sengaja dibuat kosong).

```javascript
let data = null;
console.log(data); // Output: null
```