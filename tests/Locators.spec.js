const {  test, chromium, expect } = require("@playwright/test");

test('login page' , async () =>{

    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());

    //css , xpath

    await page.locator('#username').fill('rahulshetty');

    await page.locator('#password').fill('learning');

    await page.locator('#signInBtn').click();

    const errorMessage = await page.locator('[style*="block;"]').textContent();

    console.log("Error : ", errorMessage);

    await expect(errorMessage).toContain('Incorrect');


})

test('login page success' , async () =>{

    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();

    await page.goto('https://rahulshettyacademy.com/angularpractice/shop');
    console.log(await page.title());

    //css , xpath
   
    console.log(await page.locator('.card-body h4 a').nth(1).textContent());
    console.log(await page.locator('.card-body h4 a').first().textContent());

    const productName = await page.locator('.card-body h4 a').allTextContents();

    console.log("All : ", productName);

    await page.waitForTimeout(5000);



})

// dynamic page load 
test('new browswr' , async ()=>{

    const browser = await chromium.launch({headless : false});
    const page = await browser.newPage();

    const url ='https://rahulshettyacademy.com/client'
    await page.goto(url);

    await page.locator('#userEmail').fill('anshika@gmail.com');
    await page.locator('#userPassword').fill('Iamking@000');
    await page.locator('input[value="Login"]').click();

    // once network is idle ( complated ) then elements will present 
    await page .waitForLoadState('networkidle');
    const allProdName = await page.locator('.card-body h5 b').allTextContents();

    console.log(allProdName);


    await page.waitForTimeout(5000);


})