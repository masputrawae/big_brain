---
title: "Membuat Breadcrumbs di Jekyll"
date: 2024-11-17T23:43:42+07:00
last_modified: 2024-11-17T23:43:42+07:00
description: "Cara sederhana membuat breadcrumbs di Jekyll"
excerpt: "Hai! Kali ini aku ingin membagikan pengalaman membuat Breadcrumbs di Jekyll, fitur navigasi yang biasanya muncul di bagian atas halaman web. Contohnya seperti yang ada di web ini. Mungkin aku tidak akan banyak membahas detail cara kerjanya, karena aku masih belajar dan belum sepenuhnya paham alur kerjanya."
categories:
  - Web Development
  - Jekyll
tags:
  - jekyll
  - github_pages
  - static_website
  - web_development
  - breadcrumbs
  - html
  - liquid
  - tutorial
thumbnail: 
pinned: false
draft: false
mathjax: false
---
Hai! Kali ini aku ingin membagikan pengalaman membuat **Breadcrumbs** di Jekyll, fitur navigasi yang biasanya muncul di bagian atas halaman web. Contohnya seperti yang ada di web ini. Mungkin aku tidak akan banyak membahas detail cara kerjanya, karena aku masih belajar dan belum sepenuhnya paham alur kerjanya. Tapi, bagi kalian yang ingin memahami lebih mendalam, kalian bisa kunjungi [Breadcrumbs • Jekyll](https://jekyllcodex.org/without-plugin/breadcrumbs/) sebagai referensi.

## Langkah 1: Buat File `breadcrumbs.html`

Pertama, buat file di dalam folder `_includes` dengan nama `breadcrumbs.html`, lalu paste kode di bawah ini:

```html
{% raw %}
<div id="breadcrumbs">
  {% assign crumbs = page.url | remove:'/index.html' | split: '/' %}
  <a href="{{ '/' | relative_url }}">Home</a>
  {% for crumb in crumbs offset: 1 %}
    {% if forloop.last %}
      / {{ page.title }}
    {% else %}
      / <a href="{% assign crumb_limit = forloop.index | plus: 1 %}{% for crumb in crumbs limit: crumb_limit %}{{ crumb | append: '/' | replace:'without-plugin/','without-plugins/' }}{% endfor %}">{{ crumb | replace:'-',' ' | remove:'.html' | capitalize }}</a>
    {% endif %}
  {% endfor %}
</div>
<hr>
{% endraw %}
```

### Perbedaan Versi
Pada kode yang aku gunakan, terdapat sedikit perubahan di bagian link `Home`. Di versi pertama, aku menggunakan:

```html
<a href="/">Home</a>
```

Namun setelah mencoba di GitHub Pages, ternyata link tersebut tidak berjalan dengan benar. Akhirnya, aku mengubahnya menjadi:

```html
{% raw %}
<a href="{{ '/' | relative_url }}">Home</a>
{% endraw %}
```

Kenapa? Karena di GitHub Pages, kita perlu menggunakan `relative_url` untuk memastikan linknya berjalan dengan baik di hosting. Tapi, jika dijalankan secara lokal, versi pertama seharusnya tidak ada masalah. Coba saja sesuaikan dengan kebutuhan kalian.

## Langkah 2: Tambahkan `include` di `default.html`

Setelah file `breadcrumbs.html` selesai, langkah selanjutnya adalah menambahkannya di tempat yang diinginkan, misalnya di file `default.html`. Berikut contoh caranya:

```html
{% raw %}
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Judul Halaman</title>
</head>
<body>
  <header>
    {% include breadcrumbs.html %} <!-- Menambahkan di sini -->
  </header>
  
  <main>
    {{ content }}
  </main>
  
  <footer>
    <!-- Footer konten -->
  </footer>
</body>
</html>
{% endraw %}
```

Kamu bisa menaruh `include` di bagian mana saja, tapi aku menyarankan untuk menaruhnya di bagian `header` agar breadcrumbs muncul di bagian atas halaman.

## Kesimpulan

Proses membuat fitur breadcrumbs di Jekyll ini cukup mudah dan tidak banyak masalah. Yang penting, kita mengandalkan kemampuan membaca dokumentasi dan sedikit teknik copy-paste 😅. Dengan pendekatan yang sederhana, kamu bisa menambahkan navigasi yang berguna di setiap halaman web.

Selamat mencoba, semoga berhasil, dan jangan lupa untuk terus bereksperimen! 👍
