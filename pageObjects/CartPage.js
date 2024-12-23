class CartPage {

    constructor(page){
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