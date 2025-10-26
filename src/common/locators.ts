const Locators = {
 userNameInput: "//*[@id='username']",
 password: "//*[@id='password']",
 signInButton: "//*[@id='kc-login']",
 headerText: "//span[@role='link' and @aria-current='page']",
 residentLink: "a:has-text('Cliëntenbeheer')",
 residentNameColumn: "//button[.//span[normalize-space(text())='Name']]",
 residentSectorColumn: "//button[.//span[normalize-space(text())='Sector']]"
};

export default Locators;