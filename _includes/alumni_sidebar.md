### Fraser Lab Alumni
{% assign sorted = (site.alumni | sort: "enddate") | reverse %}
{% for member in sorted %}
<hr>
<div id = "{{member.name}}" style="padding-top: 60px; margin-top: -60px;">
<p><strong>{{member.name}}</strong> - <em>{{member.position}}</em><br>

{% if member.pronouns %}
<em>{{member.pronouns}}</em> <br>
{% endif %}

{% assign start = member.startdate | date:"%Y" %}
{% assign end = member.enddate | date:"%Y" %}

{% if end == '' %}
{{member.startdate | date:"%Y"}}
{% endif %}

{% if start == end %}
{{member.startdate | date:"%Y"}}<br>
{% else %}
{{member.startdate | date:"%Y"}} - {{member.enddate | date:"%Y"}}<br>
{% endif %}

Subsequently: {{member.subsequent}} <br>

{% if member.email %}
{% unless member.email contains "ucsf.edu" %}
<em>{{member.email}}</em> <br>
{% endunless %}
{% endif %}

{% if member.website %}
<a style="overflow-wrap: break-word;" href= "{{member.website}}">{{member.website}}</a> <br>
{% endif %}

{% if member.orcid %}
<a href="http://orcid.org"><img class="inline-block mem-icon" src="/static/img/orcidid_logo.svg"></a>
<a href="http://orcid.org/{{member.orcid}}"> {{member.orcid}}</a> <br>
{% endif %}

{% if member.linkedin %}
<a href="http://www.linkedin.com"><img class="inline-block mem-icon" src="/static/img/lin_logo.svg"></a>
<a href= "http://www.linkedin.com/in/{{member.linkedin}}"> {{member.linkedin}} </a> <br>
{% endif %}

{% if member.scholar %}
<a href="http://scholar.google.com"><img class="inline-block mem-icon" src="/static/img/gscholar_logo.svg"></a>
<a href= "http://scholar.google.com/citations?user={{member.scholar}}"> Scholar Citations </a> <br>
{% endif %}

{% if member.twitter %}
<a href="http://twitter.com"><img class="inline-block mem-icon" src="/static/img/twitter2_logo.svg"></a>
<a href= "http://twitter.com/{{member.twitter}}"> @{{member.twitter}} </a> <br>
{% endif %}

{% if member.github %}
<a href="http://github.com"><img class="inline-bloc mem-icon" src="/static/img/github_logo.svg"></a>
<a href= "http://github.com/{{member.github}}"> {{member.github}} </a> <br>
{% endif %}
</p>
</div>
{% endfor %}

<br>
## Undergraduate Interns
{% assign ugr_sorted = (site.undergrads | sort: "enddate") | reverse %}
{% for undergraduate in ugr_sorted %}
<hr>
<div id = "{{undergraduate.name}}" style="padding-top: 60px; margin-top: -60px;">
<p><strong>{{undergraduate.name}}</strong> - <em>{{undergraduate.position}}</em><br>

{% if undergraduate.pronouns %}
<em>{{undergraduate.pronouns}}</em><br>
{% endif %}

{% assign start = undergraduate.startdate | date:"%Y" %}
{% assign end = undergraduate.enddate | date:"%Y" %}

{% if end == '' %}
{{undergraduate.startdate | date:"%Y"}}
{% endif %}

{% if start == end %}
{{undergraduate.startdate | date:"%Y"}}<br>
{% else %}
{{undergraduate.startdate | date:"%Y"}} - {{undergraduate.enddate | date:"%Y"}}<br>
{% endif %}

{% if undergraduate.subsequent %}
Subsequently: {{undergraduate.subsequent}}<br>
{% endif %}
</p>
</div> {% endfor %}


<br>
## [SEP High School Interns](http://sep.ucsf.edu/hs_programs/high-school-intern-program/)
{% assign sep_sorted = (site.sep | sort: "enddate") | reverse %}
{% for student in sep_sorted %}
<hr>
<div id = "{{student.name}}" style="padding-top: 60px; margin-top: -60px;">
<p><strong>{{student.name}}</strong><br>

{% assign start = student.startdate | date:"%Y" %}
{% assign end = student.enddate | date:"%Y" %}

{% if end == '' %}
{{student.startdate | date:"%Y"}}
{% endif %}

{% if start == end %}
{{student.startdate | date:"%Y"}}<br>
{% else %}
{{student.startdate | date:"%Y"}} - {{student.enddate | date:"%Y"}}<br>
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
{% assign visitor_sorted = (site.visitors | sort: "enddate") | reverse %}
{% for visitor in visitor_sorted %}
<hr>
<div id = "{{visitor.name}}" style="padding-top: 60px; margin-top: -60px;">
<p><strong>{{visitor.name}}</strong> - <em>{{visitor.position}} from {{visitor.current}}</em><br>

{% assign start = visitor.startdate | date:"%Y" %}
{% assign end = visitor.enddate | date:"%Y" %}

{% if end == '' %}
{{visitor.startdate | date:"%Y"}}
{% endif %}

{% if start == end %}
{{visitor.startdate | date:"%Y"}}<br>
{% else %}
{{visitor.startdate | date:"%Y"}} - {{visitor.enddate | date:"%Y"}}<br>
{% endif %}

{% if visitor.pronouns %}
<em>{{visitor.pronouns}}</em> <br>
{% endif %}
</p>
</div> {% endfor %}
