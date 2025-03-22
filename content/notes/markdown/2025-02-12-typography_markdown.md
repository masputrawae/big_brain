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

## JavaScript Example
```javascript
// Contoh kode JavaScript
function greet(name) {
    return `Hello, ${name}!`;
}

const user = "John";
console.log(greet(user));
```

## Python Example
```python
# Contoh kode Python
def greet(name):
    return f"Hello, {name}!"

user = "John"
print(greet(user))
```

## HTML Example
```html
<!-- Contoh kode HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a test page for syntax highlighting.</p>
</body>
</html>
```

```python
import threading
import time
import random
from functools import wraps

# Decorator untuk mengukur waktu eksekusi fungsi
def timing_decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"Function {func.__name__} executed in {end_time - start_time:.4f} seconds")
        return result
    return wrapper

# Kelas utama untuk simulasi sistem antrian
class TaskQueue:
    def __init__(self):
        self.queue = []
        self.lock = threading.Lock()
    
    def add_task(self, task):
        with self.lock:
            self.queue.append(task)
            print(f"Task {task} added to queue")
    
    def process_tasks(self):
        while self.queue:
            with self.lock:
                task = self.queue.pop(0)
            print(f"Processing task {task}")
            time.sleep(random.uniform(0.5, 2))  # Simulasi proses
            print(f"Task {task} completed")

# Fungsi untuk menjalankan thread worker
@timing_decorator
def run_task_queue():
    queue = TaskQueue()
    
    # Menambahkan tugas ke antrian
    for i in range(5):
        queue.add_task(f"Task-{i}")
    
    # Membuat thread untuk memproses antrian
    worker = threading.Thread(target=queue.process_tasks)
    worker.start()
    worker.join()

if __name__ == "__main__":
    run_task_queue()
```

```php
<?php
class TaskQueue {
    private array $queue = [];
    private object $lock;

    public function __construct() {
        $this->lock = fopen(__FILE__, 'r');
    }

    public function addTask(string $task): void {
        flock($this->lock, LOCK_EX);
        $this->queue[] = $task;
        echo "Task $task added to queue\n";
        flock($this->lock, LOCK_UN);
    }

    public function processTasks(): void {
        while (!empty($this->queue)) {
            flock($this->lock, LOCK_EX);
            $task = array_shift($this->queue);
            flock($this->lock, LOCK_UN);
            echo "Processing $task...\n";
            sleep(rand(1, 3)); // Simulasi proses
            echo "Task $task completed!\n";
        }
    }
}

function runTaskQueue() {
    $queue = new TaskQueue();
    
    // Menambahkan tugas ke antrian
    for ($i = 0; $i < 5; $i++) {
        $queue->addTask("Task-$i");
    }
    
    // Memproses tugas dalam antrian
    $queue->processTasks();
}

runTaskQueue();

```

```javascript
class TaskQueue {
    constructor() {
        this.queue = [];
    }

    addTask(task) {
        this.queue.push(task);
        console.log(`Task ${task} added to queue`);
    }

    async processTasks() {
        while (this.queue.length > 0) {
            const task = this.queue.shift();
            console.log(`Processing ${task}...`);
            await this.simulateProcessing();
            console.log(`Task ${task} completed!`);
        }
    }

    simulateProcessing() {
        return new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 500));
    }
}

async function runTaskQueue() {
    const queue = new TaskQueue();
    
    // Menambahkan tugas ke antrian
    for (let i = 0; i < 5; i++) {
        queue.addTask(`Task-${i}`);
    }
    
    // Memproses tugas dalam antrian
    await queue.processTasks();
}

runTaskQueue();
```