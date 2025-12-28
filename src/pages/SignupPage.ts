import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SignupPage extends BasePage{

    private readonly title: Locator;
    private readonly dayOption: Locator;
    private readonly monthOption: Locator;
    private readonly newsLetterCheckBox: Locator;
    private readonly password: Locator;
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly address: Locator;
    private readonly state: Locator;
    private readonly city: Locator;
    private readonly zipcode: Locator;
    private readonly mobile: Locator;
    private readonly createAccount: Locator;

    constructor(page: Page) {
        super(page);

        // testId matches variable name
        this.title = page.getByTestId('id_gender1');
        this.dayOption = page.getByTestId('days');
        this.monthOption = page.getByTestId('months');
        this.newsLetterCheckBox = page.getByTestId('newsletter');
        this.password = page.getByTestId('password');
        this.firstName = page.getByTestId('first_name');
        this.lastName = page.getByTestId('last_name');
        this.address = page.getByTestId('address1');
        this.state = page.getByTestId('state');
        this.city = page.getByTestId('city');
        this.zipcode = page.getByTestId('zipcode');
        this.mobile = page.getByTestId('mobile_number');
        this.createAccount = page.getByRole('button', { name: 'Create Account' });
    }

    async clickTitle() {
        await this.clickButton(this.title);
    }

    async selectDay() {
        await this.selectDropdown(this.dayOption, '2')
    }

    async selectMonth() {
        await this.selectDropdown(this.monthOption, '3')
    }

    async selectCheckBox() {
        await this.clickCheckbox(this.newsLetterCheckBox);
    }

    async enterPassword(value: string) {
       await this.enterValue(this.password, value);
    }

    async enterFirstName(value: string) {
       await this.enterValue(this.firstName, value);
    }
    
    async enterLastName(value: string) {
        await this.enterValue(this.lastName, value);
    }

    async enterAddress(value: string) {
       await this.enterValue(this.address, value);
    }

    async enterState(value: string) {
       await this.enterValue(this.state, value);
    }

    async enterCity(value: string) {
       await this.enterValue(this.city, value);
    }

    async enterZipCode(value: string) {
       await this.enterValue(this.zipcode, value);
    }

    async enterMobile(value: string) {
      await  this.enterValue(this.mobile, value);
    }

    async clickCreateAccount() {
       await this.clickButton(this.createAccount);
    }


}