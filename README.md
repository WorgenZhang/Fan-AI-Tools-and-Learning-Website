# Perplexity Blog - Vue.js

基于 Vue 3 + Vite 构建的 Perplexity 博客网站，完全还原原始设计。

## 功能特性

- ✅ 完全还原原始设计
- ✅ 响应式布局
- ✅ 文章标签系统
- ✅ 搜索功能（支持标题和标签搜索）
- ✅ 标签过滤功能
- ✅ 活动过滤器显示

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

开发服务器将在 `http://localhost:3000` 启动

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
.
├── index.html          # HTML 入口文件
├── package.json        # 项目配置
├── vite.config.js      # Vite 配置
├── src/
│   ├── main.js        # Vue 应用入口
│   ├── App.vue        # 根组件
│   ├── style.css      # 全局样式
│   ├── components/    # 组件目录
│   │   ├── Header.vue
│   │   ├── FeaturedArticle.vue
│   │   ├── SearchSection.vue
│   │   ├── BlogGrid.vue
│   │   ├── NoResults.vue
│   │   └── Footer.vue
│   └── data/
│       └── blogPosts.js  # 文章数据
└── README.md
```

## 技术栈

- Vue 3 (Composition API)
- Vite
- CSS3

## 浏览器支持

现代浏览器（Chrome, Firefox, Safari, Edge）
