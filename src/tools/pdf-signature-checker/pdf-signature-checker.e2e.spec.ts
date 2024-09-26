import { expect, test } from '@playwright/test';

test.describe('Tool - Pdf signature checker', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/pdf-signature-checker');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('GoDev.Run - PDF signature checker');
  });
});
