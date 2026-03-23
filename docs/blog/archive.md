---
aside: false
---

<script setup>
import { computed } from 'vue'
import { data as posts } from '../.vitepress/theme/utils/posts.data'

const byYear = computed(() => {
  const map = new Map()
  posts.forEach(p => {
    const year = p.date.slice(0, 4)
    if (!map.has(year)) map.set(year, [])
    map.get(year).push(p)
  })
  return [...map.entries()].sort((a, b) => b[0] - a[0])
})
</script>

# 归档

<div class="archive">
  <div v-for="[year, yearPosts] in byYear" :key="year" class="archive-year">
    <h2 class="year-heading">{{ year }}</h2>
    <ul class="year-list">
      <li v-for="post in yearPosts" :key="post.url" class="year-item">
        <time class="item-date">{{ post.date.slice(5) }}</time>
        <a :href="post.url" class="item-title">{{ post.title }}</a>
      </li>
    </ul>
  </div>
</div>

<style>
.archive {
  max-width: 680px;
  margin: 0 auto;
}

.year-heading {
  font-family: var(--font-heading) !important;
  font-size: 1.5rem !important;
  font-weight: 600 !important;
  border: none !important;
  padding: 0 !important;
  margin: 2rem 0 0.75rem !important;
  color: var(--vp-c-text-1);
}

.year-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.year-item {
  display: flex;
  align-items: baseline;
  gap: 1.25rem;
  padding: 0.45rem 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

.item-date {
  font-family: var(--vp-font-family-mono);
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
  white-space: nowrap;
  min-width: 4rem;
}

.item-title {
  font-size: 0.95rem;
  color: var(--vp-c-text-1) !important;
  text-decoration: none !important;
  transition: opacity 0.2s;
}

.item-title:hover {
  opacity: 0.65;
}
</style>
