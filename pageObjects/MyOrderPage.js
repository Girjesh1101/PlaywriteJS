class MyOrderPage{

    constructor(page){

        this.page = page ;
        this.orderId = page.locator('.ng-star-inserted td label');
        this.myOrderBtn = page.locator('button[routerlink*="myorder"]');
        this.rows = page.locator('tbody tr');


    }

    async validateProductOrder(){

        const orderId = await this.orderId.last().textContent();
        console.log(this.orderId);

        await this.myOrderBtn.click();
    
        await this.page.locator('tbody').waitFor();

        for(let i = 0 ;  i < await this.rows.count() ; i++ ){

            const orderNumber = await this.rows.nth(i).locator('th').textContent();
            console.log(orderNumber);
    
            if(orderId.includes(orderNumber)){
                await this.rows.nth(i).locator('button').first().click();
                break;
            }
    
        }
    }
}

module.exports = {MyOrderPage};