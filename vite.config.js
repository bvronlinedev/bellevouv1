import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {},
    }),
  ],

  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      assets: '/src/assets',
      lib: '/src/lib',
    },
  },

  base: '/',
}))