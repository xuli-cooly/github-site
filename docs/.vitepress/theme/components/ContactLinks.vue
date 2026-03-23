<template>
  <div class="contact-links">
    <a v-if="contact.email" :href="`mailto:${contact.email}`" class="contact-item">
      {{ contact.email }}
    </a>
    <a v-if="contact.github" :href="contact.github" target="_blank" rel="noopener" class="contact-item">
      GitHub
    </a>
    <a v-if="contact.linkedin" :href="contact.linkedin" target="_blank" rel="noopener" class="contact-item">
      LinkedIn
    </a>
  </div>
</template>

<script setup lang="ts">
import type { ResumeData } from '../data/resume'

defineProps<{
  contact: ResumeData['contact']
}>()
</script>

<style scoped>
.contact-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.contact-item {
  font-size: 0.85rem;
  color: var(--vp-c-text-2) !important;
  text-decoration: none !important;
  font-family: var(--vp-font-family-mono);
  transition: color 0.2s;
}

.contact-item:hover {
  color: var(--vp-c-brand-1) !important;
}
</style>
