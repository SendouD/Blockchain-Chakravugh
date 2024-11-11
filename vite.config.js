import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    force: true,  // Forces pre-bundling
  },
  plugins: [react()],
})
