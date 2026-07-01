// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://kajehdecor.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  vite: {
    css: {
      preprocessorOptions: {},
    },
  },
});
