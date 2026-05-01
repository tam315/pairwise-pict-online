import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({ jsxImportSource: '@emotion/react' }),
  ],
  build: {
    outDir: 'out',
  },
});
