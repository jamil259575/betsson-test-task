import { test } from "../base-order-process.fixture";
import { items } from "../../../../constants/test-items/test-items";
import { TEST_CUSTOMER_DETAILS } from "../../../../constants/test-accounts/test-accounts";

test.describe("Customer info page validation tests", () => {
  test("when customer submits empty fields on customer info page, it should show error message", async ({
    productPage,
    shoppingCartOverView,
    checkoutCustomerInfo,
  }) => {
    await productPage.addItemToCart([items.T_SHIRT, items.BACKPACK]);
    await productPage.clickButton(productPage.shoppingCartLink);
    await shoppingCartOverView.clickButton(shoppingCartOverView.checkoutButton);
    await checkoutCustomerInfo.clickButton(checkoutCustomerInfo.continueButton);
    await checkoutCustomerInfo.checkElementIsVisible(
      checkoutCustomerInfo.errorMessage,
    );
  });

  test("when customer submits only first name on customer info page, it should show error message", async ({
    productPage,
    shoppingCartOverView,
    checkoutCustomerInfo,
  }) => {
    await productPage.addItemToCart([items.T_SHIRT, items.BACKPACK]);
    await productPage.clickButton(productPage.shoppingCartLink);
    await shoppingCartOverView.clickButton(shoppingCartOverView.checkoutButton);
    await checkoutCustomerInfo.fillElement(
      checkoutCustomerInfo.customerFirstName,
      TEST_CUSTOMER_DETAILS.FIRST_NAME,
    );
    await checkoutCustomerInfo.clickButton(checkoutCustomerInfo.continueButton);
    await checkoutCustomerInfo.checkElementIsVisible(
      checkoutCustomerInfo.errorMessage,
    );
  });
});
