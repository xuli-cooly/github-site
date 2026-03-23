## ADDED Requirements

### Requirement: 个人简介展示
「关于我」页面 SHALL 展示个人头像、姓名、职位/身份标签、一段个人简介文字。

#### Scenario: 页面加载
- **WHEN** 用户导航至 `/about/`
- **THEN** 页面显示头像图片、姓名标题、职位标签及简介段落，布局清晰可读

---

### Requirement: 技能清单
「关于我」页面 SHALL 以分组方式展示技术技能（如：编程语言、框架、工具/云服务），每个技能以标签（Tag）形式呈现。

#### Scenario: 技能标签渲染
- **WHEN** 用户查看「关于我」页面的技能区域
- **THEN** 技能按分组（如「编程语言」、「框架」、「工具」）排列，每个技能显示为圆角标签样式

---

### Requirement: 工作经历
「关于我」页面 SHALL 以时间线（Timeline）形式展示工作经历，每条记录包含：公司名称、职位名称、在职时间段、主要职责描述（支持要点列表）。

#### Scenario: 工作经历时间线
- **WHEN** 用户查看「关于我」页面的工作经历区域
- **THEN** 各工作经历按时间倒序排列，以时间线视觉连接，每条记录展示完整信息

---

### Requirement: 教育背景
「关于我」页面 SHALL 展示教育背景，每条记录包含：学校名称、专业/学位、就读时间段。

#### Scenario: 教育信息呈现
- **WHEN** 用户查看「关于我」页面的教育背景区域
- **THEN** 各教育经历按时间倒序排列，信息完整显示

---

### Requirement: 联系方式
「关于我」页面 SHALL 展示联系方式，包含 GitHub、Email，可选包含 LinkedIn、微信等，点击 GitHub/Email 可直接跳转或触发邮件客户端。

#### Scenario: 联系链接可点击
- **WHEN** 用户点击「关于我」页面中的 GitHub 图标链接
- **THEN** 在新标签页打开对应的 GitHub 个人主页 URL

#### Scenario: 邮件链接
- **WHEN** 用户点击 Email 图标链接
- **THEN** 系统触发 `mailto:` 协议，打开默认邮件客户端并填入邮箱地址

---

### Requirement: 简历数据与展示分离
个人简历信息 SHALL 以结构化数据（JSON 或 TypeScript 对象）存储于独立文件（如 `docs/.vitepress/theme/data/resume.ts`），由 Vue 组件读取并渲染，不直接硬编码于 Markdown 中。

#### Scenario: 更新简历信息
- **WHEN** 开发者修改简历数据文件中的工作经历内容
- **THEN** 重新构建后「关于我」页面自动反映最新内容，无需修改 Vue 组件代码
