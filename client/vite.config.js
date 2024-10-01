
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Increase to 1000 kB (or whatever limit you find suitable)
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Create a chunk for each package in node_modules
            const packageName = id.split('node_modules/')[1].split('/')[0];
            return packageName; // Returns the package name as the chunk name
          }
        },
      },
    },
  },
})