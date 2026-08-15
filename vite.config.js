import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  base: '/little-lemon-website/',
  
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],

  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname
    }
  },

})
