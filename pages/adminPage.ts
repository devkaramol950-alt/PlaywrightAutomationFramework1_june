import{Page} from '@playwright/test'

export class AdminPage{
    userRoleSelect(userRoleSelect: any) {
        throw new Error('Method not implemented.');
    }
    readonly Page:Page;

    constructor(page:Page){
        this.Page=page;
    }

   
    get clickAdmin(){
        return this.Page.getByRole('link',{name:'Admin'})
    }

    get clickAddbtn(){
        return this.Page.getByRole('button',{name:'Add'})
    }

    async admin(username:string,password:string){
        await this.clickAdmin.click();
        await this.clickAddbtn.click();
        
    }
}