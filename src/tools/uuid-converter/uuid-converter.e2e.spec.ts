import { expect, test } from '@playwright/test';

test.describe('Tool - UUID converter', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/uuid-converter');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('GoDev.Run - UUID converter');
  });
});
