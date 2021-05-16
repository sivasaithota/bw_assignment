const Login = require('../locators/login');
const Home = require('../locators/home');

class LoginPage {
  constructor(browser) {
    this.browser = browser;
    this.loginLocator = new Login(this.browser);
    this.homeLocator = new Home(this.browser);
  }

  async enterUsername(usernameValue) {
    await this.browser.type(await this.loginLocator.usernameField(), usernameValue);
  }

  async enterPassword(passwordValue) {
    return this.browser.type(await this.loginLocator.passwordField(), passwordValue);
  }

  async loginWithUsername(username, password) {
    await this.enterUsername(username);
    await this.browser.click(await this.loginLocator.submitBtn());
    await this.enterPassword(password);
    await this.browser.waitFor(1000);
    await this.browser.click(await this.loginLocator.submitBtn());
  }

  async isLoggedIn() {
    return this.browser.isPresent(await this.homeLocator.createPostBtn());
  }
}

module.exports = LoginPage;
