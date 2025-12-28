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
}