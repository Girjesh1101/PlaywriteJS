import { Locator, Page } from "@playwright/test";

export class CartPage {

    page : Page;
    product : Locator;
    checkoutBtn : Locator;

    constructor(page:Page){
        this.page = page ;
        this.product = page.locator(`h3:has-text('ZARA COAT 3')`);
        this.checkoutBtn = page.locator('text=Checkout');


    }

    async productValidation(){

        
        const isProductVisible = await this.product.isVisible();
        console.log(isProductVisible);

        await this.checkoutBtn.click();

    }
}

module.exports = {CartPage};