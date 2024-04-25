import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import rehypeFigure from "rehype-figure";
import markdoc from "@astrojs/markdoc";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    tailwind(),
    sitemap(),
    markdoc({
      allowHTML: true,
    }),
    mdx(),
  ],
  site: "https://skedr.io",
  image: {
    domains: ["images.unsplash.com"],
  },
  markdown: {
    rehypePlugins: [rehypeFigure],
  },
});
