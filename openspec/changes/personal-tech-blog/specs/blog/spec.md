## ADDED Requirements

### Requirement: 博客文章 Markdown 写作
博客模块 SHALL 支持在 `docs/blog/posts/` 目录下以 Markdown 格式撰写文章，每篇文章通过 frontmatter 声明元数据（title、date、tags、description）。

#### Scenario: 文章元数据声明
- **WHEN** 开发者在 `docs/blog/posts/` 下创建一个包含如下 frontmatter 的 `.md` 文件：
  ```yaml
  ---
  title: "文章标题"
  date: 2024-01-15
  tags: [Vue, VitePress]
  description: "文章摘要"
  ---
  ```
- **THEN** 构建后该文章可通过 `/blog/posts/<filename>` 访问，标题/日期/标签正确渲染

---

### Requirement: 博客列表页
博客模块 SHALL 提供 `/blog/` 列表页，展示所有已发布文章的卡片，每张卡片包含：标题、发布日期、标签列表、摘要（description）。

#### Scenario: 文章列表按日期倒序
- **WHEN** 用户访问 `/blog/`
- **THEN** 页面展示所有文章卡片，按发布日期从新到旧排列

#### Scenario: 点击文章卡片跳转
- **WHEN** 用户点击文章卡片的标题或「阅读更多」链接
- **THEN** 页面导航至该文章的详情页 `/blog/posts/<filename>`

---

### Requirement: 标签筛选
博客列表页 SHALL 支持按标签筛选文章，页面顶部展示所有出现过的标签，用户点击标签后列表只显示包含该标签的文章。

#### Scenario: 点击标签筛选
- **WHEN** 用户在博客列表页点击标签「Vue」
- **THEN** 文章列表仅显示 frontmatter 中 tags 包含 "Vue" 的文章，其他文章隐藏

#### Scenario: 取消筛选
- **WHEN** 用户点击已选中的标签或「全部」按钮
- **THEN** 文章列表恢复显示全部文章

---

### Requirement: 文章详情页
每篇博客文章 SHALL 有独立详情页，页面顶部显示文章标题、发布日期、标签，正文渲染 Markdown 内容（含代码高亮、图片、表格等）。

#### Scenario: 文章正文渲染
- **WHEN** 用户访问某篇文章的详情页
- **THEN** 页面显示文章标题、日期、标签，并完整渲染 Markdown 正文内容

#### Scenario: 文章内代码块高亮
- **WHEN** 文章正文中包含带语言标注的代码块
- **THEN** 代码块以对应语言语法高亮样式渲染，支持复制代码按钮

---

### Requirement: 时间归档
博客模块 SHALL 提供按年/月归档视图（`/blog/archive`），展示各时间段的文章数量及链接。

#### Scenario: 归档页年份分组
- **WHEN** 用户访问 `/blog/archive`
- **THEN** 页面按年份倒序分组展示文章列表，每个年份下列出该年所有文章的标题与日期

---

### Requirement: 全文搜索
博客模块 SHALL 集成站内全文搜索功能，用户可通过导航栏搜索框检索博客文章标题和正文内容。

#### Scenario: 搜索关键词
- **WHEN** 用户在搜索框输入关键词并按回车或点击搜索
- **THEN** 页面展示包含该关键词的文章列表，关键词在结果中高亮显示
