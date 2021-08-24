{% assign sorted = (site.members | sort: "enddate") | reverse %}

## Fraser Lab Alumni
{% for member in sorted %}

{% unless member.enddate %}
{% continue %}
{% endunless %}

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

{% if member.subsequent %}
Subsequently: {{member.subsequent}} <br>
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
<a href="http://orcid.org"><img class="inline-block mem-icon" src="/static/img/logo/orcid_logo.svg"></a>
<a href="http://orcid.org/{{member.orcid}}"> {{member.orcid}}</a> <br>
{% endif %}

{% if member.linkedin %}
<a href="http://www.linkedin.com"><img class="inline-block mem-icon" src="/static/img/logo/linkedin_logo.svg"></a>
<a href= "http://www.linkedin.com/in/{{member.linkedin}}"> {{member.linkedin}} </a> <br>
{% endif %}

{% if member.scholar %}
<a href="http://scholar.google.com"><img class="inline-block mem-icon" src="/static/img/logo/gscholar_logo.svg"></a>
<a href= "http://scholar.google.com/citations?user={{member.scholar}}"> Scholar Citations </a> <br>
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
