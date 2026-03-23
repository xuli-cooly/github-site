<template>
  <div class="tag-filter">
    <button
      class="tag-btn"
      :class="{ active: activeTag === '' }"
      @click="$emit('select', '')"
    >全部</button>
    <button
      v-for="tag in tags"
      :key="tag"
      class="tag-btn"
      :class="{ active: activeTag === tag }"
      @click="$emit('select', tag)"
    >{{ tag }}</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  tags: string[]
  activeTag: string
}>()

defineEmits<{
  select: [tag: string]
}>()
</script>

<style scoped>
.tag-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.tag-btn {
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s;
}

.tag-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.tag-btn.active {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-white);
}
</style>
