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
    description: "Employed R and igraph to visualize a social network of global health organizations based on website data."
  - title: "Graduate Teaching Assistant"
    place: "GSU Dept. of Anthropology"
    time: "Aug 17-Dec 2018"
    description: "Taught break-out sessions and guest-lectured in several introductory Anthropology courses. I also graded papers, tests, and other assignments."
  - title: "Growth Marketing Intern"
    place: "SimpleShowing, Inc"
    time: "July-Nov 2017"
    description: "Developed automated leads generation infrastructure in Python, using data from Zillow and other sources with customized text- and email-based outreach and preferential lead selection. I also assisted in updating company websites and customer-facing infrastructure in React, HTML, and CSS."

guest_lectures:
  - title: "Transgender: From the Clinic to the Protest"
    place: Georgia State University
    course: Sex, Culture, and Society
    date: May 15 2018
  - title: "Graduate Studies in Anthropology"
    place: "Georgia State University"
    course: "Senior Seminar in Anthropology"
    date: November 7 2018

bio: I am an interdisciplinary scholar with interests in biomedicine, cybernetics, gender studies, horror films, psychoanalysis, and posthumanism.
pronouns: they/them/theirs
---

# Alex Chace, M.A.
<ul class="contact">
    <li><i class="fas fa-neuter"></i> {{ page.pronouns }}</li>
    <li><i class="fas fa-envelope"></i> <a href="mailto:{{ site.email }}">{{site.email}}</a></li>
    <li><i class="fab fa-twitter"></i> <a href="twitter.com/{{ site.twitter }}">{{ site.twitter }}</a></li>
    <li><i class="fas fa-blog"></i> <a href="https://frenziedstasis.org">frenziedstasis.org</a></li>
</ul>

<hr>

## <i class="fas fa-address-book"></i> Bio
<p class="bio">{{ page.bio }}</p>

<hr>

## <i class="fas fa-university"></i> Education

{% for degree in page.education %}
<div class="item">
    <h5>{{ degree.degree }} ({{ degree.school }}).</h5>
    <p>{{ degree.time }}.</p>
    {% if degree.committee %}
        <p>Committee: {{ degree.committee }}.</p>
    {% endif %}
</div>
{% endfor %}

<hr>

## <i class="fas fa-briefcase"></i> Work Experience

{% for job in page.jobs %}
<div class="item">
    <h5>{{ job.title }} ({{ job.place }}).</h5>
    <p>{{ job.time }}</p>
    <p class="description">{{ job.description }}</p>
</div>
{% endfor %}

<hr>

## <i class="fas fa-file-alt"></i> Publications

### MA Thesis

<ul class="bibliography">
{% bibliography --file papers -q @thesis %}
</ul>

### Articles

<ul class="bibliography">
{% bibliography --file papers -q @article %}
</ul>

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
<div class="item">
    <h5>{{ lecture.title }} ({{ lecture.date }}).</h5>
  <p>{{ lecture.course }},</p>
    <p>{{ lecture.place }}.</p>
</div>
{% endfor %}