---
title: Fraser Lab Compact, Philosophy, and Resources
layout: default
group: philosophy
---

{% include carousel.html height="40" unit="%" duration="5" filter="img/members/drawings/members/" controlposition="90%" indicatorposition="90%" %}

# Lab Compact, Philosophy, and Resources

{% for item in site.data.philosophy %}
{% if item.id == "overview" %}
## <a id="{{item.id}}"></a>{{item.title}}

{{item.body}}

---

## Table of Contents

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
{% else %}
## <a id="{{item.id}}"></a>{{item.title}}

{{item.body}}

---
{% endif %}
{% endfor %}

<script src="/static/js/philosophy.js"></script>
