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

//the reason for the above test case is to verify that the translation system does not return an incorrect translation when punctuation is altered.

//Test Case: Neg_Fun_0002//

test('Neg_Fun_0002: Translate a polite request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', { 
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mn ada lectuers ynawa oya enwd mchn');
  await expect(page.getByText('මං අද ලෙක්චර්ස් යනවා ඔයා එනවද මචං')).toBeVisible();
});

