// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pretitle: z.string(),
      pubDate: z.date(),
      description: z.string(),
      intro: z.string(),
      image: z.string(),
      tags: z.array(z.string()),
      time: z.number()
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};