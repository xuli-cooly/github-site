<template>
  <div class="post-list">
    <a v-for="post in posts" :key="post.url" :href="post.url" class="post-item">
      <div class="post-meta">
        <time class="post-date">{{ post.date }}</time>
        <span v-for="tag in post.tags" :key="tag" class="post-tag">{{ tag }}</span>
      </div>
      <h2 class="post-title">{{ post.title }}</h2>
      <p v-if="post.description" class="post-desc">{{ post.description }}</p>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '../utils/posts.data'

defineProps<{
  posts: Post[]
}>()
</script>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 1.5rem;
}

.post-item {
  display: block;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--vp-c-divider);
  text-decoration: none !important;
  transition: opacity 0.2s;
}

.post-item:hover {
  opacity: 0.75;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
}

.post-date {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
}

.post-tag {
  font-size: 0.72rem;
  padding: 0.1rem 0.45rem;
  border-radius: 3px;
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
}

.post-title {
  font-family: var(--font-heading) !important;
  font-size: 1.1rem !important;
  font-weight: 600 !important;
  color: var(--vp-c-text-1) !important;
  margin: 0 0 0.4rem !important;
  border: none !important;
  padding: 0 !important;
}

.post-desc {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin: 0 !important;
  line-height: 1.6;
}
</style>
