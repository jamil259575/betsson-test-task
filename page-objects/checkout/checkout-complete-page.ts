import { BasePage } from "../base-page";
import { Page } from "@playwright/test";

export class CheckoutCompletePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }
    readonly backHomeButton = this.page.getByTestId('back-to-products')
    readonly checkoutCompleteText = this.page.getByTestId('complete-text')
}
