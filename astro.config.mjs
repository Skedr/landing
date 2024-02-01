import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    tailwind(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push", "fbq"],
      },
    }),
  ],
  site: "https://skedr.io",
});
