import { Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly signLogOption: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signLogOption = page.locator('//a[@href="/login"]');
    }

    async clickSignOption() {
        await this.signLogOption.click();
    }

}