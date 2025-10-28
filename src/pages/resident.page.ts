import {Page, expect} from "@playwright/test";
import Wrapper from "../base/Wrapper";
import locators from "../common/locators";
import commonpage from "../common/commonpage";
import { deflateRaw } from "zlib";


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
  await arrowUpDownLocator.nth(3).waitFor({ state: 'visible' });
  await arrowUpDownLocator.nth(3).click();
}
public async clickArrowUpDownForAlarmSettings(){
  const arrowUpDownLocator = await this.findLocator(locators.arrowUpDownXpath);
  await arrowUpDownLocator.nth(4).waitFor({ state: 'visible' });
  await arrowUpDownLocator.nth(4).click();
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
public async getAllHeadersTextAfterColumnsSelection(): Promise<string[]> {
    const tableHeaders= await this.findLocator(locators.tableHeaders);
    await tableHeaders.last().waitFor({state:"visible"});
    await this.page.waitForLoadState('networkidle');
    const headersCount = await (tableHeaders).count();
    const headerTexts: string[] = [];
    for (let i = 1; i <= 8; i++) { 
      console.log(await (await this.findLocator(locators.tableBeforeHeadersXpath + i + locators.tableAfterHeadersXpath)).textContent());
        const headerText = await (await this.findLocator(locators.tableBeforeHeadersXpath + i + locators.tableAfterHeadersXpath)).textContent();
        headerTexts.push(headerText?.trim() || ''); 
    }
    return headerTexts;
}

public async validateColumnsDropdownFunctionalityInResidentsPage (){
  const residentColumnsLocator = await this.findLocator(locators.residentColumns);
  const clientNumberXpath = await this.findLocator(locators.clientNumberColumnXpath);
  const addressColumnXpath = await this.findLocator(locators.addressColumnXpath);
  const privacyModeXpath = await this.findLocator(locators.privacyModeXpath);
  const activeFilters = await this.findLocator(locators.activeFiltersXpath);
    await residentColumnsLocator.waitFor({state:"attached"});
    await residentColumnsLocator.click();
    await this.page.waitForTimeout(1000);
    await clientNumberXpath.waitFor({ state: "visible" });
    await clientNumberXpath.click();
    await addressColumnXpath.click();
    await privacyModeXpath.click();
    await activeFilters.waitFor({state:"visible"});
    await activeFilters.click({ force: true });
}

public async validateResetFiltersFunctionality(){
  const restFilters = await this.findLocator(locators.resetFiltersXpath);
  await restFilters.waitFor({state:"attached"});
    await restFilters.click();

}

public async resetVisibilityFunctionality(){
  await this.page.waitForLoadState('networkidle');
  const residentColumnsLocator = await this.findLocator(locators.residentColumns);
  const restVisibilityBtn = await this.findLocator(locators.resetVisibilityButton);
    await residentColumnsLocator.waitFor({state:"attached"});
    await residentColumnsLocator.click({force: true});
    await restVisibilityBtn.waitFor({state:"attached"});
    await restVisibilityBtn.click(); 
    await this.page.waitForTimeout(5000); 
    await this.page.reload({ waitUntil: 'networkidle' }); 
    await this.page.waitForTimeout(5000);  
}

public async validateEditButtonFunctionality(){
  await this.page.waitForLoadState('networkidle');
  const editBtn = await this.findLocator(locators.editButtonXpath);
  const editBoxHeader = await this.findLocator(locators.editBoxHeaderXpath);
    await editBtn.nth(2).waitFor({state:"attached"});
    await editBtn.nth(2).click();
  const editBoxheaderText = await editBoxHeader.textContent();
   expect(editBoxheaderText).toContain("Cliënt bewerken");
}

public async getAllLabelNames() :Promise<string[]> {
  const formLabel = await this.findLocator(locators.formlabelCSS);
  const formLabelCount =formLabel.count();
  const labelTexts: string[] = [];
  for(let i=0; i<await formLabelCount; i++){
    const labelText = await formLabel.nth(i).textContent(); 
    labelTexts.push(labelText?.trim() || ''); 
  }
  return labelTexts;  
}

public async fillFormData(nameDataValue:string,clientNumberValue:string,streetValue:string,houseNumberValue:string,postalCodeValue:string,cityValue:string){
  const nameData = await this.findLocator(locators.nameDataForm);
  const clientNumberData = await this.findLocator(locators.clientNumberDataForm);
  const streetData = await this.findLocator(locators.streetDataForm);
  const houseNumberData = await this.findLocator(locators.houseNumberDataForm);
  const postalCodeData = await this.findLocator(locators.postalCodeDataForm);
  const cityData = await this.findLocator(locators.cityDataForm);
  const saveBtn = await this.findLocator(locators.saveButton);
  await nameData.waitFor({state:"attached"});
  await nameData.fill(nameDataValue);
  await clientNumberData.waitFor({state:"attached"});
  await clientNumberData.fill(clientNumberValue);
  await streetData.waitFor({state:"attached"});
  await streetData.fill(streetValue);
  await houseNumberData.waitFor({state:"attached"});
  await houseNumberData.fill(houseNumberValue);
  await postalCodeData.waitFor({state:"attached"});
  await postalCodeData.fill(postalCodeValue);
  await cityData.waitFor({state:"attached"});
  await cityData.fill(cityValue);
  await saveBtn.waitFor({state:"attached"});
  await saveBtn.click();
}

public async validateDeleteButtonFunctionality(){
  const delBTn = await this.findLocator(locators.deleteButtonXpath);
  await delBTn.nth(3).waitFor({state:"attached"});
  await delBTn.nth(3).click();
  await this.page.waitForLoadState('networkidle');
  const toDeleteBTn = await this.findLocator(locators.toDeleteBtnXpath);
  await toDeleteBTn.waitFor({state:"attached"});
  await toDeleteBTn.click();
}





}