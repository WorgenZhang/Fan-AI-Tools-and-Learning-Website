import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/Fan-AI-Tools-and-Learning-Website/', // GitHub Pages 部署路径，改为你的仓库名
  server: {
    port: 3000,
    open: true
  }
})
