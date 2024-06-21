## Fraser Lab Alumni
{% assign sorted = site.members | sort: "enddate" | reverse %}
{% for member in sorted %}

{% if member.enddate == empty or member.startdate.size != member.enddate.size %}
{% continue %}
{% endif %}

{% assign position = member.position | downcase %}
{% if position contains "srtp" or position contains "intern" or position 
  contains "sep" or position contains "visiting"
  or position contains "high school" %}
{% unless position contains "affiliate" %}
{% continue %}
{% endunless %}
{% endif %}

<hr>
<div id = "{{member.name}}" style="padding-top: 60px; margin-top: -60px;">
<p><strong>{{member.name}}</strong><br>
<em>{{member.position | markdownify | remove: '<p>' | remove: '</p>' }}</em><br>

{% if member.pronouns %}
<em>{{member.pronouns}}</em> <br>
{% endif %}

{% assign start = member.startdate | first | date:"%Y" %}
{% assign end = member.enddate | last | date:"%Y" %}

{% if start == end %}
{{ start }}<br>
{% else %}
{{ start }} - {{ end }}<br>
{% endif %}

{% if member.subsequent %}
Subsequently: {{member.subsequent}} <br>
{% endif %}

{% if member.email %}
{% unless member.email contains "ucsf.edu" or "fraserlab" %}
<em>{{member.email}}</em> <br>
{% endunless %}
{% endif %}

{% if member.website %}
<a style="overflow-wrap: break-word;" href= "{{member.website}}">{{member.website}}</a> <br>
{% endif %}

{% if member.orcid %}
<a href="http://orcid.org"><img class="inline-block mem-icon" src="/static/img/logo/orcid_logo.svg"></a>
<a href="http://orcid.org/{{member.orcid}}"> {{member.orcid}}</a> <br>
{% endif %}

{% if member.linkedin %}
<a href="http://www.linkedin.com"><img class="inline-block mem-icon" src="/static/img/logo/linkedin_logo.svg"></a>
<a href= "http://www.linkedin.com/in/{{member.linkedin}}"> {{member.linkedin}} </a> <br>
{% endif %}

{% if member.scholar %}
<a href="http://scholar.google.com"><img class="inline-block mem-icon" src="/static/img/logo/gscholar_logo.svg"></a>
<a href= "http://scholar.google.com/citations?user={{member.scholar}}"> {% if member.timeline_name %}{{ member.timeline_name }}{% else %}{{ member.name | split: " " | first }}{% endif %}'s Citations </a> <br>
{% endif %}

{% if member.twitter %}
<a href="http://twitter.com"><img class="inline-block mem-icon" src="/static/img/logo/twitter_logo.svg"></a>
<a href= "http://twitter.com/{{member.twitter}}"> @{{member.twitter}} </a> <br>
{% endif %}

{% if member.github %}
<a href="http://github.com"><img class="inline-bloc mem-icon" src="/static/img/logo/github_logo.svg"></a>
<a href= "http://github.com/{{member.github}}"> {{member.github}} </a> <br>
{% endif %}
</p>
</div>
{% endfor %}

<br>
## Undergraduate Interns
{% for undergraduate in sorted %}

{% assign position = undergraduate.position | downcase %}

{% unless position contains "srtp" or position contains "intern" %}
    {% continue %}
{% endunless %}
{% if position contains "affiliate"%}
    {% continue %}
{% endif %}

<hr>
<div id = "{{undergraduate.name}}" style="padding-top: 60px; margin-top: -60px;">
<p><strong>{{undergraduate.name}}</strong> - <em>{{undergraduate.position | markdownify | remove: '<p>' | remove: '</p>' }}</em><br>

{% if undergraduate.pronouns %}
<em>{{undergraduate.pronouns}}</em><br>
{% endif %}

{% assign start = undergraduate.startdate | first | date:"%Y" %}
{% assign end = undergraduate.enddate | last | date:"%Y" %}

{% if start == end %}
{{ start }}<br>
{% else %}
{{ start }} - {{ end }}<br>
{% endif %}

{% if undergraduate.subsequent %}
Subsequently: {{undergraduate.subsequent}}<br>
{% endif %}
</p>
</div> {% endfor %}


<br>
## [High School Interns](http://sep.ucsf.edu/hs_programs/high-school-intern-program/)
{% for student in sorted %}

{% assign position = student.position | downcase %}
{% unless position contains "sep" or position contains "high school"%}
{% continue %}
{% endunless %}

<hr>
<div id = "{{student.name}}" style="padding-top: 60px; margin-top: -60px;">
<p><strong>{{student.name}}</strong><br>

{% assign start = student.startdate | first | date:"%Y" %}
{% assign end = student.enddate | last | date:"%Y" %}

{% if start == end %}
{{ start }}<br>
{% else %}
{{ start }} - {{ end }}<br>
{% endif %}

{% if student.pronouns %}
<em>{{student.pronouns}}</em> <br>
{% endif %}
{% if student.subsequent %}
Subsequently: {{student.subsequent}}<br>
{% endif %}
</p>
</div> {% endfor %}


<br>
## Fraser Lab Visitors
{% for visitor in sorted %}

{% assign position = visitor.position | downcase %}
{% unless position contains "visiting" %}
{% continue %}
{% endunless %}

<hr>
<div id = "{{visitor.name}}" style="padding-top: 60px; margin-top: -60px;">
{% if visitor.current %}
<p><strong>{{visitor.name}}</strong> - <em>{{visitor.position | markdownify | remove: '<p>' | remove: '</p>' }} from {{visitor.current}}</em><br>
{% else  %}
<p><strong>{{visitor.name}}</strong> - <em>{{visitor.position | markdownify | remove: '<p>' | remove: '</p>' }}</em><br>
{% endif %}

{% assign start = visitor.startdate | first | date:"%Y" %}
{% assign end = visitor.enddate | last | date:"%Y" %}

{% if end %}
{% if start == end %}
{{ start }}<br>
{% else %}
{{ start }} - {{ end }}<br>
{% endif %}
{% else %}
{{ start }} - Present<br>
{% endif %}

{% if visitor.pronouns %}
<em>{{visitor.pronouns}}</em> <br>
{% endif %}
</p>
</div> {% endfor %}
