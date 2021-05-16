/* eslint-disable no-plusplus */
const Home = require('../locators/home');

class HomePage {
  constructor(browser) {
    this.browser = browser;
    this.home = new Home(this.browser);
  }

  async createPost(values) {
    await this.browser.click(await this.home.createPostBtn());
    await this.browser.click(await this.home.personType(values.person));
    if ((values.question.type).toString().toLowerCase() === 'open') await this.createOpenPost(values.question);
    else await this.createMultipleChoice(values.question);
    await this.publishPost();
  }

  async createOpenPost(values) {
    await this.browser.click(await this.home.openBtn());
    await this.browser.click(await this.home.selectGroup());
    await this.browser.click(await this.home.groupOption(values.group));
    await this.browser.click(await this.home.submitBtn());
    await this.browser.type(await this.home.postQuestionBox(), values.query);
  }

  async createMultipleChoice(values) {
    await this.browser.click(await this.home.multipleChoiceBtn());
    await this.browser.click(await this.home.selectGroup());
    await this.browser.click(await this.home.groupOption(values.group));
    await this.browser.click(await this.home.submitBtn());
    await this.browser.type(await this.home.postQuestionBox(), values.query);
    for (let index = 0; index < values.choices.length; index++) {
      await this.browser.type(await this.home.multipleChoiceOptions(index + 1), values.choices[index]);
    }
  }

  async publishPost() {
    await this.browser.click(await this.home.submitBtn());
  }

  async isPostCreated(question) {
    return this.browser.isPresent(await this.home.questionPost(question));
  }
}

module.exports = HomePage;
