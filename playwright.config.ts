import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  globalSetup: './global.setup.ts',
  fullyParallel: true,
  use: {
    baseURL: 'https://reqres.in'
  },
  reporter: [
    ['html'],
    ['list'],
    ['allure-playwright']
  ],
});
