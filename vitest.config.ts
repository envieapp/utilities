import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [],
  test: {
    globals: true,
    coverage: {
      reporter: ['text', 'json-summary'],
    },
  },
});
