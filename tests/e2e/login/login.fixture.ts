import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../../../page-objects/login/login-page";
import { ShoppingPage } from "../../../page-objects/shopping/shopping-page";

type CombinedFixtures = {
  loginPage: LoginPage;
  shoppingPage: ShoppingPage;
};
export const test = baseTest.extend<CombinedFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await use(loginPage);
  },

  shoppingPage: async ({ page }, use) => {
    const shoppingPage = new ShoppingPage(page);
    await use(shoppingPage);
  },
});
