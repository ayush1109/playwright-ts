import { expect, Locator, Page } from "@playwright/test";

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickButton(field: Locator) {
        await field.click();
    }

    async enterValue(field: Locator, value: string) {
        await field.fill(value);
    }

    async clickCheckbox(field: Locator) {
        await field.check();
    }

    async selectDropdown(field: Locator, value: string) {
        await field.selectOption({value: value});
    }

    async verifyElementVisible(field: Locator) {
        await expect(field).toBeVisible();
    }

    async verifyTextOfElement(field: Locator, text: string) {
        await expect(field).toHaveText(text);
    }

    async uploadSingleFile(field: Locator, path: string) {
        await field.setInputFiles(path);
    }

    async uploadMultipleFiles(field: Locator, [...paths]: string) {
        await field.setInputFiles(paths);
    }
    
    async handleAlert() {
        this.page.on('dialog', dialog => dialog.accept());
    }

}