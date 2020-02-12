
### Fraser Lab Alumni


{% for alum in site.data.alumni %}
<hr>
<div id = "{{alum.name}}" style="padding-top: 60px; margin-top: -60px;">
<p><strong>{{alum.name}}</strong> - <em>{{alum.position}}</em><br>
{% if alum.startdate %} {{alum.startdate}} - {% endif %}{{alum.enddate}} <br>
Subsequent Position: {{alum.current}} </p>
</div> {% endfor %}

<br>
## [SEP High School Interns](http://sep.ucsf.edu/hs_programs/high-school-intern-program/)


{% for sep in site.data.sep %}
<hr>
<div id = "{{sep.name}}" style="padding-top: 60px; margin-top: -60px;">
<p><strong>{{sep.name}}</strong><br>
{% if sep.startdate %} {{sep.startdate}} - {% endif %}{{sep.enddate}} <br>
{% if sep.current %}
Subsequent Position: {{sep.current}}<br>
{% endif %}
</p>
</div> {% endfor %}

<br>
## Fraser Lab Visitors


{% for visitor in site.data.visitors %}
<hr>
<div id = "{{visitor.name}}" style="padding-top: 60px; margin-top: -60px;">
<p><strong>{{visitor.name}}</strong> - <em>{{visitor.position}} from {{visitor.current}}</em><br>
{% if visitor.startdate %} {{visitor.startdate}} - {% endif %}{{visitor.enddate}}
</p>
</div> {% endfor %}
