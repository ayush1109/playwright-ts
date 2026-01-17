import {test} from '../../src/fixtures/MyFixture';
import * as data from '../../tests/test-data/ui/test-data.json';
import path from 'path';
test.describe('Contact scenarios', async () => {

    test.beforeEach(async ({page, baseURL, homePage}) => {
        page.goto(baseURL);
        homePage.verifyLogoIsVisible();
    })

    test('test contact us functionality', async ({homePage, contactUs}) => {
        await homePage.clickContactUs();

        await contactUs.verifyGetInTouchVisible();
        await contactUs.enterName(data.firstName + ' ' + data.lastName);
        await contactUs.enterEmail(data.email);
        await contactUs.enterSubject(data.subject);
        await contactUs.enterMessage(data.message);
        await contactUs.uploadFile(path.resolve(__dirname, '..') + data.filePath);
        await contactUs.clickSubmit();
        await contactUs.verifySuccessMessage();
        await contactUs.clickHomeButton();
        await homePage.verifyLogoIsVisible();

    })
})