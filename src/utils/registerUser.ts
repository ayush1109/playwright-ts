import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/SignupPage';
import { AccountCreated } from '../pages/AccountCreated';
import * as data from '../../tests/test-data/test-data.json'

export async function registerUser(page: Page) {

    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    const accountCreated = new AccountCreated(page);

    await loginPage.enterName(data.firstName + " " + data.lastName);
    await loginPage.enterEmailInSignupForm(data.email);
    await loginPage.clickSignUp();

    // const signupPage = new SignupPage(page);

    await signupPage.clickTitle();
    await signupPage.selectDay(data.day);
    await signupPage.selectMonth(data.month);
    await signupPage.selectCheckBox();
    await signupPage.enterPassword(data.password);
    await signupPage.enterFirstName(data.firstName);
    await signupPage.enterLastName(data.lastName);
    await signupPage.enterAddress(data.address);
    await signupPage.enterState(data.state);
    await signupPage.enterCity(data.city);
    await signupPage.enterZipCode(data.zipCode);
    await signupPage.enterMobile(data.mobile);
    await signupPage.clickCreateAccount();

    // const accountCreated = new AccountCreated(page);

    await accountCreated.accountVisible();
    await accountCreated.clickContinue();
}