import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage.js";
import { users } from "../test-data/users.js";

let loginPage;

test.describe("SauceDemo Login Suite with External Users", () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await test.step("Navigate to SauceDemo login page", async () => {
      await loginPage.page.goto("/");
    });
  });

  test("Successful login with valid credential", async ({ page }) => {
    await test.step("Enter valid credentials", async () => {
      await loginPage.login(users.validUser.username, users.validUser.password);
    });

    await test.step("Validate password is masked", async () => {
      await loginPage.validatePasswordMasked();
    });

    await test.step("Validate successful login", async () => {
      await loginPage.validateSuccessfulLogin();
    });
  });

  test("Successful login with keyboard", async ({ page }) => {
    await test.step("Enter credentials", async () => {
      await loginPage.login(users.validUser.username, users.validUser.password);
    });

    await test.step("Submit login using keyboard", async () => {
      await loginPage.submitKeyboard();
    });
  });

  test("Failed login with invalid credentials", async ({ page }) => {
    await test.step("Enter invalid credentials", async () => {
      await loginPage.login(users.invalidUser.username, users.invalidUser.password);
    });

    await test.step("Validate login failure message", async () => {
      await loginPage.validateFailedLogin("Username and password do not match");
    });
  });

  test("Login with valid username and invalid password", async ({ page }) => {
    await test.step("Enter valid username and invalid password", async () => {
      await loginPage.login(users.validUser.username, users.invalidUser.password);
    });

    await test.step("Validate login failure message", async () => {
      await loginPage.validateFailedLogin("Username and password do not match");
    });
  });

  test("Login with invalid username and valid password", async ({ page }) => {
    await test.step("Enter invalid username and valid password", async () => {
      await loginPage.login(users.invalidUser.username, users.validUser.password);
    });

    await test.step("Validate login failure message", async () => {
      await loginPage.validateFailedLogin("Username and password do not match");
    });
  });

  test("Login with valid username and empty password", async ({ page }) => {
    await test.step("Enter valid username and empty password", async () => {
      await loginPage.login(users.validUser.username, "");
    });

    await test.step("Validate password required message", async () => {
      await loginPage.validateFailedLogin("Password is required");
    });
  });
});
