---
title: Mata Emoji Ikuti Cursor
date: 2024-11-15T23:43:42+07:00
last_modified: 2024-11-15T23:43:42+07:00
description: Pelajari cara membuat emoji sederhana yang matanya mengikuti kursor kamu dengan kode HTML, CSS, dan JavaScript. Kode ini mudah dipahami dan cocok untuk menambah elemen interaktif di halaman webmu. Yuk, coba dan buat tampilan website kamu jadi lebih seru!
excerpt: "Hai 😊 Teman! Kali ini aku mau berbagi code sederhana yang bikin tampilan website jadi lebih seru | emoji yang matanya bisa mengikuti kursor kamu! Lucu banget kan? Kalau kamu tertarik, bisa langsung copy-paste source code-nya di bawah. Tapi peringatan: ini untuk seru-seruan ya, jadi kalau kamu sudah jago koding, lebih seru bikin sendiri! 😁"
categories:
  - Web Development
  - Javascript
  - CSS
  - HTML
tags:
  - web_animation
  - web_development
  - html
  - css
  - javascript
  - tips_trick_keren
  - coding
thumbnail: 
pinned: false
draft: false
mathjax: false
---

<style>
.kepala {
  width: 50px;
  height: 50px;
  background-color: #ffeb3b;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid black;
}
.containersss {
  display: flex;
  gap: 4px;
}
.mata {
  width: 13px;
  height: 13px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 2px solid #333;
  overflow: hidden;
}
.pupil {
  width: 8px;
  height: 8px;
  background: #333;
  border-radius: 50%;
  position: absolute;
  transition: transform 0.1s ease-out;
}
.mulut {
  width: 20px;
  height: 10px;
  background-color: #f44336;
  border-radius: 0 0 50px 50px;
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
<body>
  <div class="kepala">
    <div class="containersss">
      <div class="mata">
        <div class="pupil"></div>
      </div>
      <div class="mata">
        <div class="pupil"></div>
      </div>
    </div>
    <div class="mulut"></div>
  </div>
<script>
document.addEventListener('mousemove', (e) => {
  const mataList = document.querySelectorAll('.mata');
  mataList.forEach(mata => {
    const pupil = mata.querySelector('.pupil');
    const mataRect = mata.getBoundingClientRect();
    const mataX = mataRect.left + mataRect.width / 2;
    const mataY = mataRect.top + mataRect.height / 2;
    const angle = Math.atan2(e.clientY - mataY, e.clientX - mataX);
    const jarak = 5;
    const pupilX = Math.cos(angle) * jarak;
    const pupilY = Math.sin(angle) * jarak;
    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  });
});
</script>
</body>

Hai 😊 Teman! Kali ini aku mau berbagi code sederhana yang bikin tampilan website jadi lebih seru: emoji yang matanya bisa mengikuti kursor kamu! Lucu banget kan? Kalau kamu tertarik, bisa langsung copy-paste source code-nya di bawah. Tapi peringatan: ini untuk seru-seruan ya, jadi kalau kamu sudah jago koding, lebih seru bikin sendiri! 😁
## Kode HTML dan CSS untuk Struktur dan Tampilan
Di sini, aku akan jelaskan bagian utama dari kode ini.
HTML Struktur:
```html
<div class="kepala">
  <div class="containersss">
    <div class="mata">
      <div class="pupil"></div>
    </div>
    <div class="mata">
      <div class="pupil"></div>
    </div>
  </div>
  <div class="mulut"></div>
</div>
```
1. `<div class="kepala">` - Ini adalah elemen utama yang berbentuk lingkaran kuning. Di dalamnya, kita punya elemen untuk mata dan mulut.
2. .mata dan .pupil - Bagian mata diatur supaya bentuknya bulat dengan border-radius, dan bagian pupil akan bergerak mengikuti kursor nanti.
3. .mulut - Elemen ini untuk mulut emoji, yang digambar sebagai setengah lingkaran.

---

## CSS untuk Tampilan
```css
.kepala {
  width: 50px;
  height: 50px;
  background-color: #ffeb3b;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid black;
}
```
1. .kepala - Lingkaran kuning ini diatur lebarnya 50px, dengan background-color: `#ffeb3b;` dan `border-radius: 50%`; untuk membuat bentuk wajah emoji. box-shadow dan border bikin emoji lebih terlihat jelas.
2. `.mata` - Mata dibuat bulat kecil dengan width dan height 13px. `border: 2px solid #333;` bikin mata lebih berkarakter, dan `overflow: hidden;` mencegah pupil keluar dari lingkaran mata.
3. `.pupil` - Pupil dibuat dengan ukuran lebih kecil (8px) dan memiliki `transition: transform 0.1s ease-out;` untuk gerakan halus saat mengikuti kursor.
4. `.mulut` - Dibuat dengan bentuk setengah lingkaran merah di bagian bawah emoji.

---

## JavaScript untuk Gerakan Pupil
Bagian JavaScript ini yang bikin emoji jadi interaktif, karena pupil pada mata emoji akan mengikuti posisi kursor.
```js
document.addEventListener('mousemove', (e) => {
  const mataList = document.querySelectorAll('.mata');

  mataList.forEach(mata => {
    const pupil = mata.querySelector('.pupil');
    const mataRect = mata.getBoundingClientRect();
    const mataX = mataRect.left + mataRect.width / 2;
    const mataY = mataRect.top + mataRect.height / 2;
    const angle = Math.atan2(e.clientY - mataY, e.clientX - mataX);

    const jarak = 5;
    const pupilX = Math.cos(angle) * jarak;
    const pupilY = Math.sin(angle) * jarak;

    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  });
});
```
### Penjelasan JavaScript:
#### Event Listener:
`document.addEventListener('mousemove', ...)` - Kode ini mendeteksi posisi kursor saat bergerak di layar.
#### Menghitung Posisi Mata:
`const mataRect = mata.getBoundingClientRect();` - Mengambil posisi tiap mata di layar.
const mataX dan mataY menghitung titik tengah dari tiap mata.
#### Menghitung Arah Pupil:
`const angle = Math.atan2(...)` - Menghitung sudut (angle) antara kursor dan titik tengah mata.
const pupilX dan pupilY menghitung posisi pupil berdasarkan sudut dan jarak (const jarak = 5).
#### Gerakkan Pupil:
```js
pupil.style.transform = translate(${pupilX}px, ${pupilY}px);
```
Menyusun pergerakan pupil agar mengikuti arah kursor, dengan jarak maksimum 5px dari tengah mata.
## Full Code Here
```html
<style>
.kepala {
  width: 50px;
  height: 50px;
  background-color: #ffeb3b;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid black;
}

.containersss {
  display: flex;
  gap: 4px;
}

.mata {
  width: 13px;
  height: 13px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 2px solid #333;
  overflow: hidden;
}

.pupil {
  width: 8px;
  height: 8px;
  background: #333;
  border-radius: 50%;
  position: absolute;
  transition: transform 0.1s ease-out;
}

.mulut {
  width: 20px;
  height: 10px;
  background-color: #f44336;
  border-radius: 0 0 50px 50px;
  position: absolute;
  bottom: 4px;
  left: 50%; 
  transform: translateX(-50%);
}
</style>

</head>
<body>
  <div class="kepala">
    <div class="containersss">
      <div class="mata">
        <div class="pupil"></div>
      </div>
      <div class="mata">
        <div class="pupil"></div>
      </div>
    </div>
    <div class="mulut"></div>
  </div>

<script>
document.addEventListener('mousemove', (e) => {
  const mataList = document.querySelectorAll('.mata');

  mataList.forEach(mata => {
    const pupil = mata.querySelector('.pupil');

    const mataRect = mata.getBoundingClientRect();
    const mataX = mataRect.left + mataRect.width / 2;
    const mataY = mataRect.top + mataRect.height / 2;

    const angle = Math.atan2(e.clientY - mataY, e.clientX - mataX);

    const jarak = 5;
    const pupilX = Math.cos(angle) * jarak;
    const pupilY = Math.sin(angle) * jarak;

    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  });
});
</script>
</body>
```
