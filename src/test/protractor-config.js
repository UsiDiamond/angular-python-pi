exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  framework: "jasmine",
  //Says in which browsers the tests should run
  multiCapabilities: [
    {
      browserName: "chrome",
    },
    {
      browserName: "firefox",
    },
  ],
  //Configure the browser to your tests
  onPrepare: function () {
    browser.driver.manage().window().setSize(1600, 800);
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose: true,
    includeStackTrace: true,
  },
  //The test file itself
  specs: ["spec.js"],
};
