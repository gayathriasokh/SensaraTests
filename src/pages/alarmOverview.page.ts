import {Page, expect} from "@playwright/test";
import Wrapper from "../base/Wrapper";
import locators from "../common/locators";
import commonpage from "../common/commonpage";

export default class AlarmOverviewPage extends Wrapper{
    common: commonpage;

    constructor(public page: Page){
        super(page);
        this.common = new commonpage(page);
    }
    public async clickAlarmOverviewLInk(){
    const residentLink = await this.findLocator(locators.residentLink);
    await residentLink.waitFor({state:"attached"});
    await residentLink.first().click();
  }
}
