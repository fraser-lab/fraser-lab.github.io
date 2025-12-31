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

{% for toc_item in site.data.philosophy %}
{% unless toc_item.id == "overview" %}
* [{{toc_item.title}}](#{{toc_item.id}})
{% endunless %}
{% endfor %}

---
{% else %}
## <a id="{{item.id}}"></a>{{item.title}}

{{item.body}}

---
{% endif %}
{% endfor %}

<script src="/static/js/philosophy.js"></script>
