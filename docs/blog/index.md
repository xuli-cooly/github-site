---
aside: false
---

<script setup>
import { ref, computed } from 'vue'
import { data as posts } from '../.vitepress/theme/utils/posts.data'

const activeTag = ref('')

const allTags = computed(() => {
  const set = new Set()
  posts.forEach(p => p.tags.forEach(t => set.add(t)))
  return [...set].sort()
})

const filtered = computed(() =>
  activeTag.value ? posts.filter(p => p.tags.includes(activeTag.value)) : posts
)
</script>

# 博客

<TagFilter :tags="allTags" :active-tag="activeTag" @select="t => activeTag = t" />

<BlogPostList :posts="filtered" />
