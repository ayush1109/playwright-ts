import { BasePage } from '../pages/BasePage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/SignupPage';
import { AccountCreated } from '../pages/AccountCreated';
import { AccountDeleted } from '../pages/AccountDeleted';

export type pages = {
    basePage: BasePage;
    homePage: HomePage;
    loginPage: LoginPage;
    signupPage: SignupPage;
    accountCreated: AccountCreated;
    accountDeleted: AccountDeleted;

}