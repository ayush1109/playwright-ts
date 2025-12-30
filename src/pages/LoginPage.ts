import {Page, Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage{
    private readonly nameInput: Locator;
    private readonly emailInputSignup: Locator;
    private readonly emailInputLogin: Locator;
    private readonly passwordInput: Locator;
    private readonly signupButton: Locator;
    private readonly loginButton: Locator;
    private readonly signupHeading: Locator;
    private readonly loginHeading: Locator;

    constructor(page: Page) {
        super(page);
        this.nameInput = page.getByPlaceholder('Name');
        this.emailInputSignup = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
        this.emailInputLogin = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.passwordInput = page.getByRole('textbox', {name: 'password'});
        this.signupButton = page.getByRole('button', {name: 'Signup'});
        this.loginButton = page.getByRole('button', {name: 'Login'});
        this.signupHeading = page.getByText('New User Signup!');
        this.loginHeading = page.getByRole('heading', {name: 'Login to your account'});
    }
    
    async enterName(name: string) {
        await this.enterValue(this.nameInput, name)
    }

    async enterEmailInSignupForm(email: string) {
        await this.enterValue(this.emailInputSignup, email)
    }

    async enterEmailInLoginForm(email: string) {
        await this.enterValue(this.emailInputLogin, email)
    }

    async enterPassword(password: string) {
        await this.enterValue(this.passwordInput, password);
    }

    async clickSignUp() {
        await this.clickButton(this.signupButton);
    }

    async clickLogin() {
        await this.clickButton(this.loginButton);
    }

    async verifySignUpHeadingVisible() {
        await this.verifyElementVisible(this.signupHeading);
    }

    async verifyLoginHeadingVisible() {
        await this.verifyElementVisible(this.loginHeading);
    }
}