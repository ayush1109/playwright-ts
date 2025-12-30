import { test } from '../../src/fixtures/MyFixture';

import * as data from '../test-data/test-data.json';

test.describe('Login user scenarios', async () => {
    test('test Login functionality', async ({ page, baseURL, homePage, loginPage, accountDeleted
        , signupPage, accountCreated }) => {
        await page.goto(baseURL);

        await homePage.verifyLogoIsVisible();
        await homePage.clickSignOption();

        loginPage.verifySignUpHeadingVisible();

        // const loginPage = new LoginPage(page);

        // await page.getByPlaceholder('Name').fill('dfgdfg');

        await loginPage.enterName(data.firstName + " " + data.lastName);
        await loginPage.enterEmailInSignupForm(data.email);
        await loginPage.clickSignUp();

        // const signupPage = new SignupPage(page);

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

        // const accountCreated = new AccountCreated(page);

        await accountCreated.accountVisible();
        await accountCreated.clickContinue();

        await homePage.clickLogout();

        await loginPage.verifyLoginHeadingVisible();

        await loginPage.enterEmailInLoginForm(data.email);
        await loginPage.enterPassword(data.password);
        await loginPage.clickLogin();

        await homePage.verifyLoggedInUser(data.firstName + " " + data.lastName);
        await homePage.clickDeleteAccount();

        await accountDeleted.accountVisible();

    })
})