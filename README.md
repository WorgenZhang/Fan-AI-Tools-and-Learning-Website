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
package.json -> scripts -> dev

```bash
npm run dev
```

开发服务器将在 `http://localhost:3000` 启动


### 构建生产版本
package.json -> scripts -> build/deploy

```bash
npm run build
cd dist && git add -A && git commit -m "update" && git push -f origin gh-pages
# npm run deploy
```

### 预览生产版本
package.json -> scripts -> preview

```bash
npm run preview
```

### 配置 GitHub Pages
1. vite.config.js -> base: '/Fan-AI-Tools-and-Learning-Website/'
2. 打开仓库：https://github.com/WorgenZhang/Fan-AI-Tools-and-Learning-Website
3. 点击 Settings（设置）
4. 左侧菜单找到 Pages
5. 在 Source 选择：
- Branch: gh-pages
- Folder: / (root)
6. 点击 Save
稍等几分钟后，你的网站将发布在：https://worgenzhang.github.io/Fan-AI-Tools-and-Learning-Website/


### Useful Websites
1. /Users/zhangfan/Desktop/Fan-AI-Tools-Website/src/components/WebsiteCard.vue
2. /Users/zhangfan/Desktop/Fan-AI-Tools-Website/src/data/usefulWebsites.js
3. 卡片尺寸740*940

### Netlify网站部署
1. 阿里云域名列表：https://dc.console.aliyun.com/next/index?spm=5176.100251.111252.4.4a1c4f15qKvfrH&/#/domain-list/all
2. 阿里云域名DNS解析配置：https://dnsnext.console.aliyun.com/authoritative
3. Netlify项目：https://app.netlify.com/teams/worgenzhang/projects

### 图片压缩
1. cwebp -q 80  黑白水墨画.png -o 黑白水墨画.webp


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
