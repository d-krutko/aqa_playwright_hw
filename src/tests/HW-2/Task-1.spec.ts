// Разработать тест со следующими шагами:

import test, { expect } from "@playwright/test";

test.describe("[herokuapp][Dynamic controls]", () => {
  test("Test for herokuapp", async ({ page }) => {
    const url = "https://the-internet.herokuapp.com/";
    const link = page.getByRole("link", { name: "Dynamic Controls" });
    const heading = page.locator("//div/h4[1]");
    const expectedText = "Dynamic Controls";
    const checkboxSelector = page.locator('//input[@type="checkbox"]');
    const removeButton = page.getByRole("button", { name: "Remove" });
    const form = page.locator("#checkbox-example");

    const addButton = form.locator('//button[text()="Add"]');
    const goneText = form.locator('//p[text()="It\'s gone!"]');
    const expectedGoneText = "It's gone!";
    const backText = form.locator('//p[text()="It\'s back!"]');
    const expectedBackText = "It's back!";

    await page.goto(url); //   - открыть https://the-internet.herokuapp.com/
    await link.click(); //   - перейти на страницу Dynamic Controls
    await expect(removeButton).toBeVisible(); //   - Дождаться появления кнопки Remove
    await expect(heading).toHaveText(expectedText); //   - Завалидировать текста в заголовке страницы
    await checkboxSelector.check(); //   - Чекнуть чекбокс

    await removeButton.click(); //   - Кликнуть по кнопке Remove
    await expect(checkboxSelector).toBeHidden(); //   - Дождаться исчезновения чекбокса
    await expect(addButton).toBeVisible(); //   - Проверить наличие кнопки Add
    await expect(goneText).toHaveText(expectedGoneText); //   - Завалидировать текст It's gone!
    await addButton.click(); //   - Кликнуть на кнопку Add
    await expect(checkboxSelector).toBeVisible(); //   - Дождаться появления чекбокса
    await expect(backText).toHaveText(expectedBackText); //   - Завалидировать текст It's back!
  });
});
