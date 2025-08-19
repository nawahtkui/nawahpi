import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// تحديد اسم المستودع على GitHub Pages إذا كان غير root
const repoName = 'nawahpi';

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // مهم للنشر على GitHub Pages
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // لتسهيل استدعاء الملفات
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
