import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  // 根据环境变量决定 base URL
  // VITE_BASE_URL: 自定义 base URL（优先级最高）
  // VITE_EDGEONE: EdgeOne 部署时设置为 true，使用根路径
  // 默认：开发环境用 '/'，生产环境用 GitHub Pages 路径
  let baseUrl = '/'
  
  if (process.env.VITE_BASE_URL) {
    baseUrl = process.env.VITE_BASE_URL
  } else if (process.env.VITE_EDGEONE === 'true') {
    baseUrl = '/' // EdgeOne 部署使用根路径
  } else if (mode === 'production') {
    baseUrl = '/Fan-AI-Tools-and-Learning-Website/' // GitHub Pages
  }
  
  return {
    plugins: [vue()],
    base: baseUrl,
    server: {
      port: 3000,
      open: true
    }
  }
})
