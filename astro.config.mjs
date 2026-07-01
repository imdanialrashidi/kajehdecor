// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://imdanialrashidi.github.io',
  base: '/kajehdecor',
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
