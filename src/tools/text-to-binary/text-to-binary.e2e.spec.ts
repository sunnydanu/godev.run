import { expect, test } from '@playwright/test';

test.describe('Tool - Text to ASCII binary', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/text-to-binary');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('GoDev.Run - Text to ASCII binary');
  });

  test('Text to binary conversion', async ({ page }) => {
    await page.getByTestId('text-to-binary-input').fill('godev.run');
    const binary = await page.getByTestId('text-to-binary-output').inputValue();

    expect(binary).toEqual('01100111 01101111 01100100 01100101 01110110 00101110 01110010 01110101 01101110');
  });

  test('Binary to text conversion', async ({ page }) => {
    await page.getByTestId('binary-to-text-input').fill('01100111 01101111 01100100 01100101 01110110 00101110 01110010 01110101 01101110');
    const text = await page.getByTestId('binary-to-text-output').inputValue();

    expect(text).toEqual('godev.run');
  });
});
