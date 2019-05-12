---
layout: default
education:
  - school: Georgia State University
    time: Aug 19-May 2023
    degree: PhD, Moving Image Studies
  - school: GSU
    time: Aug 17-May 2019
    degree: MA, Anthropology
    committee: Cassandra White (chair), Jennifer Patico, and Megan Sinnott
  - school: GSU
    time: Aug 13-May 2017
    degree: BA, Applied Linguistics

jobs:
  - title: "Graduate Research Assistant"
    place: "Global Health Discourses Project"
    time: "Jan-May 2019"
  - title: "Graduate Teaching Assistant"
    place: "GSU Dept. of Anthropology"
    time: "Aug 17-Dec 2018"
  - title: "Growth Marketing Intern"
    place: "SimpleShowing, Inc"
    time: "July-Nov 2017"

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

# Alex Chace, M.A.
<ul class="contact">
	<li><i class="fas fa-neuter"></i> they/them/theirs</li>
	<li><i class="fas fa-envelope"></i> <a href="mailto:{{ site.email }}">{{site.email}}</a></li>
	<li><i class="fab fa-twitter"></i> <a href="twitter.com/{{ site.twitter }}">{{ site.twitter }}</a></li>
	<li><i class="fas fa-blog"></i> <a href="https://frenziedstasis.org">frenziedstasis.org</a></li>
</ul>

<hr>

## <i class="fas fa-address-book"></i> Bio
I am an interdisciplinary scholar with interests in biomedicine, cybernetics, gender studies, horror films, psychoanalysis, and posthumanism.

<hr>

## <i class="fas fa-university"></i> Education

<style>
  h5 {
    letter-spacing: .5px;
    font-weight: normal;
    text-transform: none;
  }
</style>

{% for degree in page.education %}
<div class="degree">
	<h5>{{ degree.degree }} ({{ degree.school }}).</h5>
	<p>{{ degree.time }}.</p>
	{% if degree.committee %}
		<p>Committee: {{ degree.committee }}.</p>
	{% endif %}
</div>
{% endfor %}

<hr>

## <i class="fas fa-file-alt"></i> Publications

### MA Thesis

{% bibliography --file papers -q @thesis %}

### Articles

{% bibliography --file papers -q @article %}

### Conference Papers

<ul class="bibliography">
{% bibliography --file papers -q @inproceedings %}
</ul>

<hr>

## <i class="fas fa-chalkboard-teacher"></i> Teaching

### Teaching Assistant
- Introduction to Linguistic Anthropology (2).
- Introduction to Anthropology.

### Guest Lectures

{% for lecture in page.guest_lectures %}
<div class="degree">
	<h5>{{ lecture.title }} ({{ lecture.date }}).</h5>
  <p>{{ lecture.course }},</p>
	<p>{{ lecture.place }}.</p>
</div>
{% endfor %}

<hr>

## <i class="fas fa-briefcase"></i> Work Experience

{% for job in page.jobs %}
<div class="degree">
	<h5>{{ job.title }} ({{ job.place }}).</h5>
	<p>{{ job.time }}</p>
</div>
{% endfor %}