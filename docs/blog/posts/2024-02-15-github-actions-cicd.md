---
title: "用 GitHub Actions 搭建你的第一条 CI/CD 流水线"
date: 2024-02-15
tags: [GitHub Actions, DevOps, 工具链]
description: 从零开始配置一条完整的 CI/CD 流水线：自动测试、构建、部署，全程无需离开 GitHub。
---

# 用 GitHub Actions 搭建你的第一条 CI/CD 流水线

GitHub Actions 是目前最容易上手的 CI/CD 工具之一——配置文件放在仓库里，推送即触发，无需额外注册和配置第三方服务。

## 核心概念

在写配置之前，先理清几个术语：

| 概念 | 说明 |
|------|------|
| **Workflow** | 一个 `.yml` 文件，定义完整的自动化流程 |
| **Event** | 触发 workflow 的事件（push、PR、定时等） |
| **Job** | workflow 中的一个工作单元，可并行或串行 |
| **Step** | job 中的一个步骤，执行命令或调用 action |
| **Action** | 可复用的步骤封装，来自官方或社区 |

## 一个最简单的例子

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci
      - run: npm test
```

推送到 `main` 或提 PR 时，这条流水线自动运行。

## 添加部署步骤

测试通过后，接着部署到生产：

```yaml
  deploy:
    needs: test          # 依赖 test job 成功
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'  # 只在 main 分支部署
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm run build
      # 将 dist/ 部署到你的服务器或平台
```

## 使用 Secrets 保护凭证

永远不要把 token 写进配置文件。在仓库 Settings → Secrets and variables → Actions 中添加，然后通过环境变量引用：

```yaml
      - name: Deploy
        env:
          DEPLOY_TOKEN: ${{ secrets.DEPLOY_TOKEN }}
        run: ./deploy.sh
```

## 小结

Actions 的学习曲线很平缓——从一个最简单的 `ci.yml` 开始，随需求逐步扩展。官方 Marketplace 里有大量现成 action，大多数场景不需要自己写 shell 脚本。
