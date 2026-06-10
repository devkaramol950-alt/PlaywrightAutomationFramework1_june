import{Page} from '@playwright/test'

export class pimPage{
    readonly page:Page;

    constructor(page:Page){
        this.page = page;
    }

    get clickPimLink() {
        return this.page.getByRole('link',{name:'PIM'});
    }

    get clickAddButton (){
        return this.page.getByRole('button',{name:'Add'});
    }
    get employeeFullNameText(){
        return this.page.getByText('Employee Full Name');
    }

    get firstName(){
        return this.page.getByPlaceholder('First Name')
    }

    get lastName(){
        return this.page.getByPlaceholder('Last Name')
    }

    get clickSaveBtn(){
        return this.page.getByRole('button',{name:'Save'})
    }
    get personalDetailHeading (){
        return this.page.getByRole('heading',{name:'Personal Details'})
    }

    async addEmployee(firstName:String,lastName:String){
       await this.clickPimLink.click();
       await this.clickAddButton.click();
       await this.firstName.fill('firstName');
       await this.lastName.fill('lastName');
       await this.clickSaveBtn.click();

    }   
}


