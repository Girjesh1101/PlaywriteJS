const {loginPage} = require('./loginPage');
const { DashboardPage } = require('./DashboardPage');


class POManager {

    //this is the page object Manager.
    //where we are store all the class object in onc place where you can call with the POManager object only
    // benifits you don't need to create multiple objects 

    constructor(page){
        this.page = page ;
        this.DashboardPage = new DashboardPage(this.page);
        this.loginPage = new loginPage(this.page);

    }

    getLoginPage(){
        return this.loginPage;
    }

    getDashboardPage(){
        return this.DashboardPage;
    }
}

module.exports = {POManager}