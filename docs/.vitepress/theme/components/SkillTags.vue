<template>
  <div class="skill-tags">
    <div v-for="group in skills" :key="group.category.zh" class="skill-group">
      <span class="skill-category">{{ group.category[lang] }}</span>
      <div class="skill-items">
        <span v-for="item in group.items" :key="item" class="skill-tag">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ResumeData } from '../data/resume'

defineProps<{
  skills: ResumeData['skills']
  lang: 'zh' | 'en'
}>()
</script>

<style scoped>
.skill-tags {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.skill-group {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
}

.skill-category {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  min-width: 6rem;
  font-family: var(--vp-font-family-mono);
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.skill-tag {
  font-size: 0.8rem;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-1);
}
</style>
