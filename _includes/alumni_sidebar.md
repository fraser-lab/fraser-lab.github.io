<!-- ---
title: Alumni Sidebar
---
 -->
## Fraser Lab Alumni

---

{% for alum in site.data.alumni %}
**{{alum.name}}** - *{{alum.position}}*

{{alum.startdate}} - {{alum.enddate}}

Currently: {{alum.current}}

---

{% endfor %}