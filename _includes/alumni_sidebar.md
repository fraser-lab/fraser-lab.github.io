<!-- ---
title: Alumni Sidebar
---
 -->
## Fraser Lab Alumni

---

{% for alum in site.data.alumni %}
**{{alum.name}}** - *{{alum.position}}*

{% if alum.startdate %} {{alum.startdate}} - {% endif %}{{alum.enddate}}

Currently: {{alum.current}}

---

{% endfor %}