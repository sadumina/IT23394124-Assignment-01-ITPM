const { test, expect } = require('@playwright/test');

//Test Case: Pos_Fun_0001//

test('Pos_Fun_0001: Translate a simple greeting question', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');

  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('oyaata kohomadha?');

  await expect(page.getByText('ඔයාට කොහොමද?')).toBeVisible();
});

//Test Case: Pos_Fun_0002//

test('Pos_Fun_0002: Translate a common farewell phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mama gedhara yanavaa');
  await expect(page.getByText('මම ගෙදර යනවා')).toBeVisible();
});

//Test Case: Pos_Fun_0003//


test('Pos_Fun_0003: Translate a question about well-being', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', { 
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('aayuboovan!');
  await expect(page.getByText('ආයුබෝවන්!')).toBeVisible();
} );  

//Test Case: Pos_Fun_0004//

test('Pos_Fun_0004: Translate a statement about going to school', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mama kalin gedhara giyaa');
  await expect(page.getByText('මම කලින් ගෙදර ගියා')).toBeVisible();
} );

//Test Case: Pos_Fun_0005// 

test('Pos_Fun_0005: Translate a polite request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {     
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mama heta naha mata notes tika send karanna puluvandha?');
  await expect(page.getByText('මම හෙට naha මට notes ටික send කරන්න පුලුවන්ද?')).toBeVisible();
} );

//Test Case: Pos_Fun_0006//

test('Pos_Fun_0006: Translate a sentence about Help', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {           
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('oyaata mata udhav karanna puluvandha?');
  await expect(page.getByText('ඔයාට මට උදව් කරන්න පුලුවන්ද?')).toBeVisible();
} );

//Test Case: Pos_Fun_0007//

test('Pos_Fun_0007: Translate a sentence about daily routine', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {     
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('oyaa adha gym ekata giyadha?');
  await expect(page.getByText('ඔයා අද gym එකට ගියද?')).toBeVisible();
} );

//Test Case: Pos_Fun_0008//


//Test Case: Pos_Fun_0009//