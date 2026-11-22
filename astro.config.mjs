import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import rehypeFigure from "rehype-figure";
import markdoc from "@astrojs/markdoc";
import mdx from "@astrojs/mdx";
import { unified } from "@astrojs/markdown-remark";

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    // Tag archives are noindexed (see src/pages/tags/[tag].astro); keep them out
    // of the sitemap so Search Console only receives canonical, indexable pages.
    sitemap({
      filter: (page) => !page.includes("/tags/"),
    }),
    markdoc({
      allowHTML: true,
    }),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://skedr.io",
  // Keep the existing inline whitespace while migrating to Astro's Rust compiler.
  compressHTML: true,
  image: {
    domains: ["images.unsplash.com"],
  },
  markdown: {
    processor: unified({
      rehypePlugins: [rehypeFigure],
    }),
  },
});
