## Context

这是一个全新的个人技术博客网站项目，从零开始构建，目标是部署在 GitHub Pages 上。网站面向技术从业者，需兼顾个人品牌展示（简历、关于我）和技术内容输出（博客）两大核心场景。技术栈选型以"零运维成本 + 开发者友好"为首要约束。

## Goals / Non-Goals

**Goals:**
- 使用 VitePress 构建静态站点，充分利用其 Markdown 支持和 Vue 3 组件扩展能力
- 通过 GitHub Actions 实现推送即部署（push to main → auto deploy to GitHub Pages）
- 「关于我」页面以结构化方式展示个人简历信息（技能、经历、教育、联系方式）
- 「博客」模块支持 Markdown 文章、标签分类、时间归档、全文搜索
- 响应式设计，支持移动端与桌面端
- 代码高亮、夜间模式开箱即用
- UI 导航与「关于我」页面支持中英双语切换（VitePress i18n）
- 简历数据（`resume.ts`）每个文字字段存双语值 `{ zh, en }`，由 Vue 组件按当前语言渲染
- 博客文章暂为纯中文，不做内容翻译
- 内容编辑通过 github.dev（仓库按 `.` 键打开）完成，无需独立管理后台

**Non-Goals:**
- 不引入数据库或后端服务（纯静态）
- 不实现评论系统（可后续通过 Giscus 等扩展）
- 不支持用户登录/账号体系
- 不做博客文章的多语言翻译（UI/简历双语，文章内容暂不翻译）
- 不自建 CDN 或自定义域名（使用默认 GitHub Pages 域名）
- 不引入独立 CMS 后台（github.dev 即编辑工具）

## Decisions

### 决策 1：选用 VitePress 而非 Hexo / Hugo / Next.js

**选择**: VitePress

**理由**:
- VitePress 基于 Vue 3 + Vite，支持在 Markdown 中直接嵌入 Vue 组件，非常适合定制简历卡片等富交互区块
- 构建速度快，开发体验好（HMR）
- 内置搜索（基于 MiniSearch）、代码高亮（Shiki）、夜间模式
- GitHub Pages 部署文档完善

**备选方案**:
- Hexo：插件生态丰富但基于 EJS 模板，扩展性弱于 Vue 组件
- Hugo：性能极佳但 Go 模板学习曲线较陡，社区 Vue 组件复用困难
- Next.js：功能强大但对纯静态博客过度工程化

---

### 决策 2：目录结构——内容统一放在 `docs/` 下

**选择**: 以 `docs/` 为 VitePress 根目录

**理由**:
- GitHub Pages 官方支持从 `docs/` 目录直接发布，可在不使用 Actions 的情况下快速预览
- VitePress 约定将内容放在独立目录，与项目根配置文件（`package.json`、`vite.config.ts` 等）分离

**目录结构**:
```
github-site/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts          # 站点配置（导航、侧边栏、主题）
│   │   └── theme/             # 自定义主题组件（简历卡片等）
│   ├── index.md               # 首页 Hero
│   ├── about/
│   │   └── index.md           # 关于我页面
│   └── blog/
│       ├── index.md           # 博客列表页
│       └── posts/             # 博客文章目录
│           └── YYYY-MM-DD-title.md
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions 部署
└── package.json
```

---

### 决策 3：GitHub Actions 自动部署

**选择**: 使用官方 `actions/configure-pages` + `actions/deploy-pages` action 部署到 GitHub Pages

**理由**:
- 推送到 `main` 分支自动触发构建和部署，无需手动操作
- 使用 GitHub 托管的 Pages 环境，避免依赖第三方 token

---

### 决策 4：内容编辑工具——github.dev 而非独立 CMS

**选择**: github.dev（浏览器内 VSCode）作为唯一内容编辑工具

**理由**:
- 任意设备打开仓库按 `.` 键即可进入，无需本地开发环境
- 提供语法高亮、Markdown 预览、文件树导航，体验接近本地 VSCode
- 保存即 commit，自动触发 GitHub Actions 构建部署——"管理端"与"部署流水线"天然打通
- 权限控制天然完成：只有仓库协作者才能编辑，无需额外认证体系

**备选方案**:
- Decap CMS：更美观的编辑 UI，但需要配置 GitHub OAuth App，增加初始复杂度；暂不引入
- 本地 git push：最灵活，但依赖本地环境，跨设备写作不便

---

### 决策 5：多语言方案——VitePress i18n + 简历双语数据

**选择**: VitePress 内置 i18n（`locales` 配置）+ `resume.ts` 字段双语化

