//const { expect } = require('@playwright/test');
class HomePage {
  constructor(page) {
        this.page = page;
        this.signIn = page.locator('[class="login"]');
        this.searchInput = page.locator('[class="small"]');
        this.questionBtn = page.locator('[class="issues"]')
  }
  
  async goto() {
        await this.page.goto('https://www.redmine.org/');
  }
  async signInClick() {
    await this.signIn.click();
  }
 
  async searchInputFill(value) {
    await this.searchInput.fill(value);
  }
 
  async questionBtnClick() {
    await this.questionBtn.click();
  }

 
}
module.exports = { HomePage };