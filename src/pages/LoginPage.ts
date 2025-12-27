import {Page, Locator} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly signupButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.getByPlaceholder('Name');
        this.emailInput = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
        this.signupButton = page.getByRole('button', {name: 'Signup'});
    }
    
    async enterName(name: string) {
        await this.nameInput.fill(name);
    }

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async clickSignUp() {
        await this.signupButton.click();
    }
}