### Fraser Lab Alumni

{% for alum in site.alumni %}
<hr>
<div id = "{{alum.name}}" style="padding-top: 60px; margin-top: -60px;">
<p><strong>{{alum.name}}</strong> - <em>{{alum.position}}</em><br>
{% if alum.startdate %} {{alum.startdate | date:"%Y"}} - {% endif %}{{alum.enddate | date:"%Y"}} <br>
Subsequently: {{alum.subsequent}} </p>
</div>
{% endfor %}


<br>
## [SEP High School Interns](http://sep.ucsf.edu/hs_programs/high-school-intern-program/)
{% for student in site.sep %}
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
{% for visitor in site.visitors %}
<hr>
<div id = "{{visitor.name}}" style="padding-top: 60px; margin-top: -60px;">
<p><strong>{{visitor.name}}</strong> - <em>{{visitor.position}} from {{visitor.current}}</em><br>
{% if visitor.startdate %} {{visitor.startdate | date:"%Y"}} - {% endif %}{{visitor.enddate | date:"%Y"}}
</p>
</div> {% endfor %}
