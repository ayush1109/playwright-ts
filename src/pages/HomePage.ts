import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{
    private readonly signLogOption: Locator;
    private readonly loggedInUser: Locator;
    private readonly deleteAccount: Locator;
    private readonly logo: Locator;
    private readonly logout: Locator;
    private readonly contactUs: Locator;

    constructor(page: Page) {
        super(page);
        this.signLogOption = page.locator('//a[@href="/login"]');
        this.loggedInUser = page.locator('//a[contains(text(), "Logged in as ")]/b');
        this.deleteAccount = page.locator('//a[contains(text(), "Delete Account")]');
        this.logout = page.locator('//a[contains(text(), "Logout")]');
        this.logo = page.getByAltText('Website for automation practice');
        this.contactUs = page.locator('//a[contains(text(), "Contact us")]');
    }

    async clickSignOption() {
        await this.clickButton(this.signLogOption);
    }

    async verifyLoggedInUser(text: string) {
        await this.verifyTextOfElement(this.loggedInUser, text);
    }

    async clickDeleteAccount() {
        await this.clickButton(this.deleteAccount);
    }

    async clickLogout() {
        await this.clickButton(this.logout);
    }

    async verifyLogoIsVisible() {
        await this.verifyElementVisible(this.logo);
    }

    async clickContactUs() {
        await this.clickButton(this.contactUs);
    }


}