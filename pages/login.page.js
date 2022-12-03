class LoginPage {
  constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('[name="username"]');
        this.passwordInput = page.locator('[name="password"]');
        this.autologinBtn = page.locator('#autologin');
        this.submitBtn = page.locator('[type="submit"]');
        this.flashError = page.locator('#flash_error');
        this.homeBtn = page.locator('.home');
  }
  async goto() {
        await this.page.goto('https://www.redmine.org/');
  }
  async usernameInputFill(value) {
    await this.usernameInput.fill(value);
  }
  async passwordInputFill(value) {
    await this.passwordInput.fill(value);

  }
    async autologinBtnClick() {
    await this.autologinBtn.click();
  }

  async submitBtnClick() {
    await this.submitBtn.click();
  }
  async homeBtnClick() {
    await this.homeBtn.click();
  }


  async flashErrorIsVisible() {
    await this.flashError.isVisible();
  }
  async flashErrorIsEnabled() {
    await this.flashError.isEnabled();
  }
  async flashErrorIsHidden() {
    await this.flashError.isHidden();
  }
   async flashErrorIsEditable() {
    await this.flashError.isEditable();
  }
}
module.exports = { LoginPage };
