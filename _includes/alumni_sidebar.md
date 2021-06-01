### Fraser Lab Alumni
{% assign sorted = (site.alumni | sort: "enddate") | reverse %}
{% for member in sorted %}
<hr>
<div id = "{{member.name}}" style="padding-top: 60px; margin-top: -60px;">
<p><strong>{{member.name}}</strong> - <em>{{member.position}}</em><br>
{% if member.startdate %} {{member.startdate | date:"%Y"}} - {% endif %}{{member.enddate | date:"%Y"}} <br>
Subsequently: {{member.subsequent}} <br>
{% if member.pronouns %}
<em>{{member.pronouns}}</em> <br>
{% endif %}
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
{% for undergrad in ugr_sorted %}
<hr>
<div id = "{{undergrad.name}}" style="padding-top: 60px; margin-top: -60px;">
<p><strong>{{undergrad.name}}</strong><br>
{% if undergrad.startdate %} {{undergrad.startdate | date:"%Y"}} - {% endif %}{{undergrad.enddate | date:"%Y"}} <br>
{% if undergrad.subsequent %}
Subsequently: {{undergrad.subsequent}}<br>
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
{% if student.startdate %} {{student.startdate | date:"%Y"}} - {% endif %}{{student.enddate | date:"%Y"}} <br>
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
{% if visitor.startdate %} {{visitor.startdate | date:"%Y"}} - {% endif %}{{visitor.enddate | date:"%Y"}}
</p>
</div> {% endfor %}
