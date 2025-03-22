---
title: 'Homepage'
date: 2023-01-01T08:00:00-07:00
intro: "Hello! I'm John."
subtitle: "A passionated Designer."
description: "Ipsum sint adipisicing sit cillum incididunt. Non laboris cupidatat minim exercitation ex ut tempor consequat velit minim."
draft: false
---
# Typography Examples

## Headings
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

## Paragraphs
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Lists
### Unordered List
- Item 1
- Item 2
- Item 3

### Ordered List
1. First item
2. Second item
3. Third item

## Blockquotes
> This is a blockquote. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.

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