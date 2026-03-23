---
aside: false
---

<script setup>
import { resume } from '../../.vitepress/theme/data/resume'
const l = 'en'
</script>

<div class="about-page">

<div class="about-header">
  <img :src="resume.personal.avatar" :alt="resume.personal.name[l]" class="avatar" />
  <div class="about-intro">
    <h1 class="about-name">{{ resume.personal.name[l] }}</h1>
    <p class="about-title">{{ resume.personal.title[l] }}</p>
    <p class="about-location">{{ resume.personal.location[l] }}</p>
    <p class="about-bio">{{ resume.personal.bio[l] }}</p>
    <ContactLinks :contact="resume.contact" />
  </div>
</div>

---

<section class="about-section">

## Skills

<SkillTags :skills="resume.skills" :lang="l" />

</section>

---

<section class="about-section">

## Experience

<WorkTimeline :experience="resume.experience" :lang="l" />

</section>

---

<section class="about-section">

## Education

<EducationList :education="resume.education" :lang="l" />

</section>

</div>
