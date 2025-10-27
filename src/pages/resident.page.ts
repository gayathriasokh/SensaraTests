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

public async clickArrowUpDownForName(){
  const arrowUpDownLocator = await this.findLocator(locators.arrowUpDownXpath);
  await arrowUpDownLocator.first().waitFor({ state: 'visible' });
  await arrowUpDownLocator.first().click();
}
public async clickArrowUpDownForSector(){
  const arrowUpDownLocator = await this.findLocator(locators.arrowUpDownXpath);
  await arrowUpDownLocator.nth(1).waitFor({ state: 'visible' });
  await arrowUpDownLocator.nth(1).click();
}

public async clickArrowUpDownForRoomStatus(){
  const arrowUpDownLocator = await this.findLocator(locators.arrowUpDownXpath);
  await arrowUpDownLocator.nth(2).waitFor({ state: 'visible' });
  await arrowUpDownLocator.nth(2).click();
}public async clickArrowUpDownForHistory(){
  const arrowUpDownLocator = await this.findLocator(locators.arrowUpDownXpath);
  await arrowUpDownLocator.nth(2).waitFor({ state: 'visible' });
  await arrowUpDownLocator.nth(2).click();
}
public async clickArrowUpDownForAlarmSettings(){
  const arrowUpDownLocator = await this.findLocator(locators.arrowUpDownXpath);
  await arrowUpDownLocator.nth(2).waitFor({ state: 'visible' });
  await arrowUpDownLocator.nth(2).click();
}


public async getFirstCellText(): Promise<string> {
  const firstCell = await this.findLocator(locators.firstCellText);
  await firstCell.waitFor({ state: "visible" });
  const text = await firstCell.textContent();
  return text?.trim() || "";
}

public async getSectorFirstCellText(): Promise<string> {
  const firstCellSector = await this.findLocator(locators.sectorFirstCellText);
  await firstCellSector.waitFor({ state: "visible" });
  const text = await firstCellSector.textContent();
  return text?.trim() || "";
}

public async getRoomStatusFirstCellText(): Promise<string> {
  const firstCellRoomStatus = await this.findLocator(locators.roomFirstCellText);
  await firstCellRoomStatus.waitFor({ state: "visible" });
  const text = await firstCellRoomStatus.textContent();
  return text?.trim() || "";
}

public async clickPolygonButtonForName(){
  const polyBtn = await this.findLocator(locators.polygonBtn);
  await polyBtn.first().waitFor({ state: 'visible' });
  await polyBtn.first().click();
}

public async validatepolygonFunctionalityForName(){
  const dropdownItems = await this.findLocator(locators.polygondropdownOptions);
  const numberOfOptions = dropdownItems.count();
  
for (let i = 0; i < await numberOfOptions ; i++) {
    const item = dropdownItems.nth(i);
        const text = await item.innerText();
        console.log(`Clicking on: ${text}`);

        await item.click();
}}

public async clickPolygonButtonForSector(){
  const polyBtn = await this.findLocator(locators.polygonBtn);
  await polyBtn.nth(1).waitFor({ state: 'visible' });
  await polyBtn.nth(1).click();
}
  
public async validatepolygonFunctionalityForSector(){
  await this.page.waitForSelector(locators.polygondropdownOptions);
  const dropdownItems = await this.findLocator(locators.polygondropdownOptions);
  const count = dropdownItems.count();
  
for (let i = 0; i < 4 ; i++) {
    const item = dropdownItems.nth(i);
        const text = await item.innerText();
        console.log(`Clicking on: ${text}`);

        await item.click();
}}

public async clickPolygonButtonForRoomStatus(){
  const polyBtn = await this.findLocator(locators.polygonBtn);
  await polyBtn.nth(2).waitFor({ state: 'visible' });
  await polyBtn.nth(2).click();
}
public async validatepolygonFunctionalityForRoomStatus(){
  await this.page.waitForSelector(locators.polygondropdownOptions);
  const dropdownItems = await this.findLocator(locators.polygondropdownOptions);
  const count = dropdownItems.count();
  
for (let i = 0; i < await count ; i++) {
    const item = dropdownItems.nth(i);
        const text = await item.innerText();
        console.log(`Clicking on: ${text}`);

        await item.click();
}}

public async clickPolygonButtonForHistory(){
  const polyBtn = await this.findLocator(locators.polygonBtn);
  await polyBtn.nth(3).waitFor({ state: 'visible' });
  await polyBtn.nth(3).click();
}
public async validatepolygonFunctionalityForHistory(){
  await this.page.waitForSelector(locators.polygondropdownOptions);
  const dropdownItems = await this.findLocator(locators.polygondropdownOptions);
  const count = dropdownItems.count();
  
for (let i = 0; i < await count ; i++) {
    const item = dropdownItems.nth(i);
        const text = await item.innerText();
        console.log(`Clicking on: ${text}`);

        await item.click();
}}

public async clickPolygonButtonForAlarmSettings(){
  const polyBtn = await this.findLocator(locators.polygonBtn);
  await polyBtn.nth(4).waitFor({ state: 'visible' });
  await polyBtn.nth(4).click();
}
public async validatepolygonFunctionalityForAlarmSettings(){
  await this.page.waitForSelector(locators.polygondropdownOptions);
  const dropdownItems = await this.findLocator(locators.polygondropdownOptions);
  const count = dropdownItems.count();
  
for (let i = 0; i < await count ; i++) {
    const item = dropdownItems.nth(i);
        const text = await item.innerText();
        console.log(`Clicking on: ${text}`);

        await item.click();
}}

}