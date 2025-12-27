import {test, expect, Page} from '@playwright/test';
import {HomePage} from '../../src/pages/HomePage';
import { LoginPage } from '../../src/pages/LoginPage';

test('test register functionality', async({page, baseURL}) => {

    await page.goto(baseURL);
    await expect(page.getByAltText('Website for automation practice')).toBeVisible();

    const homePage = new HomePage(page);

    homePage.clickSignOption();
    await expect(page.getByText('New User Signup!')).toBeVisible();

    const loginPage = new LoginPage(page);

    // await page.getByPlaceholder('Name').fill('dfgdfg');

    loginPage.enterName('abc');
    loginPage.enterEmail('abc@ss.com');
    loginPage.clickSignUp();
})