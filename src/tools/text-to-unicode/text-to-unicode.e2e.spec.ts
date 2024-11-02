import { expect, test } from '@playwright/test';

test.describe('Tool - Text to Unicode', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/text-to-unicode');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('GoDev.Run - Text to Unicode');
  });

  test('Text to unicode conversion', async ({ page }) => {
    await page.getByTestId('text-to-unicode-input').fill('godev.run');
    const unicode = await page.getByTestId('text-to-unicode-output').inputValue();

    expect(unicode).toEqual('&#103;&#111;&#100;&#101;&#118;&#46;&#114;&#117;&#110;');
  });

  test('Unicode to text conversion', async ({ page }) => {
    await page.getByTestId('unicode-to-text-input').fill('&#103;&#111;&#100;&#101;&#118;&#46;&#114;&#117;&#110;');
    const text = await page.getByTestId('unicode-to-text-output').inputValue();

    expect(text).toEqual('godev.run');
  });
});
