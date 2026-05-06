import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  integrations: [tailwind(), compress()],
  vite: {
    plugins: [visualizer()],
  },
});
