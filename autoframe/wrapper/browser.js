const puppeteer = require('puppeteer');
const helper = require('./helper');
const constants = require('../constants');

class Browser {
  constructor() {
    this.driver = null;
    this.page = null;
  }

  async launch() {
    try {
      const opts = {
        headless: helper.isLinux(),
        slowMo: 50,
        defaultViewport: null,
        timeout: constants.WAIT.XS,
        args: [constants.PUPPETEER.FULLSCREEN, constants.PUPPETEER.WINDOWSIZE, '--no-sandbox'],
      };
      this.driver = await puppeteer.launch(opts);
      [this.page] = await this.driver.pages();
      // Installs the helper to the page. Mouse will be visible in the subsequent navigation.
    } catch (err) {
      console.log(err.stack);// eslint-disable-line no-console
    }
  }

  async findElement(selector, options) {
    try {
      if (selector.includes('.//')) {
        if (options != null) await this.page.waitForXPath(selector, options);
        else await this.page.waitForXPath(selector);
        return (await this.page.$x(selector))[0];
      }

      if (options != null) await this.page.waitForSelector(selector, options);
      else await this.page.waitForSelector(selector);
      return await this.page.$(selector);
    } catch (error) {
      return null;
    }
  }

  async getElements(selector, options) {
    switch (options) {
      case 'timeout':
        await this.page.waitForXPath(selector, { timeout: options.timeout });
        break;
      case 'visible':
        await this.page.waitForSelector(selector, { visible: true });
        break;
      case 'hidden':
        await this.page.waitForSelector(selector, { hidden: true });
        break;
      default:
    }
  }

  async findElements(selector) {
    try {
      if (selector.includes('.//')) {
        await this.page.waitForXPath(selector);
        return this.page.$x(selector);
      }

      await this.page.waitForSelector(selector);
      return this.page.$$(selector);
    } catch (error) {
      return null;
    }
  }

  focus() {
    return this.page.bringToFront();
  }

  click(element, options) {
    return element.click(options);
  }

  async type(element, value) {
    await element.type(value);
  }

  async clearAndType(element, value) {
    await this.click(element);
    await this.page.evaluate(() => document.execCommand('selectall', false, null));// eslint-disable-line no-undef
    await this.page.keyboard.press('Delete');
    await this.type(element, value);
  }

  async clear(element) {
    await this.click(element);
    await this.page.evaluate(() => document.execCommand('selectall', false, null));// eslint-disable-line no-undef
    await this.page.keyboard.press('Delete');
  }

  doubleClick(element) {
    return this.click(element, { clickCount: 2 });
  }

  async goto(url) {
    try {
      await this.page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    } catch (error) {
      console.log(error.stack);// eslint-disable-line no-console
    }
  }

  reload() {
    return this.page.reload();
  }

  quit() {
    return this.driver.close();
  }

  close() {
    return this.page.close();
  }

  async text(element) {
    const text = await (await element.getProperty('textContent')).jsonValue();
    return text.trim();
  }

  async screenshot(shotName = Date.now()) {
    const screenshotPath = helper.getPath(constants.SCREENSHOTPATH);
    await this.page.screenshot({ path: `${screenshotPath}/${shotName}.png` });
  }

  waitFor(time) {
    return this.page.waitFor(time);
  }

  async newPage() {
    try {
      this.page = await this.driver.newPage();
    } catch (error) {
      console.log(error.stack);// eslint-disable-line no-console
    }
  }

  hover(locator) {
    return locator.hover();
  }

  waitForPageToLoad() {
    return this.page.waitForNavigation({ waitUntil: 'networkidle2' });
  }

  async isPresent(locator) {
    return locator != null;
  }
}

module.exports = Browser;
