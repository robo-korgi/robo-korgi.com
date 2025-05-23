import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  base: '/robo-korgi.com/', // Required for GitHub Pages
  integrations: [tailwind(), sitemap()],
});