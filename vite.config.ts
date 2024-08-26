import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@api': resolve(__dirname, 'src/api'),
      '@services': resolve(__dirname, 'src/services'),
      '@hooks': resolve(__dirname, 'src/hooks'),
    },
  },
});
