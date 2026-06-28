import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Always serve assets from root — fixes blank screen on Vercel/Netlify
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})