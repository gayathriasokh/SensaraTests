import {Page, expect} from "@playwright/test";
import Wrapper from "../base/Wrapper";
import locators from "../common/locators";
import commonpage from "../common/commonpage";

export default class LoginPage extends Wrapper{
    common: commonpage;

    constructor(public page: Page){
        super(page);
        this.common = new commonpage(page);
    }

 public async enterUserName(userName : string){
    const username = await this.findLocator(locators.userNameInput);
    await username.waitFor({state:"attached"});
    await username.fill(userName);
 }

 public async enterPassword( password : string){
    const pass = await this.findLocator(locators.password);
    await pass.waitFor({state:"attached"});
    await pass.fill(password);
 }

 public async clickSignInBtn(){

   const signInBtn = await this.findLocator(locators.signInButton);
   await signInBtn.waitFor({state:"attached"});
   await Promise.all([
      signInBtn.click(),
      this.page.waitForLoadState('networkidle')
   ])
   await this.page.waitForTimeout(20000);
   const headerLocator = await this.findLocator(locators.headerText);
   await headerLocator.waitFor({state:"visible"});
   const headerText = await headerLocator.textContent();
   expect(headerText).toContain("Welkom Sjef de Opperste");

 }

}