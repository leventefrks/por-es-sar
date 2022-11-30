import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import htmlMinifier from 'astro-html-minifier';

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    purgecss({
  ],
  server: {
    port: 4000,
    host: true,
  },
});
