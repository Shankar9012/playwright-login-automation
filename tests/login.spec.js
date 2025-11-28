import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage.js";
import { users } from "../test-data/users.js";

let loginPage;

test.describe("SauceDemo Login Suite with External Users", () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.page.goto("/");
  });

  test("Successful login with valid credential", async ({page}) => {
    await loginPage.login(users.validUser.username, users.validUser.password);
    await loginPage.validatePasswordMasked();
    await loginPage.validateSuccessfulLogin();
    //await page.pause(); 
  });

  test("Successful login with keyboard", async () => {
    await loginPage.login(users.validUser.username, users.validUser.password);
    await loginPage.submitKeyboard();
  });

  test("Failed login with invalid credentials", async () => {
    await loginPage.login(
      users.invalidUser.username,
      users.invalidUser.password
    );
    await loginPage.validateFailedLogin("Username and password do not match");
  });

  test("login with valid username and invalid password", async () => {
    await loginPage.login(users.validUser.username, users.invalidUser.password);
    await loginPage.validateFailedLogin("Username and password do not match");
  });

  test("login with inValid Username and valid password", async () => {
    await loginPage.login(users.invalidUser.username, users.validUser.password);
    await loginPage.validateFailedLogin("Username and password do not match");
  });

  test("Login with valid username and empty password", async () => {
    await loginPage.login(users.validUser.username, "");
    await loginPage.validateFailedLogin("Password is required");
  });
});
