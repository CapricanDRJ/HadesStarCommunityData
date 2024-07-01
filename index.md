---
layout: default
title: Home
---

# Hades' Star Elo Rankings

Welcome to the Hades' Star Elo Rankings page. Here you can find the top corporations based on their Elo ratings.

## Scoreboards

<ul>
  {% for page in site.pages %}
    {% if page.path contains ".md" and page.path != "index.md" %}
      <li><a href="{{ page.url | relative_url }}">{{ page.title | escape }}</a></li>
    {% endif %}
  {% endfor %}
</ul>

## Resource Files

<ul>
  {% for file in site.static_files %}
    {% unless file.extname == ".md" %}
      <li><a href="{{ file.path | relative_url }}">{{ file.basename | capitalize }}</a></li>
    {% endunless %}
  {% endfor %}
</ul>
