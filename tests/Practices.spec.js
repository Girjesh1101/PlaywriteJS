const {test, chromium } = require("@playwright/test");

test('Playwright special locators' , async ()=>{

    const browser = await chromium.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('https://rahulshettyacademy.com/angularpractice/');

    await page.getByLabel('Check me out if you Love IceCreams!').check();

    await page.getByLabel('Employed').check();

    await page.getByLabel('Gender').selectOption({label:'Female'});

    await page.getByPlaceholder('Password').fill('TestPassword');

    await page.getByRole('button' , {name:'Submit'}).click();

    await page.getByText('Success! The Form has been submitted successfully!.').isVisible();

    await page.getByRole('link', {name:"Shop"}).click();

    await page.locator('app-card').filter({hasText: 'Nokia Edge'}).getByRole('button').click();



    await page.waitForTimeout(5000);

})
