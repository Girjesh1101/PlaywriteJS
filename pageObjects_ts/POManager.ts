// const {loginPage} = require('./loginPage');
import { loginPage } from "./loginPage";
import { DashboardPage } from "./DashboardPage";
import { CartPage } from "./CartPage";
import { CheckoutPage } from "./CheckoutPage";
import { MyOrderPage } from "./MyOrderPage";
import { Page } from "@playwright/test";

export class POManager {

    //this is the page object Manager.
    //where we are store all the class object in onc place where you can call with the POManager object only
    // benifits you don't need to create multiple objects 

    loginPage : loginPage;
    DashboardPage : DashboardPage;
    cartPage :CartPage;
    checkoutPage : CheckoutPage;
    myOrderPage : MyOrderPage;
    page : Page;

    constructor(page:Page){
        this.page = page ;
        this.DashboardPage  = new DashboardPage(this.page);
        this.loginPage = new loginPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.checkoutPage = new CheckoutPage(this.page);
        this.myOrderPage = new MyOrderPage(this.page);
    }

    getLoginPage(){
        return this.loginPage;
    }

    getDashboardPage(){
        return this.DashboardPage;
    }

    getCartPage(){
        return this.cartPage;
    }

    getCheckoutPage(){
        return this.checkoutPage;
    }
    
    getMyOrderPage(){
        return this.myOrderPage;
    }
}

module.exports = {POManager}