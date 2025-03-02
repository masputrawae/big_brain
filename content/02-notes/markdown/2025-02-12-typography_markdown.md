---
title: "Typography"
date: 2025-02-12T23:43:42+07:00
last_modified: 2025-02-12T23:43:42+07:00
description: "Artikel ini menguji berbagai sintaks Markdown yang didukung oleh Hugo."
excerpt: "Menggunakan artikel ini untuk memastikan elemen-elemen Markdown ditampilkan dengan benar di situs Hugo Anda.'"
categories:
  - Markdown
  - Typography
tags:
  - markdown
  - typography
  - hugo
  - testing
thumbnail: 
pinned: true
draft: false
mathjax: true
---
Artikel ini dirancang untuk menguji semua sintaks Markdown yang mungkin didukung oleh Hugo. Dengan menggunakan artikel ini, Anda dapat memastikan bahwa semua elemen Markdown, termasuk perhitungan matematis, checkbox, dan lainnya, ditampilkan dengan benar di situs Hugo Anda.

---

## Heading Level 2

### Heading Level 3

#### Heading Level 4

##### Heading Level 5

###### Heading Level 6

---

## Paragraf dan Format Teks

Ini adalah paragraf biasa. Anda dapat menulis teks biasa di sini. **Ini adalah teks tebal** dan *ini adalah teks miring*. Anda juga bisa menggunakan ~~teks coret~~.

Anda juga bisa menggabungkan **teks tebal** dengan *teks miring* seperti ini: ***teks tebal dan miring***.

---

## Daftar (List)

### Daftar Tidak Berurutan (Unordered List)

- Item 1
- Item 2
  - Sub-item 2.1
  - Sub-item 2.2
- Item 3

### Daftar Berurutan (Ordered List)

1. Item pertama
2. Item kedua
   1. Sub-item 2.1
   2. Sub-item 2.2
3. Item ketiga

---

## Tautan (Link) dan Gambar (Image)

