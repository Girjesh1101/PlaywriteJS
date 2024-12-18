const { test, request, expect, chromium } = require("@playwright/test");

const loginPayload = {userEmail:"anshika@gmail.com", userPassword:"Iamking@000"}

test.beforeAll( async ()=>{

    const apiContext = await request.newContext();
    const loginRes = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data :loginPayload
    })

    // expect(await loginRes.status()).toBe(200);

    const loginResponseJson = await loginRes.json();
    console.log(loginResponseJson);
    const token  = loginResponseJson.token;
    console.log(token);
});

test('API test' , async()=>{
    
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();

    page.addInitScript(value =>{

        window.localStorage.setItem('token' , value);
    } , token);
    
})