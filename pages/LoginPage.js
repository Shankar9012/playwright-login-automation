import { expect } from "@playwright/test";

export default class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator("#user-name");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("#login-button");
    this.pageHeader = page.locator(".title");
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  async validatePasswordMasked() {
    const inputType = await this.passwordInput.getAttribute("type");
    expect(inputType).toBe("password");
  }
  async submitKeyboard() {
    await this.loginButton.press("Enter");
    await expect(this.pageHeader).toHaveText("Products");
  }

  async validateSuccessfulLogin() {
    await this.loginButton.click();
    await expect(this.page).toHaveURL("/inventory.html");
    await expect(this.pageHeader).toHaveText("Products");
  }

  async validateFailedLogin(expectedMessage) {
    await this.loginButton.click();
    await expect(this.errorMessage).toContainText(expectedMessage);
  }
}
