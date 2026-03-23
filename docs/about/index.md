---
aside: false
---

<script setup>
import { useData } from 'vitepress'
import { resume } from '../.vitepress/theme/data/resume'

const { lang } = useData()
const l = lang.value === 'en-US' ? 'en' : 'zh'
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

## {{ l === 'zh' ? '技能' : 'Skills' }}

<SkillTags :skills="resume.skills" :lang="l" />

</section>

---

<section class="about-section">

## {{ l === 'zh' ? '工作经历' : 'Experience' }}

<WorkTimeline :experience="resume.experience" :lang="l" />

</section>

---

<section class="about-section">

## {{ l === 'zh' ? '教育背景' : 'Education' }}

<EducationList :education="resume.education" :lang="l" />

</section>

</div>

<style>
.about-page {
  max-width: 680px;
  margin: 0 auto;
  padding: 2rem 0 4rem;
}

.about-header {
  display: grid;
  grid-template-columns: 7rem 1fr;
  gap: 2rem;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

@media (max-width: 600px) {
  .about-header {
    grid-template-columns: 1fr;
  }
}

.avatar {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  object-fit: cover;
  filter: grayscale(20%);
}

.about-name {
  font-family: var(--font-heading) !important;
  font-size: 2rem !important;
  font-weight: 600 !important;
  margin: 0 0 0.25rem !important;
  border: none !important;
  padding: 0 !important;
}

.about-title {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0 0 0.15rem !important;
}

.about-location {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  margin: 0 0 1rem !important;
  font-family: var(--vp-font-family-mono);
}

.about-bio {
  font-size: 0.95rem;
  line-height: 1.75;
  margin: 0 0 1.25rem !important;
}

.about-section {
  padding: 0.5rem 0;
}

.about-section h2 {
  font-family: var(--font-heading) !important;
  font-size: 1.25rem !important;
  font-weight: 600 !important;
  border: none !important;
  padding: 0 !important;
  margin-bottom: 1.25rem !important;
}
</style>
