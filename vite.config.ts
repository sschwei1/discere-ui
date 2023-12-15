import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    checker({
      typescript: true
    }),
  ],
  resolve: {
    alias: {
      // add aliases defined in tsconfig.json
      "@": "/src",
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@layout": "/src/layout",
    }
  }
})
