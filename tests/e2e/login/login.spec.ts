import { test } from "./login.fixture";
import { testCredentials } from "../../../constants/test-accounts/test-accounts";

test.describe("Login page tests", () => {

  test("when user visits login page, fields should be empty", async ({
    loginPage,
  }) => {
    await loginPage.checkInputIsEmpty(loginPage.username);
    await loginPage.checkInputIsEmpty(loginPage.password);
  });

  test("when user adds valid credentials, it should be able to login", async ({
    loginPage,
    productPage,
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
    await productPage.checkElementIsVisible(productPage.inventoryList);
    await productPage.checkElementIsVisible(productPage.openMenuButton);
    await productPage.checkElementIsVisible(productPage.sortProductContainer);
    await productPage.checkElementIsVisible(productPage.shoppingCartLink);
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
