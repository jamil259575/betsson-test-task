import {BasePage} from "../base-page";
import { Page } from "@playwright/test";

export class LoginPage extends BasePage{
    constructor(page: Page) {
        super(page);
        this.url = '/'

    }
    readonly username = this.page.getByTestId("username");
    readonly password = this.page.getByTestId('password');
    readonly loginButton = this.page.getByTestId('login-button');
    readonly errorMessage = this.page.getByTestId('error')
}