**范围**:
- UI 文字（导航栏、按钮、标签文案）：VitePress i18n 配置，中英两份 `themeConfig`
- 简历数据：`resume.ts` 每个展示字段为 `{ zh: string; en: string }` 对象，Vue 组件读取 VitePress 当前 locale 决定渲染哪个值
- 博客文章：暂为纯中文，不做翻译；语言切换时博客模块保持中文展示

**URL 结构**:
```
/          → 中文（默认）
/en/       → 英文
/about/    → 中文简历
/en/about/ → 英文简历
/blog/     → 中文博客（语言切换不影响博客内容）
```

**理由**:
- 简历做英文版对面向国际受众（求职、开源合作）价值高，且内容量可控
- 博客翻译成本过高，暂不纳入范围，后续有需要可按相同模式扩展

---

### 决策 6：视觉风格——欧式极简（瑞士 × 法式编辑）

**选择**: 纸黑配色（方案 A）+ 衬线大标题 + 无衬线正文 + 博客列表式布局

**色彩系统**:
```
              亮色模式          暗色模式
背景          #FFFFFF           #0A0A0A
主文字        #0A0A0A           #F0F0F0
次级文字      #767676           #767676
分割线        #E5E5E5           #2A2A2A
强调/链接     #0A0A0A           #F0F0F0（下划线区分）
代码块背景    #F5F5F5           #1A1A1A
```
无品牌色，强调色通过**字重、下划线、间距**而非颜色实现。

**字体**:
- 大标题（Hero、页面标题）：`Cormorant Garamond`（衬线，法式编辑感）
- 正文 / UI 文字：`Inter`（无衬线，现代，可读性强）
- 代码：`JetBrains Mono`（等宽）
- 中文叠加：标题用「思源宋体」，正文用「思源黑体」

**博客列表布局**:
- 使用列表式（非卡片 grid），每条文章占一行区域
- 结构：`日期（小字等宽）→ 标题（大字）→ 摘要（浅灰）→ 阅读链接`
- 条目间用极细分割线（1px，`#E5E5E5`），不使用卡片阴影/圆角

**代码块处理**:
- 亮色模式：浅灰背景（`#F5F5F5`），低饱和度语法高亮（GitHub Light 风格）
- 暗色模式：深灰背景（`#1A1A1A`），避免高对比度霓虹色系

**排版规则**:
- 正文最大宽度：`680px`（约 65 字符/行，保持阅读节奏）
- 行高：`1.75`（宽松，呼吸感）
- 大量留白，section 间距不少于 `4rem`

**理由**:
- 纸黑配色无需选品牌色，降低视觉决策成本，专注内容
- 列表式博客布局比卡片 grid 留白更足，阅读感更强，符合极简原则
- 衬线标题 + 无衬线正文是欧式印刷传统的经典分工，既有人文质感又不失清晰

---

### 决策 7：博客列表页使用 VitePress 数据加载（`createContentLoader`）

**选择**: 使用 VitePress 内置的 `createContentLoader` API 生成博客文章列表

**理由**:
- 无需额外插件，读取 Markdown frontmatter（title、date、tags）生成文章索引
- 通过 Vue 组件渲染文章卡片列表，支持按标签/日期筛选

## Risks / Trade-offs

| 风险 | 缓解措施 |
|------|----------|
| VitePress 版本迭代导致 API 变更 | 锁定 `package.json` 中的版本号，升级前测试 |
| 博客文章数量增多后搜索性能下降 | 内置 MiniSearch 对百篇文章以内性能足够；后续可切换 Algolia DocSearch |
| GitHub Pages 每次部署有短暂 downtime | 静态站点部署极快（通常 < 1 分钟），可接受 |
| 简历信息硬编码在 Markdown 中不易维护 | 将简历数据抽取为 JSON 文件，由 Vue 组件渲染，便于后续更新 |
| Cormorant Garamond 等 Google Fonts 在中国大陆加载慢 | 使用 `@fontsource` npm 包本地托管字体，不依赖外部 CDN |

## Migration Plan

1. 在本地初始化 VitePress 项目（`npx vitepress init`）
2. 配置 `docs/.vitepress/config.ts`（站点名、导航、主题色）
3. 实现各模块页面（首页、关于我、博客列表、文章详情）
4. 在 GitHub 仓库 Settings → Pages 中选择 "GitHub Actions" 作为部署源
5. 添加 `.github/workflows/deploy.yml`
6. 推送代码，验证 Actions 流水线成功，访问 `https://<username>.github.io/<repo>/` 确认部署

**回滚**: 若部署异常，可在 GitHub Actions 界面重新触发上一次成功的 workflow run，或将 `gh-pages` 分支回退。
