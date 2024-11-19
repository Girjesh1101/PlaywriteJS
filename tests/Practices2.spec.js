const {  test, chromium, expect } = require("@playwright/test");

test('Pop Validations' , async ()=>{

    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();

    await page.goto('http://google.com');
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
   
    await page.goBack();
    await page.goForward();

    await expect(page.locator("#displayed-text")).toBeVisible();

    await page.locator("#hide-textbox").click();

    await expect(page.locator("#displayed-text")).toBeHidden();

    await page.waitForTimeout(5000);

})

test('handle Alert' , async ()=>{

    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // page.on('dialog', dialog => dialog.accept());
    page.on('dialog', dialog => dialog.dismiss());

    // await page.locator("#alertbtn");

    await page.locator('#confirmbtn').click();

    //hover 

    await page.locator('#mousehover').hover();

    await page.waitForTimeout(5000);



})