import { Page } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

export async function deleteUser(page: Page) {
    const homePage = new HomePage(page);
    
    await homePage.clickDeleteAccount();
}