import { LaunchOptions } from '@playwright/test';
const browserOptions: LaunchOptions = {
  channel: 'chrome',
  headless: false,
};

export const config = {
  browser: process.env.BROWSER || 'chromium',
  browserOptions,
  BASE_URL: 'https://www.sapfioneer.com',
  IMG_THRESHOLD: { threshold: 0.4 },
};
