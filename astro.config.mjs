import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://elite-casino-insider.pages.dev',
  build: {
    format: 'directory'
  }
});
