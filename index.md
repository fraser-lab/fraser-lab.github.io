---
title: CGLab
layout: default
---

<section class="hero">
<div class="container">
<div class="hero-inner">
<div class="hero-content">
<h1>Comparative Genomics Lab @ IMBB-FORTH</h1>
<p class="hero-intro">
<a href="https://www.imbb.forth.gr/en/research/Alexandros-Pittis.62/" target="_blank">CGLab</a>
is based at the Institute of Molecular Biology and Biotechnology of the Foundation for Research and Technology Hellas
(<a href="https://www.imbb.forth.gr/" target="_blank">IMBB-FORTH</a>) in Heraklion, Crete. We are part of the
<a href="https://www.imbb.forth.gr/en/research/lab-Evolution-Development-Cell-Biology.4/" target="_blank">Evolution, Development & Cell Biology</a> division.
</p>
</div>
<div class="hero-figure">
<img src="/static/img/logo/4squares.png" alt="Comparative Genomics" onerror="this.style.display='none'; this.parentElement.innerHTML='Add image:<br>/static/img/logo/<br>4squares.png';">
</div>
</div>
</div>
</section>

<section id="research">
<div class="container">
<h2 class="section-title">Research</h2>

<p class="research-intro">
Our research is focused on <strong>computational biology</strong>, <strong>comparative genomics</strong> and <strong>single-cell/nucleus transcriptomics</strong> methods to address questions on <strong>sequence</strong> and <strong>functional diversity</strong>, <strong>genome</strong>, <strong>protein/gene family</strong>, and <strong>cellular evolution</strong>.
</p>

<div class="research-areas">
<div class="research-area">
<h3>Comparative Genomics</h3>
<p>Analyzing genome sequences across the tree of life to uncover evolutionary patterns and genomic innovations.</p>
</div>
<div class="research-area">
<h3>Gene Family Evolution</h3>
<p>Tracing the ancestry and diversification of gene families to understand how molecular functions emerged and evolved.</p>
</div>
<div class="research-area">
<h3>Single-Cell Transcriptomics</h3>
<p>Applying single-cell and single-nucleus RNA sequencing to characterize cellular diversity and evolution.</p>
</div>
<div class="research-area">
<h3>Computational Methods</h3>
<p>Developing bioinformatics pipelines to extract evolutionary insights from large-scale datasets.</p>
</div>
</div>

<a href="/research" class="section-link">More about our research →</a>
</div>
</section>

<section id="members">
<div class="container">
<h2 class="section-title">Members</h2>

<div class="members-grid">
{% assign current_members = site.members | where_exp: "m", "m.enddate == nil" | sort: "startdate" %}
{% for member in current_members %}
<div class="member">
<div class="member-photo">
{% if member.image %}
<img src="{{ member.image }}" alt="{{ member.name }}" class="main-img">
{% if member.altimage %}
<img src="{{ member.altimage }}" alt="" class="alt-img">
{% endif %}
{% else %}
<div class="member-photo-placeholder">{{ member.name | slice: 0 }}{{ member.name | split: ' ' | last | slice: 0 }}</div>
{% endif %}
</div>
<div class="member-name"><a href="{{ member.url }}">{{ member.name }}</a></div>
<div class="member-position">{{ member.position }}</div>
{% if member.email %}
<div class="member-email-inline">{{ member.email }}</div>
{% endif %}
<div class="member-links">
{% if member.orcid %}<a href="https://orcid.org/{{ member.orcid }}" target="_blank" class="icon-link" title="ORCID"><svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/></svg></a>{% endif %}
{% if member.scholar %}<a href="https://scholar.google.com/citations?user={{ member.scholar }}" target="_blank" class="icon-link" title="Google Scholar"><svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/></svg></a>{% endif %}
{% if member.github %}<a href="https://github.com/{{ member.github }}" target="_blank" class="icon-link" title="GitHub"><svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg></a>{% endif %}
</div>
</div>
{% endfor %}
</div>

{% assign alumni = site.alumni | sort: "enddate" | reverse %}
{% if alumni.size > 0 %}
<div class="alumni-section">
<h3 class="alumni-title">Alumni</h3>
<div class="alumni-list">
{% for alum in alumni %}
<div class="alumni-item">
<a href="{{ alum.url }}">{{ alum.name }}</a>
<span class="alumni-position">({{ alum.position }}, {{ alum.startdate | date: "%Y" }}–{{ alum.enddate | date: "%Y" }})</span>
{% if alum.subsequent %}
<span class="alumni-now">→ now {{ alum.subsequent }}</span>
{% endif %}
</div>
{% endfor %}
</div>
</div>
{% endif %}

<a href="/members" class="section-link">All members →</a>
</div>
</section>

<section id="join">
<div class="container">
<h2 class="section-title">Join</h2>

<div class="join-content">
<p>
We are always interested in motivated people at all career stages who share our interest in evolutionary and computational approaches.
</p>

<p>
If interested contact <a href="#contact">Alexandros Pittis</a> with a short CV and research interests.
</p>
</div>

<a href="/join" class="section-link">More information →</a>
</div>
</section>

<section id="publications">
<div class="container">
<h2 class="section-title">Publications</h2>

<p class="publications-intro">
Our lab opened in 2024. For publications by lab members, see
<a href="https://scholar.google.com/citations?user=YbX4E3cAAAAJ" target="_blank">Google Scholar</a>.
</p>

</div>
</section>

<section id="news">
<div class="container">
<h2 class="section-title">News</h2>

{% for post in site.posts limit:3 %}
<div class="news-item">
<div class="news-date">{{ post.date | date: "%B %Y" }}</div>
<div class="news-title"><a href="{{ post.url }}">{{ post.title }}</a></div>
</div>
{% endfor %}

<a href="/news" class="section-link">All news →</a>
</div>
</section>

<section id="contact">
<div class="container">
<h2 class="section-title">Contact</h2>

<div class="contact-grid">
<div class="contact-blocks">
<div class="contact-block">
<h3>Alexandros Pittis</h3>
<p>
Group Leader · IMBB-FORTH<br>
alexandros.pittis [at] gmail.com<br>
alexandros.pittis [at] imbb.forth.gr<br>
+30 2810 391024
</p>

<div class="profile-links">
<a href="https://orcid.org/0000-0003-4116-9972" target="_blank" class="icon-link" title="ORCID"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/></svg> ORCID</a>
<a href="https://scholar.google.com/citations?user=YbX4E3cAAAAJ" target="_blank" class="icon-link" title="Google Scholar"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/></svg> Scholar</a>
<a href="https://github.com/cgenomicslab" target="_blank" class="icon-link" title="GitHub"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg> GitHub</a>
</div>
</div>
<div class="contact-block">
<h3>Address</h3>
<p>
Main Building, FORTH<br>
N. Plastira 100, Vassilika Vouton<br>
70013 Heraklion, Crete
</p>
</div>
</div>

<div class="contact-map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.980555435395!2d25.069276075546192!3d35.30462035057078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a570027ec31bd%3A0xaaccc8115f93751f!2sComparative%20Genomics%20Lab%20%40%20IMBB-FORTH!5e1!3m2!1sen!2sgr!4v1769297448751!5m2!1sen!2sgr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<a href="https://maps.app.goo.gl/zGpFGo7fDnC1gNFm7" target="_blank" class="map-link">Open in Google Maps ↗</a>
</div>
</div>
</div>
</section>
