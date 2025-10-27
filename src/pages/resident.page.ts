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
    await residentLink.waitFor({state:"attached"});
    await residentLink.first().click();
  }

  public async getAllHeadersText(): Promise<string[]> {
    const tableHeaders= await this.findLocator(locators.tableHeaders);
    await tableHeaders.last().waitFor({state:"visible"});
    await this.page.waitForLoadState('networkidle');
    const headersCount = await (tableHeaders).count();
    const headerTexts: string[] = [];
    for (let i = 1; i <= 5; i++) { 
      console.log(await (await this.findLocator(locators.tableBeforeHeadersXpath + i + locators.tableAfterHeadersXpath)).textContent());
        const headerText = await (await this.findLocator(locators.tableBeforeHeadersXpath + i + locators.tableAfterHeadersXpath)).textContent();
        headerTexts.push(headerText?.trim() || ''); 
    }
    return headerTexts;
}

public async clickArrowUpDown(){
  const arrowUpDownLocator = await this.findLocator(locators.arrowUpDownXpath);
  await arrowUpDownLocator.first().waitFor({ state: 'visible' });
  await arrowUpDownLocator.first().click();
}

public async getFirstCellText(): Promise<string> {
  const firstCell = await this.findLocator(locators.firstCellText);
  await firstCell.waitFor({ state: "visible" });
  const text = await firstCell.textContent();
  return text?.trim() || "";
}

public async clickPolygonButton(){
  const polyBtn = await this.findLocator(locators.polygonBtn);
  await polyBtn.first().waitFor({ state: 'visible' });
  await polyBtn.first().click();
}

public async validatepolygonFunctionality(){
  const polyDropDownValue = await this.findLocator(locators.polygonValue);
  await Promise.all([
    this.page.waitForLoadState('networkidle'),
    polyDropDownValue.nth(1).click()
  ])
  const cellValueafterLocator = (await this.findLocator(locators.firstCellText));
   await cellValueafterLocator.waitFor({state:"visible"});
   const cellValueafterLocatorText = await cellValueafterLocator.textContent();
   expect(cellValueafterLocatorText).toContain("Alex de Badkamer-tester");
}

// public async polygonDropdownReset(){
//   const polyBtn = await this.findLocator(locators.polygonBtn);
//   await polyBtn.first().waitFor({ state: 'attached' });
//   await polyBtn.first().click();
//   const polyDropDownValue = await this.findLocator(locators.polygonValue);
//   await Promise.all([
//     this.page.waitForLoadState('networkidle'),
//     polyDropDownValue.nth(1).click()
    
//   ])

}



  


