import { test, expect } from "@playwright/test";

test.describe("Login functionality", ()=> {
  test.beforeEach("Go to Login page", async ({ page }) => {
    //Launch url
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  // Assert if the title and header is correct
  await expect(page).toHaveTitle("CURA Healthcare Service");
  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");

  //CLick on Make appointment

  await page.getByRole("link", { name: "Make Appointment" }).click();
  await expect(page.getByText("Please login to make")).toBeVisible();

  });

test("Should login successfully", async ({ page }) => {
 
  // Successful Login
  await page.getByLabel("Username").fill("John Doe");
  await page.getByLabel("Password").fill("ThisIsNotAPassword");
  await page.getByRole("button", { name: "Login" }).click();

  // Assert a text
  await expect(page.locator("h2")).toContainText("Make Appointment");
});

test("Should not login with invalid creds", async ({ page }) => {
  
  // Unsucessful Login
  await page.getByLabel("Username").fill("John smith");
  await page.getByLabel("Password").fill("ThisIsNotAPassword");
  await page.getByRole("button", { name: "Login" }).click();

  // Assert a text
  await expect(page.locator("#login")).toContainText(
    "Please login to make appointment.",
  );
});

})
function async(arg0: { page: any; }): (args: import("playwright/test").PlaywrightTestArgs & import("playwright/test").PlaywrightTestOptions & import("playwright/test").PlaywrightWorkerArgs & import("playwright/test").PlaywrightWorkerOptions, testInfo: import("playwright/test").TestInfo) => Promise<any> | any {
  throw new Error("Function not implemented.");
}

