import { test, expect } from "@playwright/test";

test.describe("Multiple Windows functionality", () => {
  test("Should handle multiple windows and navigate between them", async ({
    context,
    page,
  }) => {
    // Navigate to the site
    await page.goto("https://the-internet.herokuapp.com/");
    await expect(page).toHaveTitle("The Internet");

    // Click on "Multiple Windows" link
    await page.getByRole("link", { name: "Multiple Windows" }).click();
    await page.waitForLoadState();

    // Assert header on current page
    await expect(page.locator("h3")).toHaveText("Opening a new window");

    // Wait for new window/tab and get reference
    const newPagePromise = context.waitForEvent("page");
    await page.getByRole("link", { name: "Click Here" }).click();
    const newPage = await newPagePromise;

    // Navigate to the newly opened window and assert the header
    await newPage.waitForLoadState();
    await expect(newPage.locator("h3")).toHaveText("New Window");

    // Verify we can bring parent window to front
    await page.bringToFront();
    await expect(page.locator("h3")).toHaveText("Opening a new window");

    // Bring new window back to front
    await newPage.bringToFront();
    await expect(newPage.locator("h3")).toHaveText("New Window");

    // Come back to the parent window
    await page.bringToFront();
    await expect(page.locator("h3")).toHaveText("Opening a new window");

    // Clean up
    await newPage.close();
  });
});
