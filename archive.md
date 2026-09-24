---
layout: page
title: 归档
permalink: /archive/
---
<ul class="archive-list">
  {% for post in site.posts %}
    {% capture year %}{{ post.date | date: "%Y" }}{% endcapture %}
    {% if year != lastYear %}
      <h2 class="archive-year">{{ year }}</h2>
      {% assign lastYear = year %}
    {% endif %}
    <li>
      <span class="archive-date">{{ post.date | date: "%m-%d" }}</span>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
