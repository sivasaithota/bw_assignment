const config = require('config');

module.exports = {
  BASE: config.get('Base'),
  BASE_URL: process.env.url || config.get('Base.Url'),
  PASSWORD: config.get('Base.password'),
  USERNAME: config.get('Base.username'),
  SCREENSHOTPATH: config.get('Path.screenshotPath'),
  WAITTIME: config.get('Wait'),
  HTMLREPORTPATH: config.get('Path.reports.HTMLReport'),
  HTMLFOLDERPATH: config.get('Path.reports.HTMLFolder'),
  JSONREPORTPATH: config.get('Path.reports.jsonReport'),
  WAIT: {
    XS: config.get('Wait.XS'),
    S: config.get('Wait.S'),
    M: config.get('Wait.M'),
    L: config.get('Wait.L'),
    XL: config.get('Wait.XL'),
    XXL: config.get('Wait.XXL'),
  },
  PUPPETEER: {
    FULLSCREEN: config.get('puppeteer.fullScreen'),
    WINDOWSIZE: config.get('puppeteer.windowSize'),
    SLOWMO: config.get('puppeteer.slowMo'),
    SANDBOX: config.get('puppeteer.sandBox'),
  },
};
