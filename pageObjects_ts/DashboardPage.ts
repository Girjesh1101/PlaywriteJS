import { Locator, Page } from "@playwright/test";

export class DashboardPage {

    product: Locator;
    productsText : Locator;
    cart : Locator;
    page : Page;



    constructor(page){
        
        this.page = page;
        this.product =page.locator('.card-body')
        this.productsText = page.locator('.card-body b');
        this.cart = page.locator("[routerlink*='cart']")

    }

    async selectProduct(productName:string){

    const title = await this.productsText.allTextContents();
    console.log(title);

    // const product = this.product;
    const productCount = await this.product.count();
    // console.log(productCount);
    for(let i =0 ; i < productCount ; i++){

        // const item = await this.product.nth(i).locator('b').textContent();
        if(await this.product.nth(i).locator('b').textContent() === productName){
            // add to cart
            // console.log(await this.product.nth(i).locator('b').textContent());
            await this.product.nth(i).locator("text='Add To Cart'").click();
            break;
        }
    }

    }

    async navigateToCart(){

        await this.cart.click();
        await this.page.locator('div li').first().waitFor();
    }
}

module.exports={DashboardPage};