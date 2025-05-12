import test, { Browser, chromium , Page , expect, Locator, FrameLocator} from "@playwright/test";

test('practices', async()=>{

    // Handle Radio buttons
    const browser:Browser = await chromium.launch({headless:false});
    const page : Page = await browser.newPage();

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const title : string  = await page.title();
    console.log("title : ", title);

    await page.locator("[type='radio']").last().check();
    expect(page.locator("[value='radio3']")).toBeChecked();

    await page.locator("[value='radio2']").check();
    expect(page.locator("[value='radio2']")).toBeChecked();

    //Handle Checkboxs

    await page.locator('[type="checkbox"]').first().check();
    expect(page.locator('#checkBoxOption1')).toBeChecked();

    await page.locator('#checkBoxOption3').check();
    expect(page.locator('#checkBoxOption3')).toBeChecked();


    // mouse Action

    await page.locator("h1").dblclick();

    await page.locator("h1").click({button: "right"});

    await page.locator('#mousehover').hover();

    await page.locator('#hide-textbox').click();

    //Select Option dropdown

    await page.locator('#dropdown-class-example').selectOption({value: "option2"});
    
    await page.locator('#dropdown-class-example').selectOption('option3');

    // Multiple selected items
    // await page.getByLabel('Choose multiple colors').selectOption(['red', 'green', 'blue']);


    //Nevigation

    await page.goto("https://www.google.com/");
    await page.goBack();
    // await page.goForward();


    // handle Alert 

    page.on('dialog' , dialog => dialog.accept());

    await page.locator('#confirmbtn').click();

    // Check element is visible or not
    // await expect( page.locator("#displayed-text")).toBeVisible();

    //handling frame

    const frameLocator : FrameLocator  = await page.frameLocator('#courses-iframe')
    frameLocator.locator("li a[href='lifetime-access']:visible").click();

    const text   = await frameLocator.locator('.text h2').textContent();
    console.log(text);
    
    

    await page.waitForTimeout(5000);

})