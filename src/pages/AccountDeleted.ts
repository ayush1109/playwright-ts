import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AccountDeleted extends BasePage {
    private readonly accountDeleted: Locator;
    private readonly continueButton: Locator;

    constructor(page: Page) {
        super(page);
        this.accountDeleted = page.getByText('Account Deleted!');
        this.continueButton = page.getByRole('link', {name: 'Continue'});
    }

    async accountVisible() {
       await this.verifyElementVisible(this.accountDeleted);
    }

    async clickContinue() {
        await this.clickButton(this.continueButton);
    }
}