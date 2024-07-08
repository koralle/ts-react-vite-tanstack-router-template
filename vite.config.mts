/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [TanStackRouterVite(), react()],
  build: {
    target: 'esnext'
  },
  test: {
    environment: 'jsdom',
    globals: true,
    watch: false,
    coverage: {
      provider: 'v8'
    }
  }
})
