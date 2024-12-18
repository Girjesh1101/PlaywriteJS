class loginPage{

    
    constructor(page ){

        this.page = page ;
        this.userName = page.locator('#userEmail');
        this.password =  page.locator('#userPassword');
        this.signButton = page.locator('#login');
     
    }

    async goTo(){

        await this.page.goto('https://rahulshettyacademy.com/client');
    }

    async validLogin(username , password){
        //'anshika@gmail.com'
        //'Iamking@000'
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signButton.click();
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = {loginPage}