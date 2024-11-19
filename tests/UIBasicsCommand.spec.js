const { test, chromium, expect,  } = require("@playwright/test");


test('Playwright test' , async ( { browser  })=>{

    // chrome - plugins / cookies

    await chromium.launch({headless : false});
    const context = await browser.newContext();
    const page  = await context.newPage();

    page.waitForTimeout(5000);

})



test('First Playwright test' , async ( )=>{

    // chrome - plugins / cookies
    const browser = await chromium.launch({headless:false});
    const page  = await browser.newPage();

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const eTitle = await page.title();
    console.log("title" , eTitle);

   const actual = 'LoginPage Practise | Rahul Shetty Academy'

//    await expect(eTitle).toEqual(actual);

    // page.waitForTimeout(5000);

})
