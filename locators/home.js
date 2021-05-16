class Home {
  constructor(browser) {
    this.page = browser;
  }

  createPostBtn() {
    return this.page.findElement('.//button[@id=\'create-button\']');
  }

  personType(type) {
    return this.page.findElement(`.//label//span[normalize-space()='${type}']`);
  }

  openBtn() {
    return this.page.findElement('.//button[normalize-space()=\'OPEN\']');
  }

  multipleChoiceBtn() {
    return this.page.findElement('.//button[normalize-space()=\'MULTIPLE CHOICE\']');
  }

  questionType(type) {
    return this.page.findElement(`.//button[normalize-space()='${type}']`);
  }

  groupOption(option) {
    return this.page.findElement(`.//div[@role='option' and normalize-space()='${option}']`);
  }

  selectGroup() {
    return this.page.findElement('.//div[contains(text(),\'Select\')]');
  }

  submitBtn() {
    return this.page.findElement('.//button[@type=\'submit\']');
  }

  postQuestionBox() {
    return this.page.findElement('.//textarea[@name=\'question\']');
  }

  multipleChoiceOptions(index) {
    return this.page.findElement(`.//input[@name='option${index}']`);
  }

  questionPost(question) {
    return this.page.findElement(`.//span[normalize-space()='${question}']/parent::span`);
  }
}

module.exports = Home;
