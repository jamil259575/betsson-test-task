import { test } from "../base-order-process.fixture";
import { items } from "../../../../constants/test-items/test-items";

test.describe("Shopping cart item tests", () => {
  test("when user adds & removes items on products page, it should update the item count value on shopping cart icon", async ({
    productPage,
  }) => {
    await productPage.addItemToCart([items.T_SHIRT,items.BACKPACK,items.BIKE_LIGHT]);
    await productPage.checkShoppingCartValueUpdate("3");
    await productPage.removeItemFromCart([items.BIKE_LIGHT,items.T_SHIRT]);
    await productPage.checkShoppingCartValueUpdate("1");
  });

  test("when user adds items to the cart, it should be able to remove items on cart overview page", async ({
    productPage,shoppingCartOverView
  }) => {
    await productPage.addItemToCart([items.T_SHIRT,items.BIKE_LIGHT]);
    await productPage.clickButton(productPage.shoppingCartLink)
    await shoppingCartOverView.checkItemCount(2)
    await shoppingCartOverView.removeItemFromCart([items.T_SHIRT,items.BIKE_LIGHT])
    await shoppingCartOverView.checkItemCount(0)
  });
});
