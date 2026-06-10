import{Page} from '@playwright/test'

export class DashboardPage{
    readonly page : Page;

    constructor(page:Page){
        this.page= page;
    }

    get dashboardHidding(){
        return this.page.getByRole('heading',{name:'Dashboard'});
    }
}