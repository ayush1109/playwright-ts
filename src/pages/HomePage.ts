import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{
    private readonly signLogOption: Locator;
    private readonly loggedInUser: Locator;
    private readonly deleteAccount: Locator;

    constructor(page: Page) {
        super(page);
        this.signLogOption = page.locator('//a[@href="/login"]');
        this.loggedInUser = page.locator('//a[contains(text(), "Logged in as ")]/b');
        this.deleteAccount = page.locator('//a[contains(text(), "Delete Account")]');
    }

    async clickSignOption() {
        await this.clickButton(this.signLogOption);
    }

    async verifyLoggedInUser() {
        await this.verifyTextOfElement(this.loggedInUser, 'abc');
    }

    async clickDeleteAccount() {
        await this.clickButton(this.deleteAccount);
    }

}