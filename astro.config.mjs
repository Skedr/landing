import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import rehypeFigure from 'rehype-figure'

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind(), sitemap()],
  site: "https://skedr.io",
  markdown: {
    rehypePlugins: [rehypeFigure]
  }
});
