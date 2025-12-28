import {Page, Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage{
    private readonly nameInput: Locator;
    private readonly emailInput: Locator;
    private readonly signupButton: Locator

    constructor(page: Page) {
        super(page);
        this.nameInput = page.getByPlaceholder('Name');
        this.emailInput = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
        this.signupButton = page.getByRole('button', {name: 'Signup'});
    }
    
    async enterName(name: string) {
        await this.enterValue(this.nameInput, name)
    }

    async enterEmail(email: string) {
        await this.enterValue(this.emailInput, email)
    }

    async clickSignUp() {
        await this.clickButton(this.signupButton);
    }
}