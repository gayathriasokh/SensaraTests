import {Page, expect} from "@playwright/test";
import Wrapper from "../base/Wrapper";
import locators from "../common/locators";
import commonpage from "../common/commonpage";

export default class ResidentPage extends Wrapper{
    common: commonpage;

    constructor(public page: Page){
        super(page);
        this.common = new commonpage(page);
    }

  public async clickResidentLink(){
    const residentLink = await this.findLocator(locators.residentLink);
    await residentLink.first().click();
  }

//    public async residentColumnNames(userName : string){
    
//     const nameColumn = await this.findLocator(locators.residentNameColumn);
//     const sectorColumn =  await this.findLocator(locators.residentSectorColumn);
//  }
}