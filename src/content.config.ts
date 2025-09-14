import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
    loader: glob({
        pattern: "**/*.{md,mdx}",
        base: "./src/content/articles" }),
    schema: z.object({
        draft: z.boolean().default(true),
        publishDate: z.coerce.date(),
        title: z.string(),
        cover: z.string(),
        alt: z.string(),
        author: z.string(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = { articles };