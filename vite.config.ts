import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Importante para Electron en producción: usar rutas relativas en dist/
  base: './',
  server: {
    port: 5173,
    strictPort: true,
  },
})
