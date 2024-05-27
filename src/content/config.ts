import { z, defineCollection } from "astro:content";

export const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string().optional(),
        date: z.date(),
    }),
});

export const collections = {
    posts: postsCollection,
};


