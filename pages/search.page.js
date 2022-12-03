class SearchPage {
  constructor(page) {
    this.page = page;
    this.checkBox = page.locator('#titles_only');
    this.sendBtn = page.locator('[name="commit"]');
       
  }
  async checkBoxClick() {
    await this.checkBox.click();
  }

  async sendBtnClick() {
    await this.sendBtn.click();
  }

}
  module.exports = { SearchPage };