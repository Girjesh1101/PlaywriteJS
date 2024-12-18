const { test, chromium } = require("@playwright/test");

test('Screenshot & Visual comparision' , async ()=>{

    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // await expect( page.locator("#displayed-text")).toBeVisible();
    await page.locator('#displayed-text').screenshot({path:'pss.png'}); // element ss
    await page.locator("#hide-textbox").click();
    await page.screenshot({path : 'screenshort.png'});  // whole ss
    // await expect(page.locator("#displayed-text")).toBeHidden();

    await page.waitForTimeout(5000);
    
})

// screenshot - store -> screenshot ->

test('Visual', async ()=>{

    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();

    await page.goto('https://m.rediff.com/');
    await expect(await page.screenshot()).toMatchSnapshot('landing.png');
})