import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Substitua o host pelo IP da sua máquina (10.0.0.177)
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: {
      host: '10.0.0.177',
      protocol: 'ws',
    },
  },
})

