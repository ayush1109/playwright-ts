import { test } from '../../src/fixtures/MyFixture';
import { deleteUser } from '../../src/utils/deleteUser';
import { loginUser } from '../../src/utils/loginUser';
import { registerUser } from '../../src/utils/registerUser';
import * as data from '../test-data/test-data.json';

test.describe('Register user scenarios', async () => {

    test.beforeEach(async ({ page, baseURL, homePage, loginPage }) => {
        await page.goto(baseURL + 'login');

        await homePage.verifyLogoIsVisible();
        await homePage.clickSignOption();
        await loginPage.verifySignUpHeadingVisible();
        await registerUser(page);
    })

    test('test register functionality', async ({ page, homePage, loginPage, accountDeleted }) => {
        await homePage.verifyLoggedInUser(data.firstName + " " + data.lastName);
        await homePage.clickDeleteAccount();

        await accountDeleted.accountVisible();
        await accountDeleted.clickContinue();
    })

    test('test register functionality with existing email', async ({ page, homePage,loginPage }) => {
        await homePage.clickLogout();

        await loginPage.verifyLoginHeadingVisible();
        await loginPage.enterName(data.firstName + " " + data.lastName);
        await loginPage.enterEmailInSignupForm(data.email);
        await loginPage.clickSignUp();
        await loginPage.verifyErrorMessageSignupVisible();

        await loginUser(page);
        await deleteUser(page);
    })

})