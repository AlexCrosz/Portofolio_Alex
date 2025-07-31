import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portofolio_Alex/', // Ganti sesuai nama repo kamu
  plugins: [react()],
});
