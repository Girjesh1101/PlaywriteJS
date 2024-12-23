class CheckoutPage{

    constructor(page){

        this.page = page ;
        this.countryTxtBox = page.locator("[placeholder*='Select Country']");
        this.dropdown = page.locator('.ta-results');
        this.submitBtn = page.locator('.action__submit');
        this.label = page.locator('.details__user div label');


    }

    async detailsForm(){

        await this.countryTxtBox.pressSequentially("ind");
        await this.dropdown.waitFor();
        const optionCount = await this.dropdown.locator("button").count();

        for(let i = 0 ; i< optionCount ; i++){

            const countryName = await this.dropdown.locator('button').nth(i).textContent();
            if(countryName === ' India'){
    
                await this.dropdown.locator("button").nth(i).click();
                break;
            }
        }
    }

    async validateDetails(email){
        // expect( await this.label).toHaveText(email);
        await this.submitBtn.click();
    }
}

module.exports = {CheckoutPage};