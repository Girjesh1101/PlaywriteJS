import { Browser, chromium, Locator, Page , test} from "@playwright/test"



test('launch google', async ()=>{

    const browser : Browser = await chromium.launch({headless:false});
    const page : Page = await browser.newPage();

    await page.goto("https://www.google.com/");

    console.log(await page.title());

    const searchBox : Locator = page.locator("textarea[name='q']");
    searchBox.fill("playwright typescript");

    const listOfSearch:string[] =await page.locator("li div[class='lnnVSe']").allTextContents();
    
})