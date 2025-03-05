import { test } from "../base-order-process.fixture";
import { items } from "../../../../constants/test-items/test-items";
import { TEST_CUSTOMER_DETAILS } from "../../../../constants/test-accounts/test-accounts";

test.describe("Successful user checkout & order", () => {
  test("when user adds items to the cart, it should be able to checkout and order successfully", async ({
    productPage,
    shoppingCartOverView,
    checkoutCustomerInfo,
    checkoutOverview,
    checkoutComplete,
  }) => {
    await productPage.addItemToCart([items.T_SHIRT,items.BACKPACK,items.BIKE_LIGHT]);
    await productPage.clickButton(productPage.shoppingCartLink);
    await shoppingCartOverView.clickButton(shoppingCartOverView.checkoutButton);
    await checkoutCustomerInfo.fillElement(
      checkoutCustomerInfo.customerFirstName,
      TEST_CUSTOMER_DETAILS.FIRST_NAME,
    );
    await checkoutCustomerInfo.fillElement(
      checkoutCustomerInfo.customerLastName,
      TEST_CUSTOMER_DETAILS.TEST_SURNAME,
    );
    await checkoutCustomerInfo.fillElement(
      checkoutCustomerInfo.postalCode,
      TEST_CUSTOMER_DETAILS.TEST_POSTAL_CODE,
    );
    await checkoutCustomerInfo.clickButton(checkoutCustomerInfo.continueButton);
    await checkoutCustomerInfo.checkItemCount(3)
    await checkoutOverview.clickButton(checkoutOverview.finishCheckoutButton);
    await checkoutComplete.checkElementIsVisible(
      checkoutComplete.checkoutCompleteText,
    );
    await checkoutComplete.checkElementIsVisible(
      checkoutComplete.backHomeButton,
    );
  });
});
