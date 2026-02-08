import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.graysn.com',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'material-theme',
    },
  },
  devToolbar: {
    enabled: false,
  },
})
