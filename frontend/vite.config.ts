import path from 'path'
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@domain': path.resolve(__dirname, './src/domain'),
      '@cards': path.resolve(__dirname, './src/domain/cards'),
      '@components': path.resolve(__dirname, './src/components'),
      '@range': path.resolve(__dirname, './src/domain/range'),
    },
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
