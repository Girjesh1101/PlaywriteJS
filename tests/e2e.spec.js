const { test, chromium, expect } = require("@playwright/test");

test('end 2 end ' ,async () =>{

    const productName  = 'ZARA COAT 3';

    const browser = await chromium.launch({headless : false});
    const page = await browser.newPage();

    await page.goto('https://rahulshettyacademy.com/client');

    await page.locator('#userEmail').fill('anshika@gmail.com');
    await page.locator('#userPassword').fill('Iamking@000');
    await page.locator('#login').click();

    await page.waitForLoadState('networkidle');
    const title = await page.locator('.card-body b').allTextContents();
    console.log(title);

    const product = page.locator('.card-body');
    const productCount = await product.count();

    for(let i =0 ; i < productCount ; i++){

        const item = await product.nth(i).locator('b').textContent();
        if(item === productName){
            // add to cart
            await product.nth(i).locator("text='Add To Cart'").click();
            break;
        }
    }

    await page.locator("[routerlink*='cart']").click();

    await page.locator('div li').first().waitFor();

    const isProductVisible = await page.locator(`h3:has-text('ZARA COAT 3')`).isVisible();
    console.log(isProductVisible);
    // expect(isProductVisible).toBeTruthy();

    await page.locator('text=Checkout').click();

    await page.locator("[placeholder*='Select Country']").pressSequentially("ind");

    const dropdown = page.locator('.ta-results');
    await dropdown.waitFor();
    const optionCount = await dropdown.locator("button").count();

    for(let i = 0 ; i< optionCount ; i++){

        const countryName = await dropdown.locator('button').nth(i).textContent();
        if(countryName === ' India'){

            await dropdown.locator("button").nth(i).click();
            break;
        }
    }

    // assertion for 

    expect( await page.locator('.details__user div label')).toHaveText('anshika@gmail.com');

    await page.locator('.action__submit').click();

    // expect(await page.locator("h1[class='hero-primary']")).toHaveText(' Thankyou for the order. ');

    const orderId = await page.locator('.ng-star-inserted td label').last().textContent();
    console.log(orderId);

    await page.locator('button[routerlink*="myorder"]').click();
    
    await page.locator('tbody').waitFor();

    const rows = await page.locator('tbody tr');

    for(let i = 0 ;  i < await rows.count() ; i++ ){

        const orderNumber = await rows.nth(i).locator('th').textContent();
        console.log(orderNumber);

        if(orderId.includes(orderNumber)){
            await rows.nth(i).locator('button').first().click();
            break;
        }

    }
    
    const orderIDDetails = await page.locator('div.col-text').textContent();

    // expect(orderId.includes(orderIDDetails)).toBeTruthy();


    await page.waitForTimeout(5000);


})