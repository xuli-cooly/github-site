## 1. 项目初始化与基础配置

- [x] 1.1 在项目根目录初始化 Node.js 项目，创建 `package.json`，添加 VitePress 依赖并配置 `docs:dev`、`docs:build`、`docs:preview` 脚本
- [x] 1.2 创建 `docs/` 目录结构：`docs/.vitepress/`、`docs/about/`、`docs/blog/posts/`
- [x] 1.3 创建 `docs/.vitepress/config.ts`，配置站点标题、描述、base 路径（适配 GitHub Pages 子路径）、导航栏（首页/关于我/博客）和内置搜索
- [x] 1.4 创建 `.gitignore`，排除 `node_modules/`、`docs/.vitepress/dist/`、`docs/.vitepress/cache/`

## 2. GitHub Actions 自动部署

- [x] 2.1 创建 `.github/workflows/deploy.yml`，配置在 `push` 到 `main` 分支时触发
- [x] 2.2 deploy.yml 中配置：checkout → setup Node → install deps → build → deploy to GitHub Pages（使用 `actions/configure-pages` + `actions/upload-pages-artifact` + `actions/deploy-pages`）
- [x] 2.3 在 GitHub 仓库 Settings → Pages 中验证部署源设置为 "GitHub Actions"（文档注释即可，无需代码）

## 3. 主题与自定义样式

- [x] 3.1 创建 `docs/.vitepress/theme/index.ts`，扩展默认主题，注册自定义全局组件
- [x] 3.2 创建 `docs/.vitepress/theme/style.css`，定义自定义 CSS 变量（主色调、字体等），确保亮色/暗色模式均正常

## 4. 首页 Hero 区域

- [x] 4.1 创建 `docs/index.md`，使用 VitePress frontmatter `layout: home` 配置 Hero 区域（name、tagline、image、actions），包含「查看博客」和「关于我」两个按钮

## 5. 关于我模块

- [x] 5.1 创建 `docs/.vitepress/theme/data/resume.ts`，以 TypeScript 对象/数组定义简历数据结构（个人信息、技能分组、工作经历、教育背景、联系方式）
- [x] 5.2 创建 `docs/.vitepress/theme/components/SkillTags.vue`，接收技能分组数据，渲染圆角标签列表
- [x] 5.3 创建 `docs/.vitepress/theme/components/WorkTimeline.vue`，接收工作经历数组，渲染时间线布局（公司、职位、时间段、职责要点）
- [x] 5.4 创建 `docs/.vitepress/theme/components/EducationList.vue`，渲染教育背景列表（学校、专业/学位、时间段）
- [x] 5.5 创建 `docs/.vitepress/theme/components/ContactLinks.vue`，渲染联系方式图标链接（GitHub 新标签页跳转，Email 使用 mailto:）
- [x] 5.6 创建 `docs/about/index.md`，使用 `<script setup>` 引入 resume.ts 数据并挂载各 Vue 组件，渲染完整「关于我」页面（头像、简介、技能、工作经历、教育、联系方式）

## 6. 博客模块

- [x] 6.1 创建 `docs/.vitepress/theme/utils/posts.data.ts`，使用 `createContentLoader('blog/posts/*.md')` 读取所有文章的 frontmatter（title、date、tags、description），导出按日期倒序排列的文章数组
- [x] 6.2 创建 `docs/.vitepress/theme/components/BlogPostCard.vue`，接收单篇文章数据（title、date、tags、description、url），渲染为文章卡片（支持点击标题跳转）
- [x] 6.3 创建 `docs/.vitepress/theme/components/TagFilter.vue`，接收标签列表和当前选中标签，渲染标签筛选栏，发出 tag-select 事件
- [x] 6.4 创建 `docs/blog/index.md`，使用 `useData` + posts.data.ts 加载文章列表，集成 TagFilter 和 BlogPostCard 组件，实现标签筛选逻辑（按选中标签过滤显示文章）
- [x] 6.5 创建 `docs/blog/archive.md`，加载所有文章数据，按年份倒序分组渲染归档列表（年份 → 文章标题 + 日期链接）
- [x] 6.6 在 `docs/blog/posts/` 下创建 2-3 篇示例博客文章（包含完整 frontmatter：title、date、tags、description），内容涵盖代码块以验证高亮效果

## 7. 验证与收尾

- [x] 7.1 本地执行 `npm run docs:dev`，逐一验证首页、关于我、博客列表、文章详情、归档页的页面渲染和交互
- [x] 7.2 测试标签筛选功能：点击标签后文章列表正确过滤，点击「全部」恢复
- [x] 7.3 验证亮色/暗色主题切换及刷新后状态保持
- [x] 7.4 验证移动端响应式布局（使用浏览器 DevTools 模拟）
- [x] 7.5 执行 `npm run docs:build` 确认生产构建无错误
- [ ] 7.6 推送到 GitHub main 分支，确认 GitHub Actions 流水线成功运行并完成部署
