<template>
  <div class="work-timeline">
    <div v-for="job in experience" :key="job.company.zh" class="timeline-item">
      <div class="timeline-header">
        <div class="timeline-meta">
          <span class="company">{{ job.company[lang] }}</span>
          <span class="role">{{ job.role[lang] }}</span>
        </div>
        <span class="period">{{ job.period }}</span>
      </div>
      <ul class="highlights">
        <li v-for="(h, i) in job.highlights" :key="i">{{ h[lang] }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ResumeData } from '../data/resume'

defineProps<{
  experience: ResumeData['experience']
  lang: 'zh' | 'en'
}>()
</script>

<style scoped>
.work-timeline {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.timeline-item {
  border-left: 2px solid var(--vp-c-divider);
  padding-left: 1.25rem;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
}

.timeline-meta {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.company {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
}

.role {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.period {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
  white-space: nowrap;
}

.highlights {
  margin: 0;
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.highlights li {
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
</style>
