const {  test, chromium } = require("@playwright/test");

// What's a small win you hand recently ?? , like that could be anything

test('handle child window' , async ()=>{

    const browser = await chromium.launch({headless : false});
    const context = await browser.newContext();
    const page = await browser.newPage();

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const docLink =  page.locator('[href*="documents-request"]');

    const [newPage] = Promise.all([
        context.waitForEvent('page'), // listen for new page 
        docLink.click() // new page is opened
    ])

    text = await newPage.locator('.red').textContext();

})