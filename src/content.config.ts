import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const postsCollection = defineCollection({
  // The glob loader uses each post's existing frontmatter slug as its ID,
  // preserving public blog URLs instead of exposing source filenames.
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    pretitle: z.string(),
    pubDate: z.date(),
    description: z.string(),
    intro: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    time: z.number(),
  }),
});
export const collections = {
  posts: postsCollection,
};
