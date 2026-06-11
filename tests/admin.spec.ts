import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';

test('Admin Page open successfully', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.loginPage.gotoLoginPage();
  await pm.loginPage.login('Admin', 'admin123');
  await pm.loginPage.login;
  await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();

  await pm.adminPage.clickAdmin.click();
  await pm.adminPage.clickAddbtn.click();
  await expect(page.getByRole('heading',{name:'Add User',exact:true})).toBeVisible();
});