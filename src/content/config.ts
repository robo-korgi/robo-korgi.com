import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    subtitle2: z.string().optional(),
  }),
});

export const collections = {
  pages,
};
