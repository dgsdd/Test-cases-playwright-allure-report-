class QuestionPage {
  constructor(page) {
        this.page = page;
        this.issuesLink = page.locator('//*[@id="issue-37989"]/td[5]/a');
        this.homeBtn = page.locator('.home');
  }
  async issuesLinkClick() {
    await this.issuesLink.click();
  }

  async homeBtnClick() {
    await this.homeBtn.click();
  }

}
  module.exports = { QuestionPage };