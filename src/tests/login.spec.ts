//   Разработайте смоук тест-сьют с тестами на REGISTER на странице https://anatoly-karpovich.github.io/demo-login-form/

//   Требования:
//     Страница регистрации:
//       Username: обязательное, от 3 до 40 символов включительно, запрещены префиксные/постфиксные пробелы, как и имя состоящее из одних пробелов
//       Password: обязательное, от 8 до 20 символов включительно, необходима хотя бы одна буква в верхнем и нижнем регистрах, пароль из одних пробелов запрещен
//     Страница логина:
//       Username: обязательное
//       Password: обязательное

import test, { expect } from "@playwright/test";

interface ICredentials {
  username: string;
  password: string;
}

enum MESSAGES {
  REGISTER_SUCCESS = "Successfully registered! Please, click Back to return on login page",
}

test.describe("[demo-login-form][Form Registration]", () => {
  const credentials: ICredentials[] = [
    {
      username: "tom",
      password: "I234567i",
    },
    {
      username: "tomytomytomytomytomytomytomytomytomytomy",
      password: "Tomytomytomytomytom!",
    },
  ];

  test.beforeEach(async ({ page }) => {
    const url = "https://anatoly-karpovich.github.io/demo-login-form/";
    const registerOnLoginButton = page.locator(
      '//input[@id="registerOnLogin"]'
    );
    await page.goto(url);
    await registerOnLoginButton.click();
  });

  test("Test for max length", async ({ page }) => {
    const usernameRegisterInput = page.locator(
      '//input[@id="userNameOnRegister"]'
    );
    const passwordRegisterInput = page.locator(
      '//input[@id="passwordOnRegister"]'
    );

    const registerButton = page.locator('//input[@id="register"]');
    const successMessage = page.locator("#errorMessageOnRegister");

    const { username, password } = credentials[0]!;
    await usernameRegisterInput.fill(username);
    await passwordRegisterInput.fill(password);
    await registerButton.click();
    await expect(successMessage).toContainText(MESSAGES.REGISTER_SUCCESS);
  });

  test("Test for min length", async ({ page }) => {
    const usernameRegisterInput = page.locator(
      '//input[@id="userNameOnRegister"]'
    );
    const passwordRegisterInput = page.locator(
      '//input[@id="passwordOnRegister"]'
    );

    const registerButton = page.locator('//input[@id="register"]');
    const successMessage = page.locator("#errorMessageOnRegister");

    const { username, password } = credentials[1]!;
    await usernameRegisterInput.fill(username);
    await passwordRegisterInput.fill(password);
    await registerButton.click();
    await expect(successMessage).toContainText(MESSAGES.REGISTER_SUCCESS);
  });
});
