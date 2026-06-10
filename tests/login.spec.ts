import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import testdata from '../testdata/testData..json'
import { PageManager } from '../pages/pageManager';
import { ExcelUtil } from "../utils/excelUtils";

test('should login successfully and display dashboard', async({page})=>{

    const loginpage = new LoginPage(page);
    await loginpage.gotoLoginPage();
    await loginpage.login(testdata.username,testdata.password);
    await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
})

test('should login successfully and display the dashboard',async ({page})=>{

    const pm = new PageManager(page)
    await pm.loginPage.gotoLoginPage();
    await pm.loginPage.login(testdata.username,testdata.password);
    await expect(pm.dashboardPage.dashboardHidding).toBeVisible();
})

test('should display error messange for invalid crediantials',async ({page})=>{

    const pm = new PageManager(page)

    await pm.loginPage.gotoLoginPage();

    const userData = ExcelUtil.getData('./testData/loginData.xlsx','invalidLogin',0)
    console.log(userData);
    await pm.loginPage.login(userData.username,userData.password);
    await expect(pm.loginPage.errormessage).toBeVisible();
});


