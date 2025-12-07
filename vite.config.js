import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  // 开发环境用 '/'，生产环境用 GitHub Pages 路径
  base: mode === 'production' ? '/Fan-AI-Tools-and-Learning-Website/' : '/',
  server: {
    port: 3000,
    open: true
  }
}))
