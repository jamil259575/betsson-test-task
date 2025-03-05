import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../../../page-objects/login/login-page";
import { ProductPage } from "../../../page-objects/products/product-page";

type CombinedFixtures = {
  loginPage: LoginPage;
  productPage: ProductPage;
};
export const test = baseTest.extend<CombinedFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await use(loginPage);
  },

  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    await use(productPage);
  },
});
