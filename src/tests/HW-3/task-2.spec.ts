// Создать функцию getTableRow(page, email), которая возвращает строку в таблице по емейлу.
// Например getTableRow(page, 'jsmith@gmail.com') => { "Last Name": "Smith", "First Name": "John", Email: "jsmith@gmail.com", Due: "$50.00", "Web Site": "http://www.jsmith.com" }

// Создайте тест, проверяющий данную функцию, используя все емейлы из таблицы Example 2
// Сайт: https://anatoly-karpovich.github.io/test-automation-sandbox/sortable-table

import test, { expect, Page } from "@playwright/test";
import usersData from "./table.data";
type TableRow = Record<string, string>;

test("Check getTableRow function", async ({ page }) => {
  const urlSandbox =
    "https://anatoly-karpovich.github.io/test-automation-sandbox/";
  const sortableTableLink = page.getByRole("link", { name: "Sortable Table" });
  const table = page.locator("table.MuiTable-root");

  //   const emails = [
  //     'john.doe@example.com',
  //     'sarah.smith@example.com',
  //     'alex.johnson@example.com',
  //     'linda.williams@example.com',
  //     'michael.brown@example.com',
  //   ];

  await page.goto(urlSandbox);
  await Promise.all([
    sortableTableLink.click(),
    table.waitFor({ state: "visible" }),
  ]);

  for (const userData of usersData) {
    const row = await getTableRow(page, userData.email);
    console.log(`Row for ${userData.email}:`, row);
    expect(row).toBeDefined();
    expect(row?.Email).toBe(userData.email);
  }
});

async function getTableRow(
  page: Page,
  email: string
): Promise<TableRow | undefined> {
  const table = page.locator("table.MuiTable-root");
  const headers = await table.locator("thead tr th").allInnerTexts();
  const rows = await table.locator("tbody tr").all();

  for (const row of rows) {
    const cells = await row.locator("td").allInnerTexts();
    const rowInObject: TableRow = {};
    headers.forEach((header, index) => {
      rowInObject[header] = cells[index] ?? "";
    });
    if (rowInObject["Email"] === email) {
      console.log(rowInObject);
      return rowInObject;
    }
  }
  return undefined;
}
