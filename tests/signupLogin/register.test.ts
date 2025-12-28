import {test, expect, Page} from '@playwright/test';
import {HomePage} from '../../src/pages/HomePage';
import { LoginPage } from '../../src/pages/LoginPage';
import { SignupPage } from '../../src/pages/SignupPage';
import { AccountCreated } from '../../src/pages/AccountCreated';
import { AccountDeleted } from '../../src/pages/AccountDeleted';
import * as data from '../test-data/test-data.json';

test('test register functionality', async({page, baseURL}) => {

    await page.goto(baseURL);
    await expect(page.getByAltText('Website for automation practice')).toBeVisible();

    const homePage = new HomePage(page);

    homePage.clickSignOption();
    await expect(page.getByText('New User Signup!')).toBeVisible();

    const loginPage = new LoginPage(page);

    // await page.getByPlaceholder('Name').fill('dfgdfg');

    await loginPage.enterName('abc');
    await loginPage.enterEmail('abc@ss.com');
    await loginPage.clickSignUp();

    const signupPage = new SignupPage(page);

    await signupPage.clickTitle();
    await signupPage.selectDay(data.day);
    await signupPage.selectMonth(data.month);
    await signupPage.selectCheckBox();
    await signupPage.enterPassword(data.password);
    await signupPage.enterFirstName(data.firstName);
    await signupPage.enterLastName(data.lastName);
    await signupPage.enterAddress(data.address);
    await signupPage.enterState(data.state);
    await signupPage.enterCity(data.city);
    await signupPage.enterZipCode(data.zipCode);
    await signupPage.enterMobile(data.mobile);
    await signupPage.clickCreateAccount();

    const accountCreated = new AccountCreated(page);

    await accountCreated.accountVisible();
    await accountCreated.clickContinue();

    await homePage.verifyLoggedInUser();
    await homePage.clickDeleteAccount();

    const accountDeleted = new AccountDeleted(page);
    await accountDeleted.accountVisible();
    await accountDeleted.clickContinue();

    
})