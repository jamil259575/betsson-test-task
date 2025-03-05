import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../../../page-objects/login/login-page";
import { ShoppingPage } from "../../../page-objects/shopping/shopping-page";
import { testCredentials } from "../../../constants/test-accounts/test-accounts";
import { ShoppingCartOverviewPage } from "../../../page-objects/shopping-cart/shopping-cart-overview-page";
import { CheckoutCustomerInfoPage } from "../../../page-objects/checkout/checkout-customer-info-page";
import { CheckoutOverviewPage } from "../../../page-objects/checkout/checkout-overview-page";
import { CheckoutCompletePage } from "../../../page-objects/checkout/checkout-complete-page";

type CombinedFixtures = {
  shoppingPage: ShoppingPage;
  shoppingCartOverView: ShoppingCartOverviewPage;
  checkoutCustomerInfo: CheckoutCustomerInfoPage;
  checkoutOverview: CheckoutOverviewPage;
  checkoutComplete: CheckoutCompletePage;
};
export const test = baseTest.extend<CombinedFixtures>({
  shoppingPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.fillElement(
        loginPage.username,
        testCredentials.STANDARD_USERNAME,
    );
    await loginPage.fillElement(
        loginPage.password,
        testCredentials.STANDARD_PASSWORD,
    );
    await loginPage.clickButton(loginPage.loginButton);
    const shoppingPage = new ShoppingPage(page);
    await use(shoppingPage);
  },

  shoppingCartOverView: async ({ page }, use) => {
    const shoppingCartOverView = new ShoppingCartOverviewPage(page);
    await use(shoppingCartOverView);
  },

  checkoutCustomerInfo: async ({ page }, use) => {
    const checkoutCustomerInfo = new CheckoutCustomerInfoPage(page);
    await use(checkoutCustomerInfo);
  },

  checkoutOverview: async ({ page }, use) => {
    const checkoutOverview = new CheckoutOverviewPage(page);
    await use(checkoutOverview);
  },

  checkoutComplete: async ({ page }, use) => {
    const checkoutComplete = new CheckoutCompletePage(page);
    await use(checkoutComplete);
  },
});
