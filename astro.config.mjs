import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import purgecss from 'astro-purgecss';
import htmlMinifier from 'astro-html-minifier';

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    purgecss({
      fontFace: true,
      keyframes: true,
    }),
  ],
  server: {
    port: 4000,
    host: true,
  },
});
