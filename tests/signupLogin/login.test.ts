import { test } from '../../src/fixtures/MyFixture';
import { registerUser } from '../../src/utils/registerUser';

import * as data from '../test-data/test-data.json';

test.describe('Login user scenarios', async () => {

    test.beforeEach(async ({ page, baseURL, homePage }) => {
        await page.goto(baseURL);

        await homePage.verifyLogoIsVisible();
    })

    test('test Login functionality', async ({ page, homePage, loginPage, accountDeleted }) => {

        await homePage.clickSignOption();

        await loginPage.verifySignUpHeadingVisible();

        await registerUser(page);

        await homePage.clickLogout();

        await loginPage.verifyLoginHeadingVisible();
        await loginPage.enterEmailInLoginForm(data.email);
        await loginPage.enterPassword(data.password);
        await loginPage.clickLogin();

        await homePage.verifyLoggedInUser(data.firstName + " " + data.lastName);
        await homePage.clickDeleteAccount();

        await accountDeleted.accountVisible();

    })

    test('test incorrect login functionality', async ({homePage, loginPage }) => {

        await homePage.clickSignOption();

        await loginPage.verifyLoginHeadingVisible();
        await loginPage.enterEmailInLoginForm(data.incorrectEmail);
        await loginPage.enterPassword(data.incorrectPassword);
        await loginPage.clickLogin();
        await loginPage.verifyErrorMessageVisible();
    })
})