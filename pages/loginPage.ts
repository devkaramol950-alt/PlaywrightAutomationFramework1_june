import { Page } from "@playwright/test";

export class LoginPage{
    readonly page:Page;
   

    constructor (page:Page){
        this.page= page;
    }

    get usernameInput (){
        return this.page.getByPlaceholder('Username');

    }

    get passwordInput(){
        return this.page.getByPlaceholder('Password');
    }

    get loginButton(){
        return this.page.getByRole('button',{name:'Login'});
    }

    get errormessage(){
        return this.page.getByText('Invalid credentials')
    }

    async gotoLoginPage(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    async login(username: string,password:string){
        await this.gotoLoginPage();
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
     }

}