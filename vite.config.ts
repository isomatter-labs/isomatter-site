import { sveltekit } from '@sveltejs/kit/vite';
import { threeMinifier } from '@yushijinhun/three-minifier-rollup';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit(), threeMinifier()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {},
      },
    },
  },
});
