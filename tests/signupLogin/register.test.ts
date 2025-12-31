import { test } from '../../src/fixtures/MyFixture';
import { deleteUser } from '../../src/utils/deleteUser';
import { loginUser } from '../../src/utils/loginUser';
import { registerUser } from '../../src/utils/registerUser';
import * as data from '../test-data/test-data.json';

test.describe('Register user scenarios', async () => {

    test.beforeEach(async ({ page, baseURL, homePage }) => {
        await page.goto(baseURL);

        await homePage.verifyLogoIsVisible();
    })

    test('test register functionality', async ({ page, homePage, loginPage, accountDeleted }) => {

        await homePage.clickSignOption();

        await loginPage.verifySignUpHeadingVisible();

        await registerUser(page);

        await homePage.verifyLoggedInUser(data.firstName + " " + data.lastName);
        await homePage.clickDeleteAccount();

        await accountDeleted.accountVisible();
        await accountDeleted.clickContinue();
    })

    test('test register functionality with existing email', async ({ page, homePage,loginPage }) => {

        await homePage.clickSignOption();

        await loginPage.verifySignUpHeadingVisible();

        await registerUser(page);

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