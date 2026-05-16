import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')

  return {
    plugins: [react(), tailwindcss()],

    // 💥 ВАЖНО: теперь сайт живёт в корне
    base: '/garage/',

    define: {
      __GEMINI_API_KEY__: JSON.stringify(env.GEMINI_API_KEY),
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