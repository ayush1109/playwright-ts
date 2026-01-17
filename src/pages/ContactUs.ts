import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ContactUs extends BasePage {
    private readonly getInTouch: Locator;
    private readonly name: Locator;
    private readonly email: Locator;
    private readonly subject: Locator;
    private readonly message: Locator;
    private readonly file: Locator;
    private readonly submit: Locator;
    private readonly successMessage: Locator;
    private readonly homeButton: Locator;

    constructor(page: Page) {
        super(page);
        this.getInTouch = page.getByRole('heading', {name: 'Get In Touch'});
        this.name = page.getByPlaceholder('Name');
        this.email = page.getByRole('textbox', {name: 'email'}).nth(0);
        this.subject = page.getByPlaceholder('Subject');
        this.message = page.getByTestId('message');
        this.file = page.locator('input[name="upload_file"]');
        this.submit = page.getByRole('button', {name: 'Submit'});
        this.successMessage = page.locator('div.alert-success').nth(0);
        this.homeButton = page.locator('//a[@href="/"]/span');
    }

    async verifyGetInTouchVisible() {
        await this.page.waitForLoadState('load');
        await this.verifyElementVisible(this.getInTouch);
    }

    async enterName(name: string) {
        await this.enterValue(this.name, name);
    }

    async enterEmail(email: string) {
        await this.enterValue(this.email, email);
    }

    async enterSubject(subject: string) {
        await this.enterValue(this.subject, subject);
    }
    
    async enterMessage(message: string) {
        await this.enterValue(this.message, message);
    }

    async uploadFile(path: string) {
        await this.uploadSingleFile(this.file, path);
    }

    async clickSubmit() {
        this.page.on('dialog', dialog => dialog.accept());
        await this.clickButton(this.submit);
    }

    async verifySuccessMessage() {
        await this.verifyElementVisible(this.successMessage);
    }

    async clickHomeButton() {
        await this.clickButton(this.homeButton);
    }

}