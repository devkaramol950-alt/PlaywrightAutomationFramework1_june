import{test,expect} from '@playwright/test'
import { PageManager } from '../pages/pageManager';



test('should add a new employee successfully',async ({page})=>{

    const pm = new PageManager(page)
    
    await pm.loginPage.gotoLoginPage();
    await pm.loginPage.login('admin','admin123');

    await expect(pm.dashboardPage.dashboardHidding).toBeVisible();
   
    const userData = await pm.helper.generateUserData();
    console.log(userData);

    await pm.pimPage.addEmployee(userData.firstName,userData.lastName);
    await expect(pm.pimPage.personalDetailHeading).toBeVisible();

    await pm.pimPage.addEmployee(userData.firstName,userData.middleName);

})

