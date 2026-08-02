// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://armandojimenez.dev',
  base: '/unique',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
