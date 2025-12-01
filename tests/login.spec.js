import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage.js";
import { loginData } from "../test-data/users.js";

let loginPage;

test.describe("SauceDemo Login Suite - Data Driven", () => {

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await test.step("Navigate to SauceDemo login page", async () => {
      await loginPage.page.goto("/");
    });
  });

  // Loop through each test data object
  loginData.forEach(data => {
    test(data.description, async ({ page }) => {

      await test.step(`Enter credentials: ${data.username} / ${data.password}`, async () => {
        await loginPage.login(data.username, data.password);
      });

      if (data.expectedResult === "success") {
        await test.step("Validate password is masked", async () => {
          await loginPage.validatePasswordMasked();
        });

        await test.step("Validate successful login", async () => {
          await loginPage.validateSuccessfulLogin();
        });
      } else {
        await test.step("Validate login failure message", async () => {
          await loginPage.validateFailedLogin(data.errorMessage);
        });
      }

    });
  });

});
