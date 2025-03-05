import {BasePage} from "../base-page";
import { Page } from "@playwright/test";

export class ShoppingCartOverviewPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }
    readonly continueShoppingButton  = this.page.getByTestId("continue-shopping");
    readonly checkoutButton = this.page.getByTestId('checkout')
    readonly cardContainer = this.page.getByTestId('cart-contents-container')
}
