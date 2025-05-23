import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://robo-korgi.com',
  base: '/',
  integrations: [tailwind(), sitemap()],
  build: {
    assets: 'assets',
    assetsPrefix: '',
    format: 'directory',
  }
});
