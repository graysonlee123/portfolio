import mdx from "@astrojs/mdx";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.graysn.com",
  integrations: [mdx()],
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
