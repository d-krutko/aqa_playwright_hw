// Создайте ОДИН смоук тест со следующими шагами:

// 1. Переход на страницу https://anatoly-karpovich.github.io/demo-registration-form/
// 2. Заполните форму регистрации
// 3. Проверьте, что пользователь успешно зарегистрирован

import test, { expect } from "@playwright/test";

test.describe("[demo-registration-form][Form Login]", () => {
  test("Smoke test for registration", async ({ page }) => {
    const registrationData = {
      firstName: "Dina",
      lastName: "Vyshamirskaya",
      address: "Belarus, Minsk",
      phone: "+375299999999",
      email: "dina.krutko@bk.ru",
      country: "Canada",
      gender: "female",
      hobbies: ["Travelling", "Movies"],
      language: "English",
      skills: "JavaScript",
      birthdayYear: "2001",
      birthdayMonth: "December",
      birthdayDay: "15",
      password: "Password5",
    };

    const url = "https://anatoly-karpovich.github.io/demo-registration-form/";

    const firstNameInput = page.locator('//input[@id="firstName"]');
    const lastNameInput = page.locator('//input[@id="lastName"]');
    const addressInput = page.locator('//textarea[@id="address"]');
    const emailInput = page.locator('//input[@id="email"]');
    const phoneInput = page.locator('//input[@id="phone"]');
    const countrySelector = page.locator('//select[@id="country"]');
    const hobbiesSelector = (hobby: string) =>
      page.locator(`//input[@value="${hobby}"]`);
    const genderMale = page.locator('//input[@value="male"]');
    const genderFemale = page.locator('//input[@value="female"]');
    const languageInput = page.locator('//input[@id="language"]');
    const skillSelector = page.locator('//select[@id="skills"]');
    const birthdayYearSelector = page.locator('//select[@id="year"]');
    const birthdayMonthSelector = page.locator('//select[@id="month"]');
    const birthdayDaySelector = page.locator('//select[@id="day"]');
    const passwordInput = page.locator('//input[@id="password"]');
    const confirmPasswordInput = page.locator(
      '//input[@id="password-confirm"]'
    );
    const confirmButton = page.locator('//button[@type="submit"]');

    const registrationDetails = page.locator('//h2[@class="text-center"]');
    const fullNameDetails = page.locator('//span[@id="fullName"]');
    const addressDetails = page.locator('//span[@id="address"]');
    const emailDetails = page.locator('//span[@id="email"]');
    const phoneDetails = page.locator('//span[@id="phone"]');
    const countryDetails = page.locator('//span[@id="country"]');
    const genderDetails = page.locator('//span[@id="gender"]');
    const languageDetails = page.locator('//span[@id="language"]');
    const skillsDetails = page.locator('//span[@id="skills"]');
    const hobbiesDetails = page.locator('//span[@id="hobbies"]');
    const dateOfBirthDetails = page.locator('//span[@id="dateOfBirth"]');
    const passwordDetails = page.locator('//span[@id="password"]');

    await page.goto(url);
    await firstNameInput.fill(registrationData.firstName);
    await lastNameInput.fill(registrationData.lastName);
    await addressInput.fill(registrationData.address);
    await emailInput.fill(registrationData.email);
    await phoneInput.fill(registrationData.phone);
    await countrySelector.selectOption(registrationData.country);
    registrationData.gender === "male"
      ? await genderMale.check()
      : await genderFemale.check();
    for (const hobby of registrationData.hobbies) {
      await hobbiesSelector(hobby).check();
    }
    await languageInput.fill(registrationData.language);
    await skillSelector.selectOption(registrationData.skills);
    await birthdayYearSelector.selectOption(registrationData.birthdayYear);
    await birthdayMonthSelector.selectOption(registrationData.birthdayMonth);
    await birthdayDaySelector.selectOption(registrationData.birthdayDay);
    await passwordInput.fill(registrationData.password);
    await confirmPasswordInput.fill(registrationData.password);

    await confirmButton.click();

    await expect(registrationDetails).toHaveText("Registration Details");
    await expect(fullNameDetails).toHaveText(
      `${registrationData.firstName} ${registrationData.lastName}`
    );
    await expect(addressDetails).toHaveText(`${registrationData.address}`);
    await expect(emailDetails).toHaveText(`${registrationData.email}`);
    await expect(phoneDetails).toHaveText(`${registrationData.phone}`);
    await expect(countryDetails).toHaveText(`${registrationData.country}`);
    await expect(genderDetails).toHaveText(`${registrationData.gender}`);
    await expect(languageDetails).toHaveText(`${registrationData.language}`);
    await expect(skillsDetails).toHaveText(`${registrationData.skills}`);
    await expect
      .soft(hobbiesDetails)
      .toHaveText(registrationData.hobbies.join(", "));
    await expect(dateOfBirthDetails).toHaveText(
      `${registrationData.birthdayDay} ${registrationData.birthdayMonth} ${registrationData.birthdayYear}`
    );
    const passwordLength = await passwordDetails.innerText();
    await expect
      .soft(passwordLength.length === registrationData.password.length)
      .toBeTruthy();
  });
});
