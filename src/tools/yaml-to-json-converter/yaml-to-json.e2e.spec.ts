import { expect, test } from '@playwright/test';

test.describe('Tool - Yaml to json', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/yaml-to-json-converter');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('GoDev.Run - YAML to JSON converter');
  });

  test('Yaml is parsed and output clean json', async ({ page }) => {
    await page.getByTestId('input').fill('foo: bar\nlist:\n  - item\n  - key: value');

    const generatedJson = await page.getByTestId('area-content').innerText();

    expect(generatedJson.trim()).toEqual(
      `
{
   "foo": "bar",
   "list": [
      "item",
      {
         "key": "value"
      }
   ]
}
   `.trim(),
    );
  });
});
