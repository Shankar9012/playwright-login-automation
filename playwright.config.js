import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 10 * 1000,
  retries: 0,
  workers: 1,
  use: {
    baseURL: "https://www.saucedemo.com",
    headless: false,
    slowMo: 1000,
    viewport: null,
    screenshot: "only-on-failure",
    video: "on",
    trace: "retain-on-failure",
  },
  reporter: [["html", { outputFolder: "playwright-report", open: "never" }]],
  projects: [
    {
      name: "chromium",
      use: {
        viewport: null,
        launchOptions: {
          args: ["--start-maximized"],
        },
      },
    },
  ],
});
