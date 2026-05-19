import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Si tu repo en GitHub se llama "qa-analyzer", el base debe ser "/qa-analyzer/"
// Cambialo al nombre exacto de tu repositorio GitHub
export default defineConfig({
  plugins: [react()],
  base: '/qa-analyzer/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
