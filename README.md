# Betsson Task UI Test Automation

## Overview
This project is a **Playwright-based UI testing framework** designed for end-to-end (E2E) testing of an e-commerce web application. The framework follows the **Page Object Model (POM)** approach to maintain scalability and readability. **Typescript** language has been used to develop UI tests.

## Project Structure
```
|-- constants/                     # Stores test-related constants
    |-- test-accounts/             # Test account data
    |-- test-items/                # Test item data
    |-- wait-conditions.ts         # Common wait conditions
|-- node_modules/                  # Installed dependencies
|-- page-objects/                  # Page Object Model (POM) structure
    |-- checkout/                  # Checkout-related page objects
    |-- login/                     # Login page objects
    |-- product/                   # Product page objects
    |-- shopping-cart/             # Shopping cart-related objects
    |-- base-page.ts               # Base class for shared methods & elements
|-- playwright-report/              # Stores Playwright HTML reports
|-- test-results/                   # Stores test execution results
|-- tests/                          # Playwright UI test cases
    |-- e2e/                        # End-to-end test cases
        |-- login/                  # Login feature tests
        |-- order-process/          # Order process tests
            |-- cart-item-update/   # Cart item update tests
                |-- cart-update.spec.ts  # Test for updating cart items
        |-- customer-info-validation/   # Customer info validation tests
            |-- customer-info-validation.spec.ts  # Test for customer validation
        |-- successful-checkout-order/ # Successful checkout process
            |-- successful-order.spec.ts  # Order placement test
        |-- base-order-process.fixture.ts  # Shared setup for order processing
|-- .gitignore                      # Git ignore file
```

## Installation & Setup
### Prerequisites
Ensure you have **Node.js** and **npm** installed.

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd betsson-test-task
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Running Tests
You can execute Playwright UI tests using the following commands:

### Run all tests
```sh
  npx playwright test
```

### Run tests for a specific feature (e.g., order process)
```sh
  npx playwright test tests/e2e/order-process
```

### Run a single test file
```sh
  npx playwright test tests/e2e/order-process/cart-item-update/cart-update.spec.ts
```

### Generate and open an HTML report
```sh
  npx playwright test --reporter=html
npx playwright show-report
```

## Cross-Browser and Mobile View Testing
This project supports testing across different browsers and mobile devices:
- **Browsers Supported:** Chrome, Firefox, WebKit
- **Mobile View Testing:** Emulates mobile devices using Playwright’s device emulation.
- **Running tests in a specific browser:**
  ```sh
  npx playwright test --project=chromium
  npx playwright test --project=firefox
  npx playwright test --project=webkit
  ```
- **Running tests in mobile emulation mode:**
  ```sh
  npx playwright test --project='Mobile Safari'
  npx playwright test --project='Mobile Chrome'
  ```

## Page Object Model (POM)
This project uses **Page Object Model (POM)** to separate UI actions from test logic.
- Page objects are stored in the `page-objects/` directory.
- The `base-page.ts` file provides shared UI functions like clicking elements, waiting for elements, and common shared elements.
- Each feature has its own directory (e.g., `login/`, `products/`, `checkout/`).

## Fixtures
- Fixtures are used for **reusable test setup**.
- The `base-order-process.fixture.ts` and `login.fixture.ts` manages shared order process logic & login logic ensuring modularity and reusability.

## Test Reporting & Debugging
- **Test Results:** Located in `test-results/`
- **HTML Reports:** After running tests, reports are stored in `playwright-report/`

## Continuous Integration with GitHub Actions
This project supports **GitHub Actions CI/CD**:
- Tests are executed automatically when code is pushed.
- Reports can be accessed in the GitHub **Actions** tab.

