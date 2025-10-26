import test, {expect} from "../src/utils/fixtures";
import ENV from "../src/utils/env";
import LoginPage from "../src/pages/login.page";
import ResidentPage from "../src/pages/resident.page"
import { Page } from "@playwright/test";

let page: Page;
let loginPage: LoginPage;

test.describe('Resident Page Tests', () => {

test.beforeAll(async ({ browser }) => {

    page = await browser.newPage();
    loginPage = new LoginPage(page);
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
})


}) 
