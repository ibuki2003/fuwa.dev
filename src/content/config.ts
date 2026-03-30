import { z, defineCollection } from "astro:content";

export const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    date: z.date(),
    appendCss: z.string().optional(),
    appendJs: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
