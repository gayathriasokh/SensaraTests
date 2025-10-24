import test, {expect} from "../src/utils/fixtures";
import ENV from "../src/utils/env";
import LoginPage from "../src/pages/login.page";
import ResidentPage from "../src/pages/resident.page"
import AlarmOverviewPage from "../src/pages/alarmOverview.page";
import data from "../testData/data.json";

test("Validating the Resident page", async({page,loginPage, base}) => {
   
    await page.goto(ENV.BASE_URL);
    await loginPage.enterUserName(ENV.USERNAME);
    await loginPage.enterPassword(ENV.PASSWORD);
    await loginPage.clickSignInBtn();
    await page.screenshot({ path: 'ResidentPage.png', fullPage: true });


})
