---
title: Fraser Lab Compact, Philosophy, and Resources
layout: default
group: philosophy
---

{% include carousel.html height="40" unit="%" duration="5" filter="img/carousel/" label="Fraser Lab group illustrations over the years" controlposition="90%" indicatorposition="90%" %}

# Lab Compact, Philosophy, and Resources

<div class="philosophy-layout" markdown="1">

<nav class="philosophy-sidebar" aria-label="Table of contents">
<p class="philosophy-sidebar__title">Contents</p>
<ul>
{% for toc_item in site.data.philosophy %}<li><a href="#{{toc_item.id}}">{{toc_item.title}}</a></li>
{% endfor %}</ul>
</nav>

<div class="philosophy-content" markdown="1">

{% for item in site.data.philosophy %}
{% if item.id == "overview" %}
## {{item.title}}
{: #{{item.id}} }

{{item.body}}

---

<div class="toc-mobile" markdown="1">

## Table of Contents
{: #table-of-contents }

<div class="toc-buttons">
{% for toc_item in site.data.philosophy %}{% unless toc_item.id == "overview" %}<a href="#{{toc_item.id}}" class="btn btn-sm btn-outline-primary toc-btn">{{toc_item.title}}</a>{% endunless %}{% endfor %}
</div>

<style>
.toc-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
}
.toc-buttons .btn {
  white-space: nowrap;
}
.toc-buttons .btn:hover {
  background-color: #052049;
  color: white;
  border-color: #052049;
}
</style>

---

</div>
{% else %}
## {{item.title}}
{: #{{item.id}} }

{{item.body}}

---
{% endif %}
{% endfor %}

</div>
</div>

<style>
/* Below 992px there is no room beside the text, so the button TOC above stays
   and the sidebar is hidden. At 992px and up the sidebar replaces it. */
.philosophy-sidebar { display: none; }
@media (min-width: 992px) {
  .philosophy-layout {
    display: grid;
    grid-template-columns: 230px minmax(0, 1fr);
    gap: 2rem;
    align-items: start;
  }
  .philosophy-sidebar {
    display: block;
    position: sticky;
    top: 1rem;
    max-height: calc(100vh - 2rem);
    overflow-y: auto;
    padding-right: 0.5rem;
    border-right: 1px solid #dee2e6;
    font-size: 0.9rem;
  }
  .toc-mobile { display: none; }
}
.philosophy-sidebar__title {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
  color: #6c757d;
  margin-bottom: 0.5rem;
}
.philosophy-sidebar ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.philosophy-sidebar a {
  display: block;
  padding: 0.3rem 0.6rem;
  border-left: 3px solid transparent;
  color: #052049;
  line-height: 1.3;
}
.philosophy-sidebar a:hover,
.philosophy-sidebar a:focus {
  background-color: #f1f3f5;
  text-decoration: none;
}
.philosophy-sidebar > ul > li > a {
  font-weight: 500;
}
.philosophy-sidebar ul.philosophy-sidebar__sub {
  margin: 0.1rem 0 0.4rem 0.9rem;
  border-left: 1px solid #dee2e6;
}
.philosophy-sidebar__sub a {
  padding: 0.15rem 0.6rem;
  font-size: 0.8rem;
  font-weight: 400;
  color: #5a6470;
}
.philosophy-sidebar a[aria-current="true"] {
  border-left-color: #052049;
  background-color: #e9eef5;
  font-weight: 600;
}
</style>

<script src="/static/js/philosophy.js"></script>
