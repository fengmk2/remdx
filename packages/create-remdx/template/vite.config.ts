import remdx from '@nkzw/vite-plugin-remdx';
import react from '@vitejs/plugin-react';
import { defineConfig } from '@voidzero-dev/vite-plus';

export default defineConfig({
  plugins: [remdx(), react()],
});
