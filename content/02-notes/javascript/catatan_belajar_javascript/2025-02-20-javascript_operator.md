---
title: "Operator"
date: 2025-02-20T02:45:00+07:00
last_modified: 2025-02-20T02:45:00+07:00
description: "Catatan belajar JavaScript Operator"
excerpt: "Catatan belajar atau ringkasan tentang JavaScript Operator."
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
## Operator di JavaScript
Operator digunakan untuk melakukan operasi pada nilai atau variabel.
### Operator Aritmatika (untuk perhitungan)

| Operator | Fungsi              | Contoh (`x = 10, y = 5`) |
| -------- | ------------------- | ------------------------ |
| `+`      | Penjumlahan         | `x + y = 15`             |
| `-`      | Pengurangan         | `x - y = 5`              |
| `*`      | Perkalian           | `x * y = 50`             |
| `/`      | Pembagian           | `x / y = 2`              |
| `%`      | Modulus (sisa bagi) | `x % y = 0`              |

Contoh:
```javascript
let a = 10;
let b = 3;
console.log(a + b); // Output: 13
console.log(a % b); // Output: 1
```

### Operator Perbandingan (hasilnya `true` atau `false`)

| Operator | Fungsi                            | Contoh (`x = 10, y = 5`) |
| -------- | --------------------------------- | ------------------------ |
| `==`     | Sama dengan (tidak cek tipe data) | `x == "10"` → `true`     |
| `===`    | Sama dengan (cek tipe data)       | `x === "10"` → `false`   |
| `!=`     | Tidak sama dengan                 | `x != y` → `true`        |
| `!==`    | Tidak sama & tipe berbeda         | `x !== "10"` → `true`    |
| `>`      | Lebih besar                       | `x > y` → `true`         |
| `<`      | Lebih kecil                       | `x < y` → `false`        |

Contoh:
```javascript
let angka = 10;
console.log(angka == "10");  // true (tidak cek tipe)
console.log(angka === "10"); // false (cek tipe)
```

### Operator Logika (digunakan dalam kondisi `if`)
Dalam JavaScript, **AND (`&&`), OR (`||`), dan NOT (`!`)** adalah operator logika yang digunakan untuk menggabungkan atau membalik nilai boolean (true/false)

| Operator | Fungsi                                            | Contoh            |
| -------- | ------------------------------------------------- | ----------------- |
| &&       | **AND** (Semua harus `true`)                      | (x > 5 && x < 15) |
| \|\|     | **OR**  (jika salah satu operand bernilai `true`) | (5 \|\| "5")      |
| !        | **NOT** (Membalikkan nilai)                       | !(x < 5)          |

Contoh:
```javascript
let umur = 20;
console.log(umur > 18 && umur < 30); // true
console.log(umur < 18 || umur > 25); // false
console.log(!true); // false
```

#### AND (`&&`)
Operator **AND (`&&`)** akan menghasilkan `true` jika **kedua operand (kiri dan kanan)** bernilai `true`. Jika salah satu bernilai `false`, hasilnya `false`.

Sintaks:
```javascript
A && B
```

- Jika **A = true** dan **B = true** → hasilnya `true`
- Jika **A = true** dan **B = false** → hasilnya `false`
- Jika **A = false** dan **B = true** → hasilnya `false`
- Jika **A = false** dan **B = false** → hasilnya `false`

Contoh:
```javascript
console.log(true && true);  // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false);// false

let umur = 20;
let memilikiSIM = true;
console.log(umur >= 18 && memilikiSIM); // true (karena umur cukup & punya SIM)
```

---

#### OR (`||`)
Operator **OR (`||`)** akan menghasilkan `true` jika **salah satu operand bernilai `true`**. Hanya akan menghasilkan `false` jika **kedua operand bernilai `false`**.

Sintaks:
```javascript
A || B
```

- Jika **A = true** dan **B = true** → hasilnya `true`
- Jika **A = true** dan **B = false** → hasilnya `true`
- Jika **A = false** dan **B = true** → hasilnya `true`
- Jika **A = false** dan **B = false** → hasilnya `false`

Contoh:
```javascript
console.log(true || true);  // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false);// false

let punyaKTP = false;
let punyaPaspor = true;
console.log(punyaKTP || punyaPaspor); // true (karena setidaknya punya Paspor)
```

---

#### NOT (`!`)
Operator **NOT (`!`)** digunakan untuk membalik nilai boolean.
- Jika nilai **true**, maka hasilnya `false`.
- Jika nilai **false**, maka hasilnya `true`.

Sintaks:
```javascript
!A
```

Contoh:
```javascript
console.log(!true);  // false
console.log(!false); // true

let hujan = true;
console.log(!hujan); // false (karena hujan = true, lalu dibalik jadi false)
```

---

#### Contoh Penggunaan dalam Kondisi

```javascript
let cuaca = "cerah";
let libur = true;

if (cuaca === "cerah" && libur) {
    console.log("Ayo pergi jalan-jalan!");
} else {
    console.log("Kita tetap di rumah.");
}
// Output: "Ayo pergi jalan-jalan!" (karena kedua kondisi terpenuhi)
```

---