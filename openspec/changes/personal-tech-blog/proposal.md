## Why

作为一名技术从业者，需要一个专属的个人品牌展示平台：既能呈现简历与个人经历，又能持续发布技术博客内容，并直接托管在 GitHub Pages 上，无需服务器成本。现有通用模板无法同时满足个人介绍、博客写作和内容组织的一体化需求。

## What Changes

- 全新创建一个基于静态站点生成器（VitePress）的个人技术博客网站
- 支持一键部署到 GitHub Pages（通过 GitHub Actions 自动化 CI/CD）
- 新增「关于我」模块：展示个人简历、技能树、工作经历、教育背景
- 新增「博客」模块：支持 Markdown 写作、标签分类、时间归档
- 新增导航栏、首页 Hero 区域、页脚等基础页面框架
- 响应式设计适配移动端与桌面端
- 提供代码高亮、搜索、夜间模式等开发者友好功能
- 「关于我」模块支持中英双语切换（简历面向国际受众）
- 博客内容暂为纯中文，UI 导航/标签支持双语切换
- 内容编辑通过 github.dev 在线完成，无需独立管理后台

## Capabilities

### New Capabilities

- `site-foundation`: 站点整体框架——VitePress 项目结构、主题配置、导航栏、页脚、GitHub Pages 部署流程（GitHub Actions workflow）
- `about-me`: 个人介绍模块——个人简介、技能清单、工作经历、教育背景、联系方式，以简历卡片形式呈现
- `blog`: 博客模块——文章列表页、单篇文章页、支持标签/分类筛选、时间归档、Markdown 写作支持

### Modified Capabilities

（无现有能力需修改，全新项目）

## Impact

- **技术栈**: VitePress（基于 Vue 3 + Vite）、Markdown、GitHub Actions
- **部署**: GitHub Pages，通过 `gh-pages` 分支或 `docs/` 目录发布
- **依赖**: Node.js、VitePress npm 包
- **文件结构**: 新建 `docs/` 目录作为内容根目录，`.github/workflows/` 配置 CI/CD
- **无破坏性变更**（全新项目）
