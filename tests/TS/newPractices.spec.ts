import test, { Browser, chromium, Locator, Page } from "@playwright/test";

test('practices', async ()=>{

    const browser : Browser = await chromium.launch({headless:false});
    const page : Page = await browser.newPage();

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // const radioBtn : Locator = await page.locator("[type='radio']").filter()
    
})