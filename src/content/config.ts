import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
    type: 'content',
        schema: z.object({
            title: z.string(),
            author: z.string(),
            cover: z.string().optional(),
            alt: z.string().optional(),
            tags: z.array(z.string()).optional(),
            draft: z.boolean().default(false),
    }),
});

export const collections = {
  articles,
};