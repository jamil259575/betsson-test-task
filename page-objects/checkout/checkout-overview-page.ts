import { BasePage } from "../base-page";
import { Page } from "@playwright/test";

export class CheckoutOverviewPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }
    readonly finishCheckoutButton  = this.page.getByTestId("finish");
    readonly cartList = this.page.getByTestId('cart-list')
    readonly paymentInfoLabel = this.page.getByTestId('payment-info-label')
    readonly paymentInfoValue = this.page.getByTestId('payment-info-value')
    readonly shippingInfoLabel = this.page.getByTestId('shipping-info-label')
    readonly shippingInfoValue = this.page.getByTestId('shipping-info-value')
    readonly totalInfoLabel = this.page.getByTestId('total-info-label')
    readonly subtotalLabel = this.page.getByTestId('subtotal-label')
    readonly taxLabel = this.page.getByTestId('tax-label')
    readonly totalLabel = this.page.getByTestId('total-label')
}
