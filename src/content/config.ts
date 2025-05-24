import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "content",
schema: (entry) => {
  console.log('entry.id:', entry?.id) // 🧠 see what's going on

  return z.object({
    title: z.string().default(
      (entry?.id ?? 'untitled')
        .replace(/\.md$/, '')
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())
    ),
    subtitle: z.string().optional(),
    subtitle2: z.string().optional(),
  });
}

});

export const collections = {
  pages,
};
