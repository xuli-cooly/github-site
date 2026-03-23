<template>
  <div class="education-list">
    <div v-for="edu in education" :key="edu.school.zh" class="education-item">
      <div class="edu-header">
        <div>
          <span class="school">{{ edu.school[lang] }}</span>
          <span class="degree">{{ edu.degree[lang] }}</span>
        </div>
        <span class="period">{{ edu.period }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ResumeData } from '../data/resume'

defineProps<{
  education: ResumeData['education']
  lang: 'zh' | 'en'
}>()
</script>

<style scoped>
.education-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.education-item {
  border-left: 2px solid var(--vp-c-divider);
  padding-left: 1.25rem;
}

.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.school {
  display: block;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
}

.degree {
  display: block;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-top: 0.1rem;
}

.period {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
  white-space: nowrap;
}
</style>
