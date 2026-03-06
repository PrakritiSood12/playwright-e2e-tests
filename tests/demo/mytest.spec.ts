import { test, expect } from "@playwright/test";

test("Should load homepage", async ({ page }) => {
  //go to homepage
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  // Assert if the title is correct
  await expect(page).toHaveTitle("CURA Healthcare Service");

  // Assert header text
  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});
