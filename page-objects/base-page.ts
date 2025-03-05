import { expect, Locator, Page, test } from "@playwright/test";
import { TIMEOUT_WAIT_FOR_ELEMENT } from "../constants/wait-conditions";

export abstract class BasePage {
  public url: string;
  readonly page: Page;
  readonly inventoryItem: Locator;
  readonly inventoryItemName: Locator;
  readonly inventoryItemDescription: Locator;
  readonly cancelButton: Locator;
  readonly inventoryQuantityLabel: Locator;
  readonly inventoryDescriptionLabel: Locator;
  readonly shoppingCartItemCount: Locator;
  readonly errorMessage: Locator;

  protected constructor(page: Page) {
    this.page = page;
    this.inventoryItem = page.getByTestId("inventory-item");
    this.inventoryItemName = page.getByTestId("inventory-item-name");
    this.inventoryItemDescription = page.getByTestId("inventory-item-desc");
    this.cancelButton = page.getByTestId("cancel");
    this.inventoryQuantityLabel = page.getByTestId("cart-quantity-label");
    this.inventoryDescriptionLabel = page.getByTestId("cart-desc-label");
    this.shoppingCartItemCount = page.getByTestId("shopping-cart-badge");
    this.errorMessage = page.getByTestId("error")
  }

  public async open(directUrl = this.url): Promise<void> {
    await test.step(`Opening the url "${directUrl}"`, async () => {
      await this.page.goto(directUrl);
    });
  }

  public async addItemToCart(
    itemNameOrArray: string | string[],
  ): Promise<void> {
    const itemNames = Array.isArray(itemNameOrArray)
      ? itemNameOrArray
      : [itemNameOrArray];

    for (const itemName of itemNames) {
      await test.step(`Add item "${itemName}" to cart`, async () => {
        const addButton = this.page.getByTestId(`add-to-cart-${itemName}`);
        await addButton.click();
      });
    }
  }

  public async removeItemFromCart(
    itemNameOrArray: string | string[],
  ): Promise<void> {
    const itemNames = Array.isArray(itemNameOrArray)
      ? itemNameOrArray
      : [itemNameOrArray];

    for (const itemName of itemNames) {
      await test.step(`Remove item "${itemName}" from cart`, async () => {
        const removeButton = this.page.getByTestId(`remove-${itemName}`);
        await removeButton.click();
      });
    }
  }

  public async clickButton(element: Locator): Promise<void> {
    await test.step(`Click button: ${element}`, async () => {
      await element.waitFor({
        state: "visible",
        timeout: TIMEOUT_WAIT_FOR_ELEMENT,
      });
      await element.scrollIntoViewIfNeeded();
      await element.click();
    });
  }

  public async fillElement(element: Locator, text: string): Promise<void> {
    await test.step("Fill element", async () => {
      await element.scrollIntoViewIfNeeded();
      await element.fill(text);
    });
  }

  public async checkElementIsVisible(
    element: Locator,
    isVisible = true,
  ): Promise<void> {
    const stepName = `Check if element ${isVisible ? "visible" : "not visible"}`;
    await test.step(stepName, async () => {
      await expect
        .soft(async () => {
          expect(await element.isVisible()).toBe(isVisible);
        })
        .toPass({ timeout: TIMEOUT_WAIT_FOR_ELEMENT });
    });
  }

  public async checkElementIsNotVisible(
    element: Locator,
    isNotVisible = true,
  ): Promise<void> {
    const stepName = `Check if element ${isNotVisible ? "not visible" : "visible"}`;
    await test.step(stepName, async () => {
      await expect
        .soft(async () => {
          expect(await element.isVisible()).toBe(!isNotVisible);
        })
        .toPass({ timeout: TIMEOUT_WAIT_FOR_ELEMENT });
    });
  }

  public async checkInputIsEmpty(inputLocator: Locator) {
    await test.step("Check if input value is empty", async () => {
      const value = await inputLocator.inputValue();
      test.expect(value).toBe("");
    });
  }

  public async checkItemCount(expectedCount: number): Promise<void> {
    await test.step(`Check that ${expectedCount} inventory items are present`, async () => {
      await expect(this.inventoryItem).toHaveCount(expectedCount);
    });
  }

  public async checkShoppingCartValueUpdate(
    expectedValue: string,
  ): Promise<void> {
    await test.step(`Expect cart badge to have text: "${expectedValue}"`, async () => {
      await expect(this.shoppingCartItemCount).toHaveText(expectedValue);
    });
  }
}
