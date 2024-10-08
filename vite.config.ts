import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ jsxImportSource: '@emotion/react' }), svgr()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '@pages', replacement: resolve(__dirname, 'src/pages') },
      { find: '@apis', replacement: resolve(__dirname, 'src/apis') },
      { find: '@assets', replacement: resolve(__dirname, 'src/assets') },
      { find: '@components', replacement: resolve(__dirname, 'src/components') },
      { find: '@store', replacement: resolve(__dirname, 'src/store') },
      { find: '@features', replacement: resolve(__dirname, 'src/features') },
      { find: '@hooks', replacement: resolve(__dirname, 'src/hooks') },
      { find: '@mocks', replacement: resolve(__dirname, 'src/mocks') },
      { find: '@routes', replacement: resolve(__dirname, 'src/routes') },
      { find: '@utils', replacement: resolve(__dirname, 'src/utils') },
      { find: '@types', replacement: resolve(__dirname, 'src/types') },
    ],
  },
});
