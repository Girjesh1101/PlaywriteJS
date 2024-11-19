const {  test, chromium, expect } = require("@playwright/test");

test('handle dropdown ' , async ()=>{

    const browser = await chromium.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    await page.locator('#username').fill('abc');
    await page.locator('#password').fill('learning');

    //handle radio

    await page.locator('.radiotextsty').last().click();
    await page.waitForTimeout(2000);

    await page.locator('#okayBtn').click();

    expect(page.locator(".radiotextsty").last()).toBeChecked();

    await page.locator('#terms').click();
    await expect( page.locator('#terms')).toBeChecked();
    // unchecked checkbox
    await page.locator('#terms').uncheck();



    // Handle dropdown
    //select by text/ label
    // await page.locator('select.form-control').selectOption({label:'Teacher'});
    
     //select by value
    // await page.locator('select.form-control').selectOption({value:'consult'});

    //select by index
    await page.locator('select.form-control').selectOption({index:1});
    
    //check the above link is blining or not

    await expect( page.locator('[href*="documents-request"]')).toHaveAttribute('class','blinkingText');

    await page.waitForTimeout(5000);


})