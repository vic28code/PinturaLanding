// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'public', // usa la carpeta /public como punto de entrada
  build: {
    outDir: '../dist',        // guarda el build final fuera de public/
    emptyOutDir: true         // limpia la carpeta antes de construir
  }
})
