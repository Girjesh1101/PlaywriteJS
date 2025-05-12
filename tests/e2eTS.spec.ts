// const { test, chromium, expect } = require("@playwright/test");
import { Browser, chromium, Page , test} from "@playwright/test";
import { TestCase } from "@playwright/test/reporter";

// Json ->string -> js object
const data = JSON.parse(JSON.stringify(require("../utils/placeorderTestData.json")));

const {POManager} = require('../pageObjects/POManager');


// run test case is in pareller or sequence mode
// test.describe.configure({mode:'parallel', retries:1 , timeout:5000})

// use for loop only if you have multiple data in your utils files
for(const dataset of data){

test(`@E2E end 2 end login for ${dataset.productName}` ,async () =>{

    // const productName  = 'ZARA COAT 3';
    // const email = 'Prem@yopmail.com';
    // const password  = 'Prem@123';

    const browser : Browser = await chromium.launch({headless : false});
    const page : Page = await browser.newPage();

    // await page.goto('https://rahulshettyacademy.com/client');
    // await page.locator('#userEmail').fill('anshika@gmail.com');
    // await page.locator('#userPassword').fill('Iamking@000');
    // await page.locator('#login').click();

     // calling with POMnager

     const poManagerObj = new POManager(page);
    // const loginPageObj = new loginPage(page);
    const loginPageObj = poManagerObj.getLoginPage();
    await loginPageObj.goTo();
    await loginPageObj.validLogin(dataset.email , dataset.password);

    // await page.waitForLoadState('networkidle');
    // const title = await page.locator('.card-body b').allTextContents();
    // console.log(title);

    // const product = page.locator('.card-body');
    // const productCount = await product.count();

    // for(let i =0 ; i < productCount ; i++){

    //     const item = await product.nth(i).locator('b').textContent();
    //     if(item === productName){
    //         // add to cart
    //         await product.nth(i).locator("text='Add To Cart'").click();
    //         break;
    //     }
    // }

    // await page.locator("[routerlink*='cart']").click();

    // const dashboardObj = new DashboardPage(page);
    const dashboardObj = poManagerObj.getDashboardPage();
    await dashboardObj.selectProduct(dataset.productName);
    await dashboardObj.navigateToCart();

    // await page.locator('div li').first().waitFor();

    // const isProductVisible = await page.locator(`h3:has-text('ZARA COAT 3')`).isVisible();
    // console.log(isProductVisible);
    // expect(isProductVisible).toBeTruthy();

    // await page.locator('text=Checkout').click();

    const cartPageObj = poManagerObj.getCartPage();
    cartPageObj.productValidation();

    // await page.locator("[placeholder*='Select Country']").pressSequentially("ind");

    // const dropdown = page.locator('.ta-results');
    // await dropdown.waitFor();
    // const optionCount = await dropdown.locator("button").count();

    // for(let i = 0 ; i< optionCount ; i++){

    //     const countryName = await dropdown.locator('button').nth(i).textContent();
    //     if(countryName === ' India'){

    //         await dropdown.locator("button").nth(i).click();
    //         break;
    //     }
    // }

    const checkoutPageObj = poManagerObj.getCheckoutPage();
    checkoutPageObj.detailsForm();

    // assertion for 

    // expect( await page.locator('.details__user div label')).toHaveText('anshika@gmail.com');

    // await page.locator('.action__submit').click();

    checkoutPageObj.validateDetails(dataset.email);

    const myOderPageObj = poManagerObj.getMyOrderPage(page);
    myOderPageObj.validateProductOrder();
    await page.waitForTimeout(5000);


})
}

test('@Web google', async()=>{

    const browser = await chromium.launch({headless : false});
    const page = await browser.newPage();

    page.goto('https://www.google.com');
})

test('@Web youtube', async()=>{

    const browser = await chromium.launch({headless : false});
    const page = await browser.newPage();

    page.goto('https://www.youtube.com');
})