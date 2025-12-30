import { test as baseTest } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/SignupPage';
import { AccountCreated } from '../pages/AccountCreated';
import { AccountDeleted } from '../pages/AccountDeleted';

type pages = {
    basePage: BasePage;
    homePage: HomePage;
    loginPage: LoginPage;
    signupPage: SignupPage;
    accountCreated: AccountCreated;
    accountDeleted: AccountDeleted;

}

const testPages = baseTest.extend<pages>({
    basePage: async ({ page }, use) => {
        await use(new BasePage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    signupPage: async ({ page }, use) => {
        await use(new SignupPage(page));
    },
    accountCreated: async ({ page }, use) => {
        await use(new AccountCreated(page));
    },
    accountDeleted: async ({ page }, use) => {
        await use(new AccountDeleted(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;
