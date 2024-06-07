import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
export default defineConfig({
  server: {
    hmr: {
      host: "192.168.56.56",
    },
    host: "192.168.56.56",
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()],
})
