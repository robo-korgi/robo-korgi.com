// src/content/config.ts
import { defineCollection, z } from 'astro:content'

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    subtitle2: z.string(),
  }),
})

export const collections = {
  pages,
}
