import { Locator, Page } from "@playwright/test";

export class loginPage{

    page : Page;
    userName : Locator;
    password : Locator;
    signButton: Locator;

    
    constructor(page : Page){

        this.page = page ;
        this.userName = page.locator('#userEmail');
        this.password =  page.locator('#userPassword');
        this.signButton = page.locator('#login');
     
    }

    async goTo(){

        await this.page.goto('https://rahulshettyacademy.com/client');
    }

    async validLogin(username : string , password : string){
        //'anshika@gmail.com'
        //'Iamking@000'
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signButton.click();
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = {loginPage}