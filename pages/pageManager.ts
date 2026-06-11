import { Page } from "@playwright/test";
import { LoginPage} from "./loginPage";
import { DashboardPage } from "./dashboardPage";
import { pimPage } from "./pimPage";
import { Helper } from "../utils/helper";
import { AdminPage } from "./adminPage";



export class PageManager{
    readonly page: Page;
    readonly loginPage:LoginPage;
    readonly dashboardPage: DashboardPage;
    readonly pimPage:pimPage
    readonly helper:Helper;
    readonly adminPage:AdminPage;
    

    constructor(page: Page){
        this.page=page;
       this.loginPage= new LoginPage(page);
        this.dashboardPage = new DashboardPage(page);
        this.pimPage = new pimPage(page);
        this.helper = new Helper();
        this.adminPage= new AdminPage(page);
    }
}