import compress from 'astro-compress';
import { defineConfig } from 'astro/config';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  integrations: [compress()],
  vite: {
    plugins: [visualizer()],
  },
});
