const Browser = require('./autoframe/wrapper/browser');

jest.setTimeout(360000);
const { beforeAll, it } = global;

global.beforeAll = (func) => {
  try {
    return beforeAll(async () => {
      this.browser = new Browser();
      return func({
        browser: this.browser,
      });
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    // eslint-disable-next-line no-console
    console.log('Failed in Before All');
  }
};

global.it = async (name, options, func) => {
  try {
    return it(name, async () => {
      try {
        await func();
      } catch (e) {
        console.log(e);// eslint-disable-line no-console
        if (this.browser && this.browser.page) await this.browser.screenshot(options.testId);
        throw new Error('Test Failed');
      }
    });
  } catch (error) {
    console.log(error);// eslint-disable-line no-console
    await this.browser.screenshot(options.testId);
    throw new Error('Test Failed');
  }
};
