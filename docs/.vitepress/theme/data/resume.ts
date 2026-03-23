export interface BiText {
  zh: string
  en: string
}

export interface ResumeData {
  personal: {
    name: BiText
    avatar: string
    title: BiText
    bio: BiText
    location: BiText
  }
  contact: {
    email: string
    github: string
    linkedin?: string
  }
  skills: Array<{
    category: BiText
    items: string[]
  }>
  experience: Array<{
    company: BiText
    role: BiText
    period: string
    highlights: BiText[]
  }>
  education: Array<{
    school: BiText
    degree: BiText
    period: string
  }>
}

export const resume: ResumeData = {
  personal: {
    name: { zh: '张三', en: 'Zhang San' },
    avatar: '/avatar.jpg',
    title: { zh: '高级软件工程师', en: 'Senior Software Engineer' },
    bio: {
      zh: '专注于后端架构设计与开发者工具，热衷于构建高可用分布式系统。喜欢写作，相信好的文章和好的代码一样值得打磨。',
      en: 'Focused on backend architecture and developer tooling. Passionate about building reliable distributed systems. I believe good writing deserves the same craft as good code.',
    },
    location: { zh: '上海，中国', en: 'Shanghai, China' },
  },
  contact: {
    email: 'hello@example.com',
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-profile',
  },
  skills: [
    {
      category: { zh: '编程语言', en: 'Languages' },
      items: ['Python', 'TypeScript', 'Java', 'Go'],
    },
    {
      category: { zh: '框架与库', en: 'Frameworks' },
      items: ['FastAPI', 'Spring Boot', 'Vue 3', 'React'],
    },
    {
      category: { zh: '工具与平台', en: 'Tools & Platforms' },
      items: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS', 'PostgreSQL', 'Redis'],
    },
  ],
  experience: [
    {
      company: { zh: '某科技公司', en: 'Tech Corp' },
      role: { zh: '高级软件工程师', en: 'Senior Software Engineer' },
      period: '2022.01 — 至今',
      highlights: [
        { zh: '主导微服务架构升级，将系统可用性从 99.5% 提升至 99.95%', en: 'Led microservices architecture migration, improving availability from 99.5% to 99.95%' },
        { zh: '设计并实现高并发消息队列组件，支撑每日 1 亿次调用', en: 'Designed high-throughput message queue supporting 100M daily calls' },
        { zh: '推动团队 CI/CD 规范化，将发布周期从两周缩短至每日多次', en: 'Standardized CI/CD practices, reducing release cycles from biweekly to multiple daily deployments' },
      ],
    },
    {
      company: { zh: '前一家公司', en: 'Previous Company' },
      role: { zh: '软件工程师', en: 'Software Engineer' },
      period: '2019.07 — 2021.12',
      highlights: [
        { zh: '负责核心交易模块的开发与维护', en: 'Owned development and maintenance of core transaction module' },
        { zh: '参与数据库分库分表改造，查询性能提升 60%', en: 'Participated in database sharding, improving query performance by 60%' },
      ],
    },
  ],
  education: [
    {
      school: { zh: '某知名大学', en: 'University Name' },
      degree: { zh: '计算机科学 学士', en: 'B.Sc. Computer Science' },
      period: '2015 — 2019',
    },
  ],
}
