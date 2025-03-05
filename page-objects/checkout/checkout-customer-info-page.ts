import { BasePage } from "../base-page";
import { Page } from "@playwright/test";

export class CheckoutCustomerInfoPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }
    readonly customerFirstName  = this.page.getByTestId("firstName");
    readonly customerLastName = this.page.getByTestId('lastName')
    readonly postalCode = this.page.getByTestId('postalCode')
    readonly continueButton = this.page.getByTestId('continue')
}
