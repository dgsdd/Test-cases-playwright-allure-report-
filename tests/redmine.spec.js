import { test, expect } from "@playwright/test";
import HomePage from "../pages/home.page.js";
import LoginPage from "../pages/login.page.js";
import QuestionPage from "../pages/question.page.js";

const username = "NAME";
const pwd = "136466633";
const text = "dynamic";
const title = "Search - Redmine";


test.describe("test cases for redmine.org", () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.goto();
    });

    test("visit login page, enter NAME and password", async ({
        page }) => {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        await homePage.signInClick();
        await loginPage.login(username, pwd);
        await expect(page).toHaveURL(`login`);
    });

    test("visit question page and click issuesLink", async ({ page }) => {
        const homePage = new HomePage(page);
        const questionPage = new QuestionPage(page);
        await homePage.questionBtnClick();
        await questionPage.issuesLinkClick();
        await expect(page).toHaveURL(`issues/37996`);
    });
    test("visit search page and have title", async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.searchInputFill(text);
        await page.keyboard.press("Enter");
        await expect(page).toHaveTitle(title);
        
    });

    test("go to feature page and have title", async ({ page }) => {
        const homePage = new HomePage(page);
        const questionPage = new QuestionPage(page);
        await homePage.questionBtnClick();
        await questionPage.issuesLinkClick();
        await expect(page).toHaveTitle("Feature #37996");
    });

    test("visit question page and check marks", async ({ page }) => {
        const homePage = new HomePage(page);
        const questionPage = new QuestionPage(page);
        await homePage.searchInputFill(text);
        await page.keyboard.press("Enter");
        await questionPage.checkMark();
        await expect(page).toHaveTitle(title);
    });
});
