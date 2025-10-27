import test, {expect} from "../src/utils/fixtures";
import ENV from "../src/utils/env";
import LoginPage from "../src/pages/login.page";
import ResidentPage from "../src/pages/resident.page"
import { Page } from "@playwright/test";
import data from "../testData/data.json";


let page: Page;
let loginPage: LoginPage;
let residentPage: ResidentPage;

test.describe('Resident Page Tests', () => {

test.beforeAll(async ({ browser }) => {

    page = await browser.newPage();
    loginPage = new LoginPage(page);
    residentPage = new ResidentPage(page);
     await page.goto(ENV.BASE_URL);
  });

test.afterAll(async () => {
    await page.close();
  });
  
test("Validating the login functionality", async() => {
   
    await loginPage.enterUserName(ENV.USERNAME);
    await loginPage.enterPassword(ENV.PASSWORD);
    await loginPage.clickSignInBtn();
    await page.screenshot({ path: 'ResidentPage.png', fullPage: true });
});

test("Validate Resident page functionalities", async() => {

  await residentPage.clickResidentLink();
  const actualHeaders = await residentPage.getAllHeadersText();
  const expectedHeaders = data.expectedHeaders;
  expect(actualHeaders).toEqual(expectedHeaders);
})

test("validate arrowupDownFunctionality in Resident page", async()=> {
  await residentPage.page.waitForLoadState('networkidle');
  const maxAttempts = 5;
  let attempt = 0;
  let firstCellText = "";
  while (attempt < maxAttempts) {
    firstCellText = await residentPage.getFirstCellText();
    console.log(`Attempt ${attempt + 1}: ${firstCellText}`);

    await residentPage.clickArrowUpDown();
    await residentPage.page.waitForTimeout(10000); 
      await residentPage.clickArrowUpDown();
    await residentPage.page.waitForLoadState("networkidle", { timeout: 15000 });
    if (firstCellText[0]?.toUpperCase() === "A") {
      console.log(`Sorted correctly - value starts with 'A' after ${attempt + 1} clicks`);
      break;
    }
    attempt++;
  }
  expect(firstCellText[0]?.toUpperCase()).toBe("A");
});

test("validate Dropdown value in polygon BUtton", async()=> {
  await residentPage.clickPolygonButton();
  await residentPage.validatepolygonFunctionality();
  
})



}) 
