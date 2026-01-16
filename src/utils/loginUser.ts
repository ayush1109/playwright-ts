import { Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import * as data from '../../tests/test-data/ui/test-data.json';
import { HomePage } from "../pages/HomePage";

export async function loginUser(page: Page) {
    const loginPage = new LoginPage(page);

    await loginPage.enterEmailInLoginForm(data.email);
    await loginPage.enterPassword(data.password);
    await loginPage.clickLogin();

    const homePage = new HomePage(page);
    
    await homePage.verifyLoggedInUser(data.firstName + " " + data.lastName);
}