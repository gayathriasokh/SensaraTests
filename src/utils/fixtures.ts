import { test as baseTest } from '@playwright/test';
import LoginPage from "../pages/login.page";
import ResidentPage from "../pages/resident.page";
import AlarmOverviewPage from "../pages/alarmOverview.page";
import Wrapper from "../base/Wrapper";

const test = baseTest.extend<{
    loginPage : LoginPage;
    residentPage : ResidentPage;
    base: Wrapper;
    alarmoverviewPage : AlarmOverviewPage;

}>({

    base: async ({ page }, use) => {
        await use(new Wrapper(page));
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    residentPage: async ({ page }, use) => {
        await use(new ResidentPage(page));
    },

    alarmoverviewPage: async ({page }, use) => {
        await use(new AlarmOverviewPage(page));
    }

})

export default test;
export const expect = test.expect;

