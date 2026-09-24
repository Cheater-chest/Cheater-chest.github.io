---
layout: post
title: 欢迎来到我的博客
date: 2026-09-23 21:00:00 +0800
categories: [随笔]
tags: [jekyll, github-pages]
author: ZSYZ_CPY
---

这是用 Jekyll + GitHub Pages 搭建的第一篇博文，也是一份速查手册。

## 怎么写新文章

1. 在 `_posts` 目录新建文件，命名格式：`YYYY-MM-DD-标题.md`（文件名决定 URL 中的日期，标题建议用英文或拼音）。
2. 文件开头用 YAML 前页（front matter）声明 `layout: post`、`title`、`date`、`tags` 等字段。
3. 正文用 Markdown 编写。**两个空行**以上的位置会被识别为摘要截断点，首页只显示截断前的内容。

## 本地预览

```bash
bundle install
bundle exec jekyll serve
```

然后浏览器打开 <http://127.0.0.1:4000> 即可实时预览。

## 部署到 GitHub Pages

1. 把 `_config.yml` 里的 `username` 全部替换成你的 GitHub 用户名。
2. 把本仓库推送到 GitHub（仓库名取 `username.github.io` 则访问 `https://username.github.io`）。
3. 仓库 Settings → Pages → Source 选择 `main` 分支的根目录（`/`），保存后等待构建完成。

祝写作愉快！

---

## 本框架已内置：KaTeX 公式

行内公式用 `\( ... \)` 包裹，例如 `\(E = mc^2\)` 效果为 \(E = mc^2\)。

块级公式用 `$$ ... $$` 单独成段：

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

## 洛谷风格提示块

写法：引用块 + 换行加 `{: .tip}`（依次替换 tip / warning / danger / success）：

> 这是一条提示，适合补充说明。
{: .tip}

> 注意这里的边界条件！
{: .warning}

## 折叠块

```html
<details>
  <summary>点击展开</summary>
  这里是折叠内容。
</details>
```

效果：

<details>
  <summary>点击展开</summary>
  这里是折叠内容。
</details>
