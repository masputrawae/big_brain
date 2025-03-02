---
title: Panduan dasar PHP dan MYSQL
date: 2024-12-06T23:43:42+07:00
last_modified: 2024-12-06T23:43:42+07:00
description: Panduan dasar menghubungkan PHP dengan MySQL, menampilkan dan menyimpan data ke dalam database.
excerpt: Artikel ini memberikan panduan langkah demi langkah untuk menghubungkan PHP dengan MySQL, menampilkan data dari database, dan menyimpan data melalui form HTML.
categories:
  - PHP
  - Backend
  - MySQL
tags:
  - php
  - apache
  - backend
  - belajar_programming
  - database
  - html
  - phpmyadmin
  - programming
  - web_development
  - web_server
  - server
thumbnail: 
pinned: false
draft: false
mathjax: false
---
Panduan ini menjelaskan dasar-dasar untuk menghubungkan PHP ke MySQL, menampilkan data, serta menambah data ke dalam database. Baca dan simpan sebagai cheat sheet Anda!

## Koneksi ke Database (`koneksi.php`)

Untuk menghubungkan PHP dengan MySQL, kita harus membuat **koneksi ke database**. Berikut adalah contoh kode untuk membuat koneksi:

```php
<?php
$servername = "localhost";  // Nama server (biasanya localhost)
$username = "root";         // Nama pengguna untuk login ke MySQL
$password = "";             // Password untuk login ke MySQL (kosong jika belum diubah)
$dbname = "web_project";    // Nama database yang akan digunakan

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Cek apakah koneksi berhasil
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);  // Jika gagal, tampilkan pesan error
}
?>
```

### Penjelasan:
- `$servername`: Nama server, biasanya `localhost`.
- `$username` dan `$password`: Kredensial untuk login ke MySQL.
- `$dbname`: Nama database yang akan digunakan.
- `$conn->connect_error`: Mengecek apakah terjadi kesalahan saat mencoba menghubungkan ke database.

---

## Menampilkan Data dari Database (`tampil.php`)

Setelah terkoneksi, kita bisa **menampilkan data** dari database menggunakan query SQL `SELECT`.

```php
<?php
include 'koneksi.php';  // Sertakan file koneksi

$sql = "SELECT * FROM posts";  // Ambil semua data dari tabel 'posts'
$result = $conn->query($sql);  // Jalankan query

// Cek apakah ada data yang ditemukan
if ($result->num_rows > 0) {
    // Jika ada data, tampilkan satu per satu
    while($row = $result->fetch_assoc()) {
        echo "<h2>" . $row["title"] . "</h2>";   // Menampilkan judul
        echo "<p>" . $row["content"] . "</p>";   // Menampilkan konten
        echo "<hr>";  // Garis pembatas antar post
    }
} else {
    echo "Tidak ada postingan.";  // Jika tidak ada data, tampilkan pesan ini
}

$conn->close();  // Tutup koneksi
?>
```

### Penjelasan:
- `$sql`: Query untuk mengambil semua data dari tabel `posts`.
- `$result->num_rows > 0`: Mengecek apakah ada data yang ditemukan.
- `$row = $result->fetch_assoc()`: Mengambil satu baris data dari hasil query.
- `$row["title"]` dan `$row["content"]`: Mengakses kolom `title` dan `content` dari setiap post.
- `$conn->close()`: Menutup koneksi ke database setelah selesai.

---

## Form untuk Menambah Postingan (`form.php`)

Form ini memungkinkan pengguna untuk **mengirimkan data** (judul dan konten) ke server. Data ini akan diproses di PHP.

```html
<form action="tambah_post.php" method="POST">
    <label for="title">Judul:</label>
    <input type="text" name="title" id="title" required><br>

    <label for="content">Konten:</label>
    <textarea name="content" id="content" required></textarea><br>

    <button type="submit">Tambah Post</button>
</form>
```

### Penjelasan:
- `action="tambah_post.php"`: Mengirim data ke file PHP `tambah_post.php` untuk diproses.
- `method="POST"`: Menggunakan metode POST untuk mengirim data.
- `<input>` dan `<textarea>`: Menyediakan tempat bagi pengguna untuk memasukkan judul dan konten.
- `required`: Memastikan bahwa kedua field harus diisi sebelum form dapat disubmit.

---

## PHP untuk Menyimpan Data (`tambah_post.php`)

Setelah form disubmit, data dikirim ke PHP dan disimpan di dalam database.

```php
<?php
include 'koneksi.php';  // Sertakan file koneksi

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = $_POST['title'];  // Ambil data judul dari form
    $content = $_POST['content'];  // Ambil data konten dari form

    // Query untuk menyimpan data ke dalam tabel 'posts'
    $sql = "INSERT INTO posts (title, content) VALUES ('$title', '$content')";

    if ($conn->query($sql) === TRUE) {
        echo "Post berhasil ditambahkan!";  // Jika sukses
        header("Location: tampil.php");  // Redirect ke halaman tampil.php
        exit();  // Menghentikan eksekusi lebih lanjut
    } else {
        echo "Error: " . $conn->error;  // Jika ada error
    }
}

$conn->close();  // Tutup koneksi
?>
```

### Penjelasan:
- `$_SERVER["REQUEST_METHOD"] == "POST"`: Mengecek apakah form disubmit dengan method POST.
- `$title = $_POST['title']` dan `$content = $_POST['content']`: Mengambil data yang dikirim dari form.
- `$sql`: Query untuk menyimpan data ke dalam tabel `posts`.
- `$conn->query($sql)`: Menjalankan query untuk menyimpan data. Jika berhasil, halaman akan diarahkan ke `tampil.php`.
- `header("Location: tampil.php")`: Mengarahkan pengguna ke halaman `tampil.php` setelah data berhasil disimpan.
- `$conn->close()`: Menutup koneksi ke database setelah selesai.

---

## Ringkasan

- **Koneksi ke Database**: Gunakan `new mysqli()` untuk menghubungkan PHP ke MySQL.
- **Menampilkan Data**: Gunakan query SQL `SELECT` dan `fetch_assoc()` untuk menampilkan data.
- **Form HTML**: Gunakan `<form>` untuk mengirimkan data ke PHP.
- **PHP untuk Menyimpan Data**: Gunakan query `INSERT INTO` untuk menyimpan data yang dikirim melalui form.

---

## Tips Tambahan

1. **Keamanan**: Selalu gunakan prepared statements untuk mencegah serangan SQL injection.
2. **Validasi Data**: Validasi data yang dikirim dari form sebelum menyimpannya ke database.
3. **Error Handling**: Tambahkan penanganan error yang lebih baik untuk memudahkan debugging.

---

Dengan mengikuti panduan ini, Anda dapat dengan mudah menghubungkan PHP dengan MySQL, menampilkan data, dan menyimpan data ke dalam database. Selamat mencoba!