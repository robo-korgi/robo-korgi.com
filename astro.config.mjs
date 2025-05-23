import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  base: '/robo-korgi.com/', // ← This line is critical
  integrations: [tailwind(), sitemap()],
})
