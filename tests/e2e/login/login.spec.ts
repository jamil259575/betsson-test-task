import { test } from "./login.fixture";
import { testCredentials } from "../../../constants/test-accounts/test-accounts";

test.describe("Login page tests", () => {
  test("when user adds valid credentials, it should be able to login", async ({
    loginPage,
    shoppingPage,
  }) => {
    await loginPage.fillElement(
      loginPage.username,
      testCredentials.STANDARD_USERNAME,
    );
    await loginPage.fillElement(
      loginPage.password,
      testCredentials.STANDARD_PASSWORD,
    );
    await loginPage.clickButton(loginPage.loginButton);
    await shoppingPage.checkElementIsVisible(shoppingPage.inventoryList);
    await shoppingPage.checkElementIsVisible(shoppingPage.openMenuButton);
    await shoppingPage.checkElementIsVisible(shoppingPage.sortProductContainer);
    await shoppingPage.checkElementIsVisible(shoppingPage.shoppingCartLink);
  });

  test("when user adds credentials for blocked user, it should see error message", async ({
    loginPage,
  }) => {
    await loginPage.fillElement(
      loginPage.username,
      testCredentials.LOCKED_OUT_USER,
    );
    await loginPage.fillElement(
      loginPage.password,
      testCredentials.STANDARD_PASSWORD,
    );
    await loginPage.clickButton(loginPage.loginButton);
    await loginPage.checkElementIsVisible(loginPage.errorMessage);
  });

  test("when user submits only username for credentials, it should see error message", async ({
    loginPage,
  }) => {
    await loginPage.fillElement(
      loginPage.username,
      testCredentials.STANDARD_USERNAME,
    );
    await loginPage.clickButton(loginPage.loginButton);
    await loginPage.checkElementIsVisible(loginPage.errorMessage);
  });

  test("when user submits only password for credentials, it should see error message", async ({
    loginPage,
  }) => {
    await loginPage.fillElement(
      loginPage.password,
      testCredentials.STANDARD_PASSWORD,
    );
    await loginPage.clickButton(loginPage.loginButton);
    await loginPage.checkElementIsVisible(loginPage.errorMessage);
  });

  test("when user submits empty credentials, it should see error message", async ({
    loginPage,
  }) => {
    await loginPage.fillElement(loginPage.username, testCredentials.EMPTY);
    await loginPage.fillElement(loginPage.password, testCredentials.EMPTY);
    await loginPage.clickButton(loginPage.loginButton);
    await loginPage.checkElementIsVisible(loginPage.errorMessage);
  });
});
