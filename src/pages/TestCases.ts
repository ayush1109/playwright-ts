import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class TestCases extends BasePage {
    private readonly testCases: Locator;

    constructor(page: Page) {
        super(page);
        this.testCases = page.getByRole('heading', {name: 'Test Cases'}).nth(0);
    }

    async verifyTestCasesVisible() {
        await this.verifyElementVisible(this.testCases);
    }

}