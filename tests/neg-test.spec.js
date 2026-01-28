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

//the reason for the above test case is to ensure that the translation system can accurately translate polite requests from Singlish to Sinhala, maintaining the intended tone and meaning.

//Test Case: Neg_Fun_0003//


test('Neg_Fun_0003: Translate a sentence about weather', async ({ page }) => {  
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('adha nam office yanna bh wei meheta hodatama wassa');
  await expect(page.getByText('අඩ න්ම් office යන්න බා wඑඉ මෙහෙට හොඩටම wඅස්ස')).toBeVisible();
} );

//the reason for the above test case is to validate that the translation system can handle sentences related to weather conditions and their impact on daily activities, ensuring accurate context translation.

//Test Case: Neg_Fun_0004//

test('Neg_Fun_0004: Translate a sentence about studying', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', { 
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mata next week eke exam tiyenva issella prepare venna ona');
  await expect(page.getByText('මට next week එකේ exam තියෙනවා ඉස්සෙල්ල prepare වෙන්න ඔන')).toBeVisible();
} );

//Test Case: Neg_Fun_0005//

test('Neg_Fun_0005: Translate a sentence about studying', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('next week eke mata exam . oyata exam nadhdha?');
  await expect(page.getByText('next week එකේ මට exam . ඔයාට exam නද්ද?')).toBeVisible();
} );

//Test Case: Neg_Fun_0006//

test('Neg_Fun_0006: Translate a sentence about education', async ({ page }) => {  
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('hi mama Linkedin account ekak haduwa oyth hadaganna eka godk hodai');
  await expect(page.getByText('hi මම LinkedIn account එකක් හදුව ඔයත් හදගන්න එක ගොඩක් හොඳයි')).toBeVisible();
} );

//Test Case: Neg_Fun_0007//

test('Neg_Fun_0007: Translate a sentence about making plans', async ({ page }) => {  
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('subma subha aluth avurudhdhak wewa');
  await expect(page.getByText('සුභම සුභ අලුත් අවුරුද්දක් වේවා')).toBeVisible();
}  );

//Test Case: Neg_Fun_0008//

test('Neg_Fun_0008: Sentences containing places and common English words that should remain as they are ', async ({ page }) => {  
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('api podi kale school giye sisu sariye');
  await expect(page.getByText('අපි පොඩි කාලේ school ගියේ සිසු සරියේ')).toBeVisible();
} );