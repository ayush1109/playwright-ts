import { test } from "../../src/fixtures/MyFixture";

test.describe('Test Cases Scenarios', async () => {

    test.beforeEach(async ({ page, baseURL, homePage }) => {
        await page.goto(baseURL);
        await homePage.verifyLogoIsVisible();
    })

    test('test Cases functionality', async ({testCases, homePage}) => {
        await homePage.clickTestCases();
        await testCases.verifyTestCasesVisible();
    })

    
})