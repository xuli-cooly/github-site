import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '张三',
  description: '软件工程师的个人博客',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
    },
    en: {
      label: 'English',
      lang: 'en-US',
      description: 'Personal blog of a software engineer',
    },
  },

  themeConfig: {
    nav: [
      { text: '博客', link: '/blog/' },
      { text: '关于', link: '/about/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username' },
    ],

    search: {
      provider: 'local',
    },
  },
})
