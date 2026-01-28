const { test, expect } = require('@playwright/test');

//Test Case: Neg_Fun_0001//
test('Neg_Fun_0001: Should not return exact punctuation-sensitive translation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');

  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  await singlishInput.fill('suba udhaesanak!');

  await expect(
    page.getByText('සුභ උදෑසනක්!')
  ).not.toBeVisible();
});
