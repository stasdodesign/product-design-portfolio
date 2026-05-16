import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')

  return {
    plugins: [react(), tailwindcss()],

    // 💥 ВАЖНО: путь должен совпадать с деплоем
    base: '/apps/garage/',

    build: {
      outDir: 'dist',
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  }
})