Ini adalah contoh [tautan ke Google](https://www.google.com).

Ini adalah contoh gambar:

![Alt text untuk gambar](https://picsum.photos.com/150 "Judul gambar opsional")

---

## Blockquote

> Ini adalah contoh blockquote. Anda dapat menggunakannya untuk menonjolkan kutipan atau teks penting.

---

## Author Card
{{< author avatar="https://picsum.photos/200" name="John Doe" >}}
John adalah seorang penulis dan pengembang web yang suka berbagi ilmu tentang Hugo dan SCSS.
{{< /author >}}


---
## Kode (Code)

### Inline Code

Anda dapat menulis `inline code` dengan menggunakan backtick.

### Block Code

```python
def hello_world():
    print("Hello, World!")
```

```javascript
function helloWorld() {
    console.log("Hello, World!");
}
```

---

## Tabel (Table)

| No  | Nama       | Usia | Kota      |
| --- | ---------- | ---- | --------- |
| 1   | John Doe   | 28   | New York  |
| 2   | Jane Smith | 34   | London    |
| 3   | Sam Brown  | 22   | Sydney    |

---

## Garis Horizontal (Horizontal Rule)

---

## Catatan Kaki (Footnote)

Ini adalah contoh teks dengan catatan kaki[^1].

[^1]: Ini adalah catatan kaki.

---

## Emoji

Anda juga bisa menggunakan emoji di Markdown! 😊🎉🚀

---

## Checkbox (Task List)

- [x] Task 1 (Selesai)
- [ ] Task 2 (Belum selesai)
- [ ] Task 3 (Belum selesai)

---

## Perhitungan Matematis (LaTeX)

Hugo mendukung rendering persamaan matematis menggunakan LaTeX. Berikut beberapa contoh:

### Inline Math

Contoh persamaan inline: \( E = mc^2 \).

### Block Math

Contoh persamaan dalam blok:

$$
\int_{a}^{b} x^2 \, dx
$$

Atau persamaan yang lebih kompleks:

$$
\frac{\partial u}{\partial t} + \nabla \cdot (\mathbf{u} \otimes \mathbf{u}) = -\nabla p + \nu \nabla^2 \mathbf{u}
$$

---

## HTML (Jika Diperlukan)

Jika Anda perlu menggunakan HTML, Anda bisa melakukannya seperti ini:

<p style="color:red;">Ini adalah teks berwarna merah menggunakan HTML.</p>

---

## Video dan Embed

Anda dapat menyematkan video atau konten lain menggunakan HTML:

{{< youtube id="dQw4w9WgXcQ" >}}

---

## Status Box
{{< status status="info" >}}
Ini adalah pesan informasi biasa.
{{< /status >}}

{{< status status="tips" title="Tips Keren!" >}}
Gunakan `SCSS` untuk styling yang lebih fleksibel!
{{< /status >}}

{{< status status="warning" >}}
Hati-hati, ini peringatan!
{{< /status >}}

{{< status status="danger" >}}
Bahaya! Jangan lakukan ini sembarangan.
{{< /status >}}

{{< status status="error" title="Kesalahan Fatal!" >}}
Terjadi error pada sistem. Periksa kembali konfigurasi Anda.
{{< /status >}}


---
## Images
### Default (Center)
{{< image src="https://placehold.co/100" alt="Gambar Center" align="center" >}}
Veniam labore officia sunt exercitation consequat deserunt excepteur et occaecat elit in ex. Do ex enim sunt reprehenderit. Aute nulla qui Lorem eu incididunt velit aliquip duis laborum est. Id eu ex qui velit duis cupidatat. Amet commodo voluptate pariatur et cupidatat eiusmod incididunt eiusmod proident ut ullamco esse. Anim ullamco sunt eu fugiat id.
### Left Float
{{< image src="https://placehold.co/100" alt="Gambar Left" align="left" >}}
Cillum culpa do sint consequat amet culpa et quis eiusmod in irure. Elit excepteur occaecat enim cupidatat magna ex fugiat aute fugiat occaecat dolor velit anim. Aute tempor et cupidatat nostrud sunt nulla dolor eiusmod esse culpa aliqua elit dolor aute. Do mollit aute voluptate Lorem incididunt. Sit nostrud eu veniam enim proident esse eiusmod reprehenderit dolor mollit.
### Right Float
{{< image src="https://placehold.co/100" alt="Gambar Right" align="right" >}}
Ipsum ea magna id pariatur quis cillum. Quis id do ea amet reprehenderit amet velit voluptate adipisicing eu deserunt voluptate nisi proident. Qui dolore tempor velit non anim est occaecat cillum. Elit id esse consequat commodo.Tempor pariatur consectetur ipsum excepteur non pariatur esse proident officia ea enim officia voluptate commodo. In proident pariatur aliquip dolor consequat do irure laborum laboris nulla. Cillum dolor pariatur eiusmod ex ullamco duis incididunt. Duis nulla ipsum in deserunt duis enim. Commodo cillum ut do consectetur.
### Full Float
{{< image src="https://placehold.co/100" alt="Gambar Full" align="full" >}}
Ipsum ea magna id pariatur quis cillum. Quis id do ea amet reprehenderit amet velit voluptate adipisicing eu deserunt voluptate nisi proident. Qui dolore tempor velit non anim est occaecat cillum. Elit id esse consequat commodo.Tempor pariatur consectetur ipsum excepteur non pariatur esse proident officia ea enim officia voluptate commodo. In proident pariatur aliquip dolor consequat do irure laborum laboris nulla. Cillum dolor pariatur eiusmod ex ullamco duis incididunt. Duis nulla ipsum in deserunt duis enim. Commodo cillum ut do consectetur.

---
## Definition List

Markdown ekstensi seperti Hugo mungkin mendukung daftar definisi:

Apple
: Pomaceous fruit of plants of the genus Malus in the family Rosaceae.

Orange
: The fruit of an evergreen tree of the genus Citrus.

---

## Kesimpulan

Dengan menggunakan artikel ini, Anda dapat menguji berbagai sintaks Markdown yang didukung oleh Hugo.