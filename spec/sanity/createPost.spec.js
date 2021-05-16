const Home = require('../../pages/home');
const Login = require('../../pages/login');
const constants = require('../../autoframe/constants');

describe('BetterWorks Automation Test', () => {
  let browser;
  let login;
  let timeString;
  let home;

  beforeAll(async obj => {
    browser = obj.browser;
    home = new Home(browser);
    login = new Login(browser);
    await browser.launch();
    await browser.goto(constants.BASE_URL);
  });

  beforeEach(async () => {
    await browser.reload();
    timeString = Date.now();
  });

  afterAll(async () => {
    await browser.quit();
  });

  it('Login with valid username and password', { testId: null }, async () => {
    await login.loginWithUsername(
      constants.USERNAME,
      constants.PASSWORD,
    );
    expect(await login.isLoggedIn()).toBe(true);
  });

  it('Create an open post as Anonymous', { testId: null }, async () => {
    const postValues = {
      person: 'Anonymous',
      question: {
        type: 'open',
        group: 'Arnaud',
        query: `This is automation test ${timeString}`,
      },
    };
    await home.createPost(postValues);
    expect(await home.isPostCreated(postValues.question.query)).toBe(true);
  });
  it('Create an multiple choice post as official', { testId: null }, async () => {
    await browser.goto(constants.BASE_URL);
    const postValues = {
      person: 'Official',
      question: {
        type: 'multiple choice',
        group: 'SF Bay Area',
        query: `This is automation test ${timeString}`,
        choices: ['test1', 'test2', 'test3', 'test4', 'test5'],
      },
    };
    await home.createPost(postValues);
    expect(await home.isPostCreated(postValues.question.query)).toBe(true);
  });
});
