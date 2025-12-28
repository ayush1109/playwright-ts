import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AccountCreated extends BasePage {
    private readonly accountCreated: Locator;
    private readonly continueButton: Locator;

    constructor(page: Page) {
        super(page);
        this.accountCreated = page.getByText('Account Created!');
        this.continueButton = page.getByRole('link', {name: 'Continue'});
    }

    async accountVisible() {
       await this.verifyElementVisible(this.accountCreated);
    }

    async clickContinue() {
        await this.clickButton(this.continueButton);
    }
}