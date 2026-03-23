import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import SkillTags from './components/SkillTags.vue'
import WorkTimeline from './components/WorkTimeline.vue'
import EducationList from './components/EducationList.vue'
import ContactLinks from './components/ContactLinks.vue'
import BlogPostList from './components/BlogPostList.vue'
import TagFilter from './components/TagFilter.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('SkillTags', SkillTags)
    app.component('WorkTimeline', WorkTimeline)
    app.component('EducationList', EducationList)
    app.component('ContactLinks', ContactLinks)
    app.component('BlogPostList', BlogPostList)
    app.component('TagFilter', TagFilter)
  },
}
