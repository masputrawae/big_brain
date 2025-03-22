---
title: draft
draft: true
---
# 1
```javascript
let nama = "Humman"
let umur = 23
let sudahMakan = true
let alamat;

console.log("Nama: " + nama)
console.log("Umur: " + umur)
console.log("Sudah Makan: " + sudahMakan)
console.log("Alamat: " + alamat)
```
Hasil :
```bash
Nama: Humman
Umur: 23
Sudah Makan: true
Alamat: undefined
```

# 2
```javascript
let angkaPertama = Number(prompt("Masukkan Angka Pertama: "));
let angkaKedua = Number(prompt("Masukkan Angka Kedua: "));
let operasi = prompt("Masukkan Operasi [+] [-] [/] [*] [%]: ")

if (operasi == "+" ){
    let hasil = angkaPertama + angkaKedua
    alert(hasil)
} else if (operasi == "-") {
    let hasil = angkaPertama - angkaKedua
    alert(hasil)
} else if (operasi == "/"){
    let hasil = angkaPertama / angkaKedua
    alert(hasil)
} else if (operasi == "*") {
    let hasil = angkaPertama * angkaKedua
    alert(hasil)
} else if (operasi == "%") {
    let hasil = angkaPertama % angkaKedua
    alert(hasil)
} else {
    let penjumlahan = angkaPertama + angkaKedua
    let pengurangan = angkaPertama - angkaKedua
    let perkalian = angkaPertama * angkaKedua
    let pembagian = angkaPertama / angkaKedua
    let modulus = angkaPertama % angkaKedua
    alert("Penjumlahan : " + penjumlahan)
    alert("Pengurangan : " + pengurangan)
    alert("Perkalian : " + perkalian)
    alert("Pembagian : " + pembagian)
    alert("Modulus : " + modulus)
}
```

# 3


# 4
```javascript
for (let i = 1; i <= 10; i++){
    console.log("loop ke-" + i)
}

let a = 1;
while (a <= 10){
    console.log("loop a ke-"+ a);
    a++;
}
```

# 5
```javascript
let buah = ["apel", "jeruk", "mangga"]

for(item of buah){
    console.log(item)
}

buah.forEach(function(item){
    console.log(item)
})
```

# Akhir
```javascript
let nama = prompt("Masukkan Nama: ")
let umur = Number(prompt("Masukkan Umur: "))

if (umur <= 18){
    alert("Hai : " + nama + " Kamu Masih Anak Anak")
} else {
    alert("Hai : " + nama + " Kamu Sudah Dewasa")
}

for (let i = 1; i <= 5; i++){
    console.log(i)
}
```

# Cek Angka Ganjil Genap
```javascript
let cekAngka = Number(prompt("Cek Angka Ganjil Genap: "))

if (cekAngka % 2 == 0){
    alert("angka genap")
} else {
    alert("angka ganjil")
}
```

# Cek Bilangan Prima
```javascript
let angka = Number(prompt("Masukkan Angka Untuk di cek: "))
let prima = true;

if(angka <= 1){
    prima = false;
} else {
    for(let i = 2; i < angka; i++){
        if(angka % i === 0){
            prima = false;
            break;
        }
    }
}

if (prima){
    alert("Angka " + angka + " Adalah Prima")
} else {
    alert("Angka " + angka + " Bukan Prima")
}
```
Perbaikan Bilangan prima
```javascript
let angka = Number(prompt("Masukkan Angka Untuk Dicek: "))
let prima = angka > 1; // Angka 0 dan 1 bukan prima

for(let i = 2; i < angka; i++){
    if(angka % i === 0){
        prima = false;
        break;
    }
}

alert("Angka " + angka + (prima ? " Adalah PRIMA" : " Bukan PRIMA"));
``` 

