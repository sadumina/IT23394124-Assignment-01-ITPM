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

test('Pos_Fun_0008: Translate a sentence about studying', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('heta mata exam . oyata  exam dh ?');
  await expect(page.getByText('හෙට මට exam . ඔයට exam ද් ?')).toBeVisible();
} );


//Test Case: Pos_Fun_0009//

test('Pos_Fun_0009: Translate a sentence about education', async ({ page }) => {  
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mama Linkedin account ekak hadhanava.');
  await expect(page.getByText('මම Linkedin account එකක් හදනව.')).toBeVisible();
} );

//Test Case: Pos_Fun_0010//

test('Pos_Fun_0010: Translate a sentence about making plans', async ({ page }) => {  
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('labana sadudha nivadu nisa mn hithuve trip ekak yanna oni kiyala mage idea ekak tiyenva kandy yanna kiyala oylath kamathi nm enna mageth ekka yanna .');
  await expect(page.getByText('ලබන සඩුද නිවඩු නිස ම්න් හිතුවෙ trip එකක් යන්න ඔනි කියල mage idea එකක් ටියෙන්ව kandy යන්න කියල ඔය්ලත් කමති න්ම් එන්න මගෙත් එක්ක යන්න .')).toBeVisible();
}
  );

//Test Case: Pos_Fun_0011//

test('Pos_Fun_0011: Translate a sentence about making plans', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('Good morning mage name eka sadumina mn 3rd year student kenek mage home town eka bandarawela mn karanne IT degree ekak . mata me sem eke assignment ekak thiyenwa eka tiynne playwright eken test cases test krnna man kalin igen gen nh eth dan eka igen ganna gamn eka maru .mn hithenwa me assignment ekt mata hodha mark ekak thiyeyi kiyala');
  await expect(page.getByText('Good morning mage name එක සඩුමින ම්න් 3rd year student කෙනෙක් mage home town එක bandarawela ම්න් කරන්නේ IT degree එකක් . මට මෙ සෙම් eke assignment එකක් තියෙනwඅ එක ටිය්න්නෙ playwright එකෙන් test cases test ක්‍රන්න man කලින් ඉගෙන් ගෙන් න්හ් එත් ඩන් එක ඉගෙන් ගන්න ගම්න් එක මරු .ම්න් හිතෙනwඅ මෙ assignment එක්ට් මට හොද mark එකක් තියෙයි කියල')).toBeVisible();
} );

//Test Case: Pos_Fun_0012//

