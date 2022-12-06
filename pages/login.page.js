export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('[name="username"]');
        this.passwordInput = page.locator('[name="password"]');
        this.autologinBtn = page.locator("#autologin");
        this.submitBtn = page.locator('[type="submit"]');
    }

   
    async login(username, pwd) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(pwd);
        await this.autologinBtn.click();
        await this.submitBtn.click();
    }

}
   

