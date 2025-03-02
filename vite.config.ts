import { getConfig } from '@moogur/vite-config';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) =>
  getConfig({
    mode,
  }),
);
