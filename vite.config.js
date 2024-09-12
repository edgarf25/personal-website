import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',   // The output directory for the build
    rollupOptions: {
      input: './index.html', // Ensure the correct input file is used
    },
  },
  server: {
    open: true,  // Automatically opens the app in the browser
  },
});
