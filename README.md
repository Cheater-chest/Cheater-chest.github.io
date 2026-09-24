# username 的博客

基于 **Jekyll + GitHub Pages** 的个人博客框架。开箱即用，改几个占位符即可发布。

## 目录结构

```
blogs/
├── _config.yml        # 站点主配置（标题、URL、分页、插件）
├── Gemfile            # 本地预览依赖（github-pages 官方依赖组）
├── index.html         # 首页（分页文章列表）
├── archive.md         # 归档页（按年份分组）
├── about.md           # 关于页
├── 404.html           # 404 页面
├── _layouts/          # 布局模板：default / post / page
├── _includes/         # 公共组件：head / header / footer
├── _posts/            # 博文目录，命名 YYYY-MM-DD-标题.md
├── _drafts/           # 草稿目录
└── assets/            # 静态资源：css / js / images
```

## 部署到 GitHub Pages（三步）

1. **替换占位符**：全仓库搜索 `username`（重点在 `_config.yml`、`about.md`、`_posts/` 示例文章），替换为你的 GitHub 用户名与真实信息。
2. **推送仓库**：把整个 `blogs` 文件夹作为仓库推送到 GitHub。
   - 仓库名取 **`username.github.io`** → 访问地址 `https://username.github.io`（用户页）
   - 仓库名取其他名字（如 `blogs`）→ 访问地址 `https://username.github.io/blogs`，并把 `_config.yml` 中 `baseurl` 改为 `"/blogs"`
3. **开启 Pages**：仓库 **Settings → Pages → Source** 选 `main` 分支 `/` 根目录，保存后等 1–2 分钟构建完成即可访问。

> 自定义域名：把域名写在仓库根目录的 `CNAME` 文件中，并在 DNS 服务商添加对应解析即可。

## 本地预览

需要先安装 Ruby（≥ 2.6）：

```bash
bundle install
bundle exec jekyll serve
```

浏览器打开 <http://127.0.0.1:4000>，修改文件后会自动增量刷新。

## 写新文章

在 `_posts/` 新建 `YYYY-MM-DD-标题.md`，头部格式：

```yaml
---
layout: post
title: 文章标题
date: 2026-09-23 21:00:00 +0800
categories: [分类]
tags: [标签1, 标签2]
author: username
---
```

正文用 Markdown 编写，两个空行以上的位置会作为首页摘要截断点。

## 常用维护

| 需求 | 操作 |
| --- | --- |
| 改博客名/简介 | 编辑 `_config.yml` 的 `title` / `description` |
| 加导航页 | 改 `_includes/header.html`，并新建对应页面 |
| 换配色 | 编辑 `assets/css/style.css` 顶部的 CSS 变量 |
| 改每页文章数 | 编辑 `_config.yml` 的 `paginate` |
| 删除示例文章 | 删除 `_posts/2026-09-23-welcome-to-jekyll.md` |
