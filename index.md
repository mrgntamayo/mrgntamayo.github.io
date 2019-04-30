---
layout: default
education:
  - school: Georgia State University
    time: May 2023
    degree: PhD, Moving Image Studies
  - school: Georgia State University
    time: 2019
    degree: MA, Anthropology
    thesis: "Necrotic Machines/Zombie Genders: Transfeminine Disruptions of Feminist Progress"
    advisor: Cassandra White
    committee: Jennifer Patico and Megan Sinnott
  - school: Georgia State University
    time: 2017
    degree: BA, Applied Linguistics

guest_lectures:
  - title: "Transgender: From the Clinic to the Protest"
    place: Georgia State University
    course: Sex, Culture, and Society
    date: May 15 2018
  - title: "Graduate Studies in Anthropology"
    place: "Georgia State University"
    course: "Senior Seminar in Anthropology"
    date: November 7 2018
---

# Alex Chace
Pronouns: they/them/theirs

Email: [alex@frenziedstasis.org](alex@frenziedstasis.org)

## Bio
Hi! I am an interdisciplinary anthropologist and gender studies scholar with a background in linguistics, sociology, software development, and literature.

## Education

{% for degree in page.education %}
<div class="degree">
	<h4>{{ degree.degree }} ({{ degree.time }})</h4>
	<p>{{ degree.school }}</p>
	{% if degree.thesis %}
		<p>Thesis: <b>{{ degree.thesis }}</b></p>
	{% endif %}
	{% if degree.dissertation %}
		<p>Dissertation: {{ degree.dissertation }}</p>
	{% endif %}
	{% if degree.advisor %}
		<p>Advisor: {{ degree.advisor }}</p>
	{% endif %}
	{% if degree.committee %}
		<p>Committee: {{ degree.committee }}</p>
	{% endif %}
</div>
{% endfor %}

## Publications

### Articles

{% bibliography --file papers -q @article %}

### Conference Papers

<ul class="bibliography">
{% bibliography --file papers -q @inproceedings %}
</ul>

## Teaching

### Teaching Assistant
- Introduction to Linguistic Anthropology (2).
- Introduction to Anthropology.

### Guest Lectures

{% for lecture in page.guest_lectures %}
<div class="degree">
	<h4>{{ lecture.title }}</h4>
	<p>{{ lecture.place }}</p>
	<p>{{ lecture.course }}</p>
	<p>{{ lecture.date }}</p>
</div>
{% endfor %}