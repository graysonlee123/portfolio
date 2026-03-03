import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap"
import { defineConfig, envField } from "astro/config";

const site = (() => {
  switch (process.env.VERCEL_ENV) {
    case 'production': {
      return 'https://www.graysn.com/'
    }
    case 'preview': {
      return 'https://www.preview.graysn.com/'
    }
    default: {
      return 'http://localhost:4321'
    }
  }
})()

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "material-theme",
    },
  },
  devToolbar: {
    enabled: false,
  },
  env: {
    schema: {
      PUBLIC_FORMSPREE_FORM_ID: envField.string({
        context: 'client',
        access: 'public',
        length: 8,
      }),
    },
  },
});
