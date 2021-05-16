class Login {
  constructor(browser) {
    this.page = browser;
  }

  passwordField() {
    return this.page.findElement('.//input[@type=\'password\']');
  }

  usernameField() {
    return this.page.findElement('.//input[@type=\'email\']');
  }

  submitBtn() {
    return this.page.findElement('.//button[@type=\'submit\']');
  }
}

module.exports = Login;
