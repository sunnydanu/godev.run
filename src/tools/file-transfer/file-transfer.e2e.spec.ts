import { test, expect } from '@playwright/test';

test.describe('Tool - Send files', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/send-files');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Send files');
  });

  test('', async ({ page }) => {

  });
});