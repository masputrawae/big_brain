---
title: "Javascript bagian 3"
date: 2025-02-20T02:45:00+07:00
last_modified: 2025-02-20T02:45:00+07:00
description: "Catatan belajar JavaScript bagian 3"
excerpt: "Catatan belajar atau ringkasan tentang JavaScript bagian 3."
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

Dalam JavaScript, **AND (`&&`), OR (`||`), dan NOT (`!`)** adalah operator logika yang digunakan untuk menggabungkan atau membalik nilai boolean (true/false)

---
## AND (`&&`)
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

## OR (`||`)
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

## NOT (`!`)
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

## Contoh Penggunaan dalam Kondisi

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