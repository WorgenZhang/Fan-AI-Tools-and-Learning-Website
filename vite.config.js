import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  // 默认使用根路径
  let baseUrl = '/'

  // 关键修改：如果是部署到 GitHub Pages，需要设置为 '/仓库名/'
  // 你可以直接修改这里，或者通过环境变量控制
  if (process.env.NODE_ENV === 'production') {
    baseUrl = '/Fan-AI-Tools-and-Learning-Website/' // 替换为你的实际仓库名
  }

  // 保持你原有的逻辑
  if (process.env.VITE_BASE_URL) {
    baseUrl = process.env.VITE_BASE_URL
  }

  return {
    plugins: [vue()],
    base: baseUrl, // 确保资源引用路径正确
    server: {
      port: 3000,
      open: true
    }
  }
})