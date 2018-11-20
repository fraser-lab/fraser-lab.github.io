
## Fraser Lab Alumni


{% for alum in site.data.alumni %}
<hr>
<div id = "{{alum.name}}" style="padding-top: 60px; margin-top: -60px;">
<p><strong>{{alum.name}}</strong> - <em>{{alum.position}}</em><br>
{% if alum.startdate %} {{alum.startdate}} - {% endif %}{{alum.enddate}} <br>
Currently: {{alum.current}} </p>
</div> {% endfor %}


## Fraser Lab Visitors


{% for visitor in site.data.visitors %}
<hr>
<div id = "{{visitor.name}}" style="padding-top: 60px; margin-top: -60px;">
<p><strong>{{visitor.name}}</strong> - <em>{{visitor.position}}</em><br>
{% if visitor.startdate %} {{visitor.startdate}} - {% endif %}{{visitor.enddate}} <br>
Currently: {{visitor.current}} </p>
</div> {% endfor %}

---