# Fungsi
```javascript
function jumlah(a, b){
    return a + b;
}
function kurang(a, b){
    return a - b;
}
function kali(a, b){
    return a * b;
}
function bagi(a, b){
    return a / b;
}
function modulus(a, b){
    return a % b;
}
let angkaPertama = Number(prompt("Masukkan Angka Pertama: "))
let angkaKedua = Number(prompt("Masukkan Angka Kedua: "))
let operasi = prompt("Masukkan Operasi: [+] [-] [*] [/] [%]")

if(operasi == "+"){
    alert("Hasil Penjumlahan: " + jumlah(angkaPertama, angkaKedua))
} else if (operasi == "-"){
    alert("Hasil Pengurangan: " + kurang(angkaPertama, angkaKedua))
}else if (operasi == "*"){
    alert("Hasil Perkalian: " + kali(angkaPertama, angkaKedua))
}else if (operasi == "/"){
    alert("Hasil Pembagian: " + bagi(angkaPertama, angkaKedua))
}else if (operasi == "%"){
    alert("Hasil Modulus: " + modulus(angkaPertama, angkaKedua))
} else {
    alert("Operasi Tidak Ditemukan, Menampilkan semua operasi")
    alert("Hasil Penjumlahan: " + jumlah(angkaPertama, angkaKedua))
    alert("Hasil Pengurangan: " + kurang(angkaPertama, angkaKedua))
    alert("Hasil Perkalian: " + kali(angkaPertama, angkaKedua))
    alert("Hasil Pembagian: " + bagi(angkaPertama, angkaKedua))
    alert("Hasil Modulus: " + modulus(angkaPertama, angkaKedua))
}
```
perbaikan: 
```javascript
function jumlah(a, b) {
    return a + b;
}
function kurang(a, b) {
    return a - b;
}
function kali(a, b) {
    return a * b;
}
function bagi(a, b) {
    return a / b;
}
function modulus(a, b) {
    return a % b;
}

let angkaPertama = Number(prompt("Masukkan Angka Pertama: "));
let angkaKedua = Number(prompt("Masukkan Angka Kedua: "));
let operasi = prompt("Masukkan Operasi: [+] [-] [*] [/] [%]");

switch (operasi) {
    case "+":
        alert("Hasil Penjumlahan: " + jumlah(angkaPertama, angkaKedua));
        break;
    case "-":
        alert("Hasil Pengurangan: " + kurang(angkaPertama, angkaKedua));
        break;
    case "*":
        alert("Hasil Perkalian: " + kali(angkaPertama, angkaKedua));
        break;
    case "/":
        alert("Hasil Pembagian: " + bagi(angkaPertama, angkaKedua));
        break;
    case "%":
        alert("Hasil Modulus: " + modulus(angkaPertama, angkaKedua));
        break;
    default:
        alert("Operasi Tidak Ditemukan, Menampilkan semua operasi:");
        let hasil = `
        Penjumlahan: ${jumlah(angkaPertama, angkaKedua)}
        Pengurangan: ${kurang(angkaPertama, angkaKedua)}
        Perkalian: ${kali(angkaPertama, angkaKedua)}
        Pembagian: ${bagi(angkaPertama, angkaKedua)}
        Modulus: ${modulus(angkaPertama, angkaKedua)}
        `;
        alert(hasil);
}
```

# MENGHITUNG DISKON
```javascript
const namaToko = "Toko Murah";

function hitungDiskon(harga, diskon = 10) {
    console.log(`Selamat datang di ${namaToko}`);

    let hasil = harga - (harga * diskon / 100);

    return `Harga setelah diskon: Rp ${hasil.toLocaleString("id-ID")}`;
}

console.log(hitungDiskon(150000));
console.log(hitungDiskon(200000, 20));

```

perbaikan dan peningkatan
```javascript
const namaToko = "Toko Murah";

function hitungDiskon(harga, diskon = 10) {
    console.log(`Selamat datang di ${namaToko}`);
    let hasil = harga - (harga * diskon / 100);
    return `Harga setelah diskon: Rp ${hasil.toLocaleString("id-ID")}`;
}

function cekPromo(harga, kodePromo) {
    let diskon;
    
    if (kodePromo == "HEMAT50") {
        diskon = 50;
    } else if (kodePromo == "DISKON25") {
        diskon = 25;
    } else {
        console.log("Kode Diskon Tidak Berlaku / Tidak ada");
        return `Harga tanpa diskon: Rp ${harga.toLocaleString("id-ID")}`;
    }
    
    return hitungDiskon(harga, diskon);
}

// Contoh penggunaan
let hargaSekarang = 100000;
let kodeDiskon = "HEMAT50"; // Bisa diubah

console.log(cekPromo(hargaSekarang, kodeDiskon));

```