import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  // 默认使用根路径，适用于开发环境、Netlify、Vercel 等
  let baseUrl = '/'
  
  // 只有当环境变量明确指定了 BASE_URL 时才覆盖（例如通过命令行）
  if (process.env.VITE_BASE_URL) {
    baseUrl = process.env.VITE_BASE_URL
  } 
  // EdgeOne 的特殊逻辑保留（如果需要）
  else if (process.env.VITE_EDGEONE === 'true') {
    baseUrl = '/' 
  }

  return {
    plugins: [vue()],
    base: baseUrl, // 这里使用计算出来的 baseUrl
    server: {
      port: 3000,
      open: true
    }
  }
})
