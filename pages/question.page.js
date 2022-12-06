export default class QuestionPage {
    constructor(page) {
      this.page = page;
      this.issuesLink = page.locator(
        '//a[text()="Add repository sidebar hooks and configuration buttons for repositories"]'
      );
      
      this.checkMark1 = page.locator("#issues");
      this.checkMark2 = page.locator("#news");
      this.checkMark3 = page.locator("#changesets");
      this.checkMark4 = page.locator("#messages");
      this.checkMark5 = page.locator("#redmine_plugins");

    }

    async issuesLinkClick() {
        await this.issuesLink.click();
    }

    async checkMark() {
        await this.checkMark1.click();
        await this.checkMark2.click();
        await this.checkMark3.click();
        await this.checkMark4.click();
        await this.checkMark4.click();
    }
}
