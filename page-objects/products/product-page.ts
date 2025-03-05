import { BasePage } from "../base-page";
import { Page } from "@playwright/test";

export class ProductPage extends BasePage{
    constructor(page: Page) {
        super(page);
    }
    readonly inventoryList = this.page.getByTestId("inventory-list");
    readonly productsTitle = this.page.getByTestId('title');
    readonly sortProductContainer = this.page.getByTestId('product-sort-container');
    readonly shoppingCartLink = this.page.getByTestId('shopping-cart-link');
    readonly openMenuButton = this.page.getByTestId('open-menu')
}
