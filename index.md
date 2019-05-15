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
    time: May 15 2018
  - title: "Graduate Studies in Anthropology"
    place: "Georgia State University"
    course: "Senior Seminar in Anthropology"
    time: November 7 2018
---

<h1 class="name">Alex Chace, MA.</h1>
<div class="row">
    <div class="column-left">

<h3>Contact</h3>
<div class="contact">
    <div class="row">
        <div class="column"><i class="fas fa-neuter"></i></div>
        <div class="column">{{ site.pronouns }}</div>
    </div>
    <div class="row">
        <div class="column"><i class="fas fa-envelope"></i></div>
        <div class="column"><a href="mailto:{{ site.email }}">{{ site.email }}</a></div>
    </div>
    <div class="row">
        <div class="column"><i class="fab fa-twitter"></i></div>
        <div class="column"><a href="http://twitter.com/{{ site.twitter }}">{{ site.twitter }}</a></div>
    </div>
    <div class="row">
        <div class="column"><i class="fas fa-blog"></i></div>
        <div class="column"><a href="https://{{ site.blog }}">{{ site.blog }}</a></div>
    </div>
</div>
</div>

<div class="column-right">
    <h3>Bio</h3>
<p class="bio">{{ site.bio }}</p>
</div>

</div>

<hr>

<h2> <i class="fas fa-university"></i> Education</h2>
<div class="items">
    {% for degree in page.education %}
    <div class="item">
        <h5>{{ degree.degree }} ({{ degree.school }}).</h5>
        <p class="time">{{ degree.time }}.</p>
        {% if degree.committee %}
            <p class="time">Committee: {{ degree.committee }}.</p>
        {% endif %}
    </div>
    {% endfor %}
</div>
<hr>

<h2><i class="fas fa-briefcase"></i> Work Experience</h2>
<div class="items">
    {% for job in page.jobs %}
    <div class="item">
        <h5>{{ job.title }} ({{ job.place }}).</h5>
        <p class="time">{{ job.time }}</p>
        <p class="description">{{ job.description }}</p>
    </div>
    {% endfor %}
</div>
<hr>

<h2><i class="fas fa-file-alt"></i> Publications</h2>

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

<h2><i class="fas fa-chalkboard-teacher"></i> Teaching</h2>

### Teaching Assistant
- Introduction to Linguistic Anthropology (2).
- Introduction to Anthropology.

### Guest Lectures
<div class="items">
    {% for lecture in page.guest_lectures %}
    <div class="item">
        <h5>{{ lecture.title }} ({{ lecture.course }}).</h5>
        <p class="time">{{ lecture.time }},</p>
        <p class="description">{{ lecture.place }}.</p>
    </div>
    {% endfor %}
</div>