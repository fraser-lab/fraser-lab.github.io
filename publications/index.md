---
title: Publications
layout: default
group: publications
---

<div class="container">
<section style="padding: 2rem 0;">

<h1 class="section-title" style="font-size: 1.5rem; margin-bottom: 1rem;">Publications</h1>

<p class="publications-intro">
For a complete and up-to-date list, see <a href="https://scholar.google.com/citations?user=XXXXXXXX" target="_blank">Google Scholar</a>.
</p>

<h3 style="font-size: 1rem; margin: 2rem 0 1rem; color: #333;">Selected Publications</h3>

{% assign sorted_pubs = site.publications | sort: "year" | reverse %}
{% for pub in sorted_pubs %}
<div class="publication-item">
<div class="publication-year">{{ pub.year }}</div>
<div class="publication-title"><a href="{{ pub.link }}" target="_blank">{{ pub.title }}</a></div>
<div class="publication-authors">{{ pub.authors }}. <em>{{ pub.journal }}</em>.</div>
</div>
{% endfor %}

<a href="/" class="section-link">← Back to home</a>

</section>
</div>
