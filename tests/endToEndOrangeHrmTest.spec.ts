import{test,expect} from '@playwright/test';

test.only('End-to-End Test for OrangeHRM', async ({page}) => {

    //Navigate to the OrangeHRM login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();  

    await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();

    //click on the PIM module
    await page.getByRole('link',{name:'PIM'}).click();

    //validate the PIM page is visible
    await expect(page.getByRole('heading',{name:'PIM',exact:true})).toBeVisible();

    //click on add button
    await page.getByRole('button',{name:'Add'}).click();

    //vaidate the add employee page is visible
    await expect(page.getByText('Employee Full Name')).toBeVisible();

    //fill the employee details
    await page.getByPlaceholder('First Name').type('ram')

    await page.getByPlaceholder('Last Name').type('shinde')

    //emplyee id should be auto generated
    const employeeId = await page.locator('.oxd-input-group')
    .filter({has: page.locator('label', {hasText:'Employee Id'})})
    .locator('.oxd-input.oxd-input--active');

    const employeeIdValue = "0018"
    await employeeId.fill(employeeIdValue); 

   console.log('Generated Employee ID:',employeeIdValue);

   await page.getByRole('button',{name:'Save'}).click();

   //validate the personal details page is visible
   await expect(page.getByRole('heading',{name:'Personal Details'})).toBeVisible();

   //edit the employee details
    await page.getByRole('link',{name:'PIM'}).click();
    await employeeId.fill(employeeIdValue);
    await page.getByRole('button',{name:'Search'}).click();

    //table locator to find the employee in the search results  
    const employee = page.locator('.oxd-table-card').filter({hasText: employeeIdValue});

    await expect(employee).toBeVisible();

    await employee.click();

   await expect(page.getByRole('heading',{name:'Personal Details'})).toBeVisible();

    await expect(page.getByPlaceholder('First Name')).toHaveValue('ram');
    await expect(page.getByPlaceholder('Last Name')).toHaveValue('shinde');

    //other ID
    await page.locator('.oxd-input-group')
    .filter({has:page.locator('label',{hasText:'Other Id'})})
    .locator('.oxd-input.oxd-input--active').fill('12345');


    //Driver's License Number
    await page.locator('.oxd-input-group')
    .filter({has: page.locator('label',{hasText:"Driver's License Number"})})
    .locator('.oxd-input.oxd-input--active').fill('MH2095');

    //Licence Expiry date
    //Normal way to handle the calendar
    await page.locator('.oxd-input-group')
    .filter({has:page.locator('label',{hasText:'License Expiry Date'})})
    .getByPlaceholder('yyyy-dd-mm').fill('2002-07-12');

    await expect( await page.locator('.oxd-input-group')
    .filter({has:page.locator('label',{hasText:'License Expiry Date'})})
    .getByPlaceholder('yyyy-dd-mm')).toHaveValue('2002-07-12');


    //Nationality

   const nationalitydropdown = page.locator('.oxd-input-group')
   .filter({has:page.locator('label',{hasText:'Nationality'})})
   .locator('.oxd-select-text-input')

   await nationalitydropdown.click();

    await page.getByRole('option', {name: 'Indian'}).click();

    await expect(nationalitydropdown).toContainText('Indian');


    //Marital Status
    const MatritalDropdown = page.locator('.oxd-input-group')
    .filter({has:page.locator('label',{hasText:'Marital Status'})})
    .locator('.oxd-select-text-input')

    await MatritalDropdown.click();
     
    await page.getByRole('option',{name:'Single'}).click();

    await expect(MatritalDropdown).toContainText('Single');

    //Alternative way to handle the calendar
     const calendar = page.locator('.oxd-input-group')
    .filter({has:page.locator('label',{hasText:'Date of Birth'})})
    .getByPlaceholder('yyyy-dd-mm')

    await calendar.click();

    const year='2000';
    const month = 'May';
    const day = '17';

    const calendarDropdown = page.locator('.oxd-date-input-calendar')
    await calendarDropdown.waitFor({state:'visible',timeout:15000});

    await calendarDropdown.getByText('2026').click();
    await calendarDropdown.getByText(year).click();

    await calendarDropdown.getByText('June').click();
    await calendarDropdown.getByText(month).click();
    await calendarDropdown.getByText(day).click();  

    await expect(calendar).toHaveValue('2000-17-05')



});