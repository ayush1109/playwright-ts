import { test } from "../../src/fixtures/MyFixture";
import { deleteUser } from "../../src/utils/deleteUser";
import { loginUser } from "../../src/utils/loginUser";
import { registerUser } from "../../src/utils/registerUser";

test.describe('Logout user scenarios', async () => {

    test.beforeEach(async ({ page, baseURL, homePage }) => {
        await page.goto(baseURL);

        await homePage.verifyLogoIsVisible();
    })

    test('test logout functionality', async ({ page, homePage, loginPage }) => {
        await homePage.clickSignOption();

        await loginPage.verifySignUpHeadingVisible();

        await registerUser(page);

        await homePage.clickLogout();

        await loginPage.verifyLoginHeadingVisible();

        await loginUser(page);

        await deleteUser(page);
    })
})