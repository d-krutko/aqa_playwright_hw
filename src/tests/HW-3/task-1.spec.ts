import test, { expect } from "@playwright/test";
import invalidTestData from "./register.data";

test.describe("[Demo Register Form] Registration", () => {
  const url = "https://anatoly-karpovich.github.io/demo-login-form/";

  for (const invalidData of invalidTestData) {
    test(`Should not register with invalid credentials: username - ${invalidData.credentials.username} and password - ${invalidData.credentials.password} `, async ({
      page,
    }) => {
      const registerButtonLoginForm = page.locator(
        '//input[@id="registerOnLogin"]'
      );
      const usernameInput = page.locator('//input[@id="userNameOnRegister"]');
      const passwordInput = page.locator('//input[@id="passwordOnRegister"]');
      const registerButtonRegistrationForm = page.locator(
        '//input[@id="register"]'
      );
      const errorMessage = page.locator('//h4[@id="errorMessageOnRegister"]');

      await page.goto(url);
      await registerButtonLoginForm.click();
      await usernameInput.fill(invalidData.credentials.username);
      await passwordInput.fill(invalidData.credentials.password);
      await registerButtonRegistrationForm.click();
      await expect(errorMessage).toHaveText(invalidData.errorMessage);
    });
  }
});
