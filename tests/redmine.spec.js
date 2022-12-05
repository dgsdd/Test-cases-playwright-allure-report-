const { test, expect } = require("@playwright/test");
const { HomePage } = require("../pages/home.page.js");
const { LoginPage } = require("../pages/login.page.js");
const { QuestionPage } = require("../pages/question.page.js");
const { FeaturePage } = require("../pages/feature.page.js");
const { SearchPage } = require("../pages/search.page.js");
let homePage;
let loginPage;
let questionPage;
let featurePage;
let searchPage;

test.describe ("test cases for redmine.org", () => {
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        questionPage = new QuestionPage(page);
        featurePage= new FeaturePage(page);
        searchPage = new SearchPage(page);
        await homePage.goto("https://www.redmine.org/");
    });
   
    test("1) enter login page, enter NAME, password and take screenshot", async ({ page }) => {
        await homePage.signInClick();
        await page.keyboard.press("Enter");
        await loginPage.usernameInputFill("NAME");
        await loginPage.passwordInputFill("136466633");
        await loginPage.autologinBtnClick(); 
        await page.screenshot({ path: 'screenshot.png' });

    });
    test("2) enter question page and return to home page", async ({ page }) => {
        await homePage.questionBtnClick();
        await questionPage.homeBtnClick();
        await homePage.imageLabelIsEnabled();
       
        
    });
    test("3) enter search page", async ({ page }) => {
        await homePage.searchInputFill("dynamic");
        await page.keyboard.press("Enter");
        await page.screenshot({ path: 'screenshot1.png' });
        await searchPage.checkBoxClick();
        await searchPage.sendBtnClick();
        await page.screenshot({ path: 'screenshot2.png' });

    });

    test("4) go to feature page and have title", async ({ page }) => {
        await homePage.questionBtnClick();
        await questionPage.issuesLinkClick();
        await featurePage.featureLabelIsVisible();
        await expect(page).toHaveTitle("Defect #37988: Dynamic Fields - Redmine");
        
    });
     
    test("5) Enter empty login and check message", async ({ page }) => {
        await homePage.signInClick();
        await loginPage.submitBtnClick() ;
        await loginPage.flashErrorIsVisible();
        await loginPage.flashErrorIsEnabled();
        await loginPage.flashErrorIsHidden();
        await loginPage.flashErrorIsEditable();

    });


}); 
