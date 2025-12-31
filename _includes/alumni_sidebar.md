## Fraser Lab Alumni
{% comment %}
Create an array of members with their final enddate for proper sorting.
For members with multiple enddates (arrays), we use the last enddate.
This ensures alumni are sorted by their most recent end date.
{% endcomment %}
{% assign members_with_final_date = "" | split: "" %}
{% for member in site.members %}
  {% if member.enddate != empty and member.startdate.size == member.enddate.size %}
    {% assign final_enddate = member.enddate | last %}
    {% assign enddate_seconds = final_enddate | date: "%s" %}
    {% assign now_seconds = "now" | date: "%s" %}
    {% if enddate_seconds < now_seconds %}
      {% assign position = member.position | downcase %}
      {% unless position contains "srtp" or position contains "intern" or position contains "sep" or position contains "visiting" or position contains "high school" %}
        {% assign member_with_date = final_enddate | append: "|" | append: forloop.index0 %}
        {% assign members_with_final_date = members_with_final_date | push: member_with_date %}
      {% else %}
        {% if position contains "affiliate" %}
          {% assign member_with_date = final_enddate | append: "|" | append: forloop.index0 %}
          {% assign members_with_final_date = members_with_final_date | push: member_with_date %}
        {% endif %}
      {% endunless %}
    {% endif %}
  {% endif %}
{% endfor %}

{% assign sorted_members = members_with_final_date | sort | reverse %}
{% for member_entry in sorted_members %}
  {% assign member_parts = member_entry | split: "|" %}
  {% assign member_index = member_parts[1] | plus: 0 %}
  {% assign member = site.members[member_index] %}
  {% assign last_enddate = member.enddate | last %}

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
{% comment %}Sort undergraduate interns by final enddate{% endcomment %}
{% assign undergrads_with_final_date = "" | split: "" %}
{% for undergraduate in site.members %}
  {% if undergraduate.enddate != empty and undergraduate.startdate.size == undergraduate.enddate.size %}
    {% assign final_enddate = undergraduate.enddate | last %}
    {% assign position = undergraduate.position | downcase %}
    {% if position contains "srtp" or position contains "intern" %}
      {% unless position contains "affiliate" %}
        {% assign member_with_date = final_enddate | append: "|" | append: forloop.index0 %}
        {% assign undergrads_with_final_date = undergrads_with_final_date | push: member_with_date %}
      {% endunless %}
    {% endif %}
  {% endif %}
{% endfor %}

{% assign sorted_undergrads = undergrads_with_final_date | sort | reverse %}
{% for undergrad_entry in sorted_undergrads %}
  {% assign undergrad_parts = undergrad_entry | split: "|" %}
  {% assign undergrad_index = undergrad_parts[1] | plus: 0 %}
  {% assign undergraduate = site.members[undergrad_index] %}

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
{% comment %}Sort high school interns by final enddate{% endcomment %}
{% assign students_with_final_date = "" | split: "" %}
{% for student in site.members %}
  {% if student.enddate != empty and student.startdate.size == student.enddate.size %}
    {% assign final_enddate = student.enddate | last %}
    {% assign position = student.position | downcase %}
    {% if position contains "sep" or position contains "high school" %}
      {% assign member_with_date = final_enddate | append: "|" | append: forloop.index0 %}
      {% assign students_with_final_date = students_with_final_date | push: member_with_date %}
    {% endif %}
  {% endif %}
{% endfor %}

{% assign sorted_students = students_with_final_date | sort | reverse %}
{% for student_entry in sorted_students %}
  {% assign student_parts = student_entry | split: "|" %}
  {% assign student_index = student_parts[1] | plus: 0 %}
  {% assign student = site.members[student_index] %}

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
{% comment %}Sort visitors by final enddate{% endcomment %}
{% assign visitors_with_final_date = "" | split: "" %}
{% for visitor in site.members %}
  {% if visitor.enddate != empty and visitor.startdate.size == visitor.enddate.size %}
    {% assign final_enddate = visitor.enddate | last %}
    {% assign position = visitor.position | downcase %}
    {% if position contains "visiting" %}
      {% assign member_with_date = final_enddate | append: "|" | append: forloop.index0 %}
      {% assign visitors_with_final_date = visitors_with_final_date | push: member_with_date %}
    {% endif %}
  {% endif %}
{% endfor %}

{% assign sorted_visitors = visitors_with_final_date | sort | reverse %}
{% for visitor_entry in sorted_visitors %}
  {% assign visitor_parts = visitor_entry | split: "|" %}
  {% assign visitor_index = visitor_parts[1] | plus: 0 %}
  {% assign visitor = site.members[visitor_index] %}

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
