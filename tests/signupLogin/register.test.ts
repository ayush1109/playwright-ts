import {test, expect, Page} from '@playwright/test';
import {HomePage} from '../../src/pages/HomePage';
import { LoginPage } from '../../src/pages/LoginPage';
import { SignupPage } from '../../src/pages/SignupPage';
import { AccountCreated } from '../../src/pages/AccountCreated';
import { AccountDeleted } from '../../src/pages/AccountDeleted';

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
    await signupPage.selectDay();
    await signupPage.selectMonth();
    await signupPage.selectCheckBox();
    await signupPage.enterPassword('abcd');
    await signupPage.enterFirstName('abcd');
    await signupPage.enterLastName('abcd');
    await signupPage.enterAddress('abcd');
    await signupPage.enterState('abcd');
    await signupPage.enterCity('abcd');
    await signupPage.enterZipCode('abcd');
    await signupPage.enterMobile('abcd');
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