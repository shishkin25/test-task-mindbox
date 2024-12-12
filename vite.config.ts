/// <reference types="vitest" />
/// <reference types="vite" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/test-task-mindbox',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
});
