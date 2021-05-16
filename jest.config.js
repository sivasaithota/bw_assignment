module.exports = {
  // All imported modules in your tests should be mocked automatically
  // automock: false,
  setupFilesAfterEnv: [
    './jest.setup.js',
  ],
  // The test environment that will be used for testing
  testEnvironment: 'node',

  // Adds a location field to test results
  testLocationInResults: false,

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/spec/**/*.[jt]s?(x)',
    '**/?(*_)+(spec|test).[tj]s?(x)',
  ],
  testPathIgnorePatterns: [
    '/spec/constants/',
  ],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './reports/html-report',
        filename: 'report.html',
        expand: true,
        pageTitle: 'Test Automation Report',
        logoImgPath: './reports/logo.png',
        hideIcon: true,
      },
    ],
  ],
  testResultsProcessor: undefined,
};
