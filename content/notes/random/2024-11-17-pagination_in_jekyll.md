---
title: "Membuat Pagination Di Jekyll"
date: 2024-11-17T23:43:42+07:00
last_modified: 2024-11-17T23:43:42+07:00
description: "Cara membuat fitur paginasi di jekyll"
excerpt: "Hari ini tanggal 15 November 2024 aku sedang membuat fungsi paginasi untuk web ini, ya walaupun aku benar-benar tidak faham dengan kode nya, aku membuat dengan penuh kepercayaan diri dan ilmu copy paste yang selalu aku andalkan 😅, ya yang penting berjalan"
categories:
  - Web Development
  - Jekyll
tags:
  - jekyll
  - static_website
  - github_pages
  - simpel_pagination
  - pagination
  - web_development
thumbnail: 
pinned: false
draft: false
mathjax: false
---
Hari ini tanggal 15 November 2024 aku sedang membuat fungsi paginasi untuk web ini, ya walaupun aku benar-benar tidak faham dengan kode nya, aku membuat dengan penuh kepercayaan diri dan ilmu copy paste yang selalu aku andalkan 😅, ya yang penting berjalan. so jadi yang suka copas code langsung comot aja disini.

## Setting dulu `_config.yml` nya
Penting, jangan lupakan ini: 
```yml
paginate: 5
paginate_path: "/page:num/"
plugins:
  - jekyll-paginate
```
jangan tanya saya fungsinya untuk apa🤣 aku belum begitu faham, tapi jika anda ingin tahu lebih dalam bisa kunjungi dokumentasi jekyll di sini 
[Pagination | Jekyll • Simple, blog-aware, static sites](https://jekyllrb.com/docs/pagination/#:~:text=Enable%20pagination&text=html%20%2C%20send%20it%20each%20pagination,%2C%20blog%2Fpage2%2Findex.)
### Code Untuk index.html
aku kurang tahu juga, katanya hanya berlaku dan berfungsi di index.html, dan aku juga sudah coba di beberapa halaman tidak berfungsi, tapi ketika di taruh di index.html ini berfungsi, dan ya anda bisa lihat di menu utama halaman ini.
berikut ini kode yang bisa kalian gunakan:
```html
{% raw %}
<!-- Content Section -->
<div id="content">
    {% for post in paginator.posts %}
    <div>
        <h2><a href="{{ post.url | relative_url }}" aria-label="Read '{{ post.title }}'">
            {{ post.title }}
        </a></h2>
        <p><small>{{ post.date | date: "%d %B %Y" }}</small></p>
        <p>{{ post.excerpt | truncatewords: 30 }}</p>
        <a href="{{ post.url | relative_url }}">Read More</a>
    </div>
    <hr>
    {% endfor %}
</div>
<!-- Pagination Section -->
{% if paginator.total_pages > 1 %}
<nav>
    <ul>
        <!-- Previous Page Link -->
        <li {% if paginator.previous_page == null %}class="disabled"{% endif %}>
            {% if paginator.previous_page %}
            <a href="{{ paginator.previous_page_path | relative_url }}" aria-label="Previous">&laquo; Prev</a>
            {% else %}
            <span aria-hidden="true">&laquo; Prev</span>
            {% endif %}
        </li>
        <!-- Page Numbers -->
        {% for page in (1..paginator.total_pages) %}
        <li {% if page == paginator.page %}class="active"{% endif %}>
            {% if page == paginator.page %}
            <span>{{ page }}</span>
            {% elsif page == 1 %}
            <a href="{{ '/' | relative_url }}">{{ page }}</a>
            {% else %}
            <a href="{{ site.paginate_path | relative_url | replace: ':num', page }}">{{ page }}</a>
            {% endif %}
        </li>
        {% endfor %}
        <!-- Next Page Link -->
        <li {% if paginator.next_page == null %}class="disabled"{% endif %}>
            {% if paginator.next_page %}
            <a href="{{ paginator.next_page_path | relative_url }}" aria-label="Next">Next &raquo;</a>
            {% else %}
            <span aria-hidden="true">Next &raquo;</span>
            {% endif %}
        </li>
    </ul>
</nav>
{% endif %}
{% endraw %}
```