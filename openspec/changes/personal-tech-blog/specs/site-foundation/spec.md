## ADDED Requirements

### Requirement: VitePress 项目初始化
站点 SHALL 基于 VitePress 框架构建，项目根目录包含 `package.json`，内容目录为 `docs/`，VitePress 配置文件位于 `docs/.vitepress/config.ts`。

#### Scenario: 本地开发服务器启动
- **WHEN** 在项目根目录执行 `npm run docs:dev`
- **THEN** VitePress 开发服务器在 `http://localhost:5173`（或默认端口）启动，支持热更新

#### Scenario: 生产构建
- **WHEN** 执行 `npm run docs:build`
- **THEN** 在 `docs/.vitepress/dist/` 生成静态文件，无构建错误

---

### Requirement: 导航栏配置
站点 SHALL 提供顶部导航栏，包含「首页」、「关于我」、「博客」三个导航项及站点名称/Logo。

#### Scenario: 导航链接正确
- **WHEN** 用户访问任意页面
- **THEN** 顶部导航栏显示正确的链接，点击后跳转至对应页面，当前页高亮

#### Scenario: 移动端导航收起/展开
- **WHEN** 用户在移动端（屏幕宽度 < 768px）访问站点
- **THEN** 导航项收起为汉堡菜单，点击后展开显示所有导航链接

---

### Requirement: 首页 Hero 区域
站点首页（`docs/index.md`）SHALL 包含 Hero 区域，展示个人姓名/站点标题、一句话介绍、「查看博客」和「关于我」两个 CTA 按钮。

#### Scenario: Hero 内容呈现
- **WHEN** 用户访问站点根路径 `/`
- **THEN** 页面中央显示标题、副标题文字及两个操作按钮，按钮点击后跳转至对应模块

---

### Requirement: GitHub Actions 自动部署
项目 SHALL 包含 `.github/workflows/deploy.yml`，在推送到 `main` 分支时自动构建并部署到 GitHub Pages。

#### Scenario: 推送触发部署
- **WHEN** 开发者将代码推送到 `main` 分支
- **THEN** GitHub Actions 自动触发，执行 `npm run docs:build` 并将产物部署至 GitHub Pages，整个流程无需人工干预

#### Scenario: 部署失败通知
- **WHEN** GitHub Actions 构建或部署步骤失败
- **THEN** 仓库 Actions 页面显示红色失败状态，开发者可查看日志定位问题

---

### Requirement: 夜间模式支持
站点 SHALL 支持亮色/暗色主题切换，用户选择持久化至本地存储。

#### Scenario: 主题切换
- **WHEN** 用户点击导航栏的主题切换按钮
- **THEN** 页面主题在亮色和暗色之间切换，刷新页面后保持用户上次的选择

---

### Requirement: 代码高亮
站点 SHALL 对博客文章中的代码块进行语法高亮，支持常见编程语言（Python、JavaScript、TypeScript、Java、Shell 等）。

#### Scenario: 代码块渲染
- **WHEN** Markdown 文件中包含带语言标注的代码围栏（如 \`\`\`python）
- **THEN** 页面渲染时代码块显示对应语言的语法高亮样式
