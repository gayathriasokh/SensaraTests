const Locators = {
 userNameInput: "//*[@id='username']",
 password: "//*[@id='password']",
 signInButton: "//*[@id='kc-login']",
 headerText: "//span[@role='link' and @aria-current='page']",
 residentLink: "a:has-text('Cliëntenbeheer')",
 residentNameColumn: "//button[.//span[normalize-space(text())='Name']]",
 residentSectorColumn: "//button[.//span[normalize-space(text())='Sector']]",
 tableBeforeHeadersXpath: "//table//thead//tr//th[",
 tableAfterHeadersXpath: "]//div//button[1]//span//span",
 tableHeaders: "//table//thead//tr//th",
 arrowUpDownXpath: "//div[contains(@class,'flex flex-col ml-1')]",
 firstCellText: "//table//tbody//tr[1]//td[1]//span",
 polygonBtn: "button:has(svg polygon)",
 polygonValue: "//span[contains(text(), 'Alex de Badkamer')]"

};

export default Locators;