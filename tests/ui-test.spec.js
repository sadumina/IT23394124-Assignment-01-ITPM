const{ test , expect } = require('@playwright/test');

test('UI_Test_001: Input feild accept text', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');
    const singlishInput = page.getByRole('textbox', {
        name: 'Input Your Singlish Text Here.'  
    });
    await singlishInput.fill('Hello yaluwane');
    await expect(singlishInput).toHaveValue('Hello yaluwane');     
}  );

//The reason for the above test case is to verify that the input field on the Swift Translator website correctly accepts and displays user-entered text in Singlish.