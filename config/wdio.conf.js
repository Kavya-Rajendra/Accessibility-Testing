// const cucumberJSON = require('wdio-cucumberjs-json-reporter')
// const multipleCucumberHtmlReporter = require('multiple-cucumber-html-reporter')
// const moment = require('moment')
// const { removeSync } = require('fs-extra')

exports.config = {
  runner: 'local',
  specs: [
    './features/ISS_Accessibility.feature' // Provide the feature files, which you are going to test
  ],
  exclude: [
    // 'path/to/excluded/files'
  ],
  services: ["intercept", "devtools"],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 10,
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //
  capabilities: [
    {
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // 5 instances get started at a time.
      maxInstances: 5,
      //
      browserName: "chrome",
      // If outputDir is provided WebdriverIO can capture driver session logs
      // it is possible to configure which logTypes to include/exclude.
      // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
      // excludeDriverLogs: ['bugreport', 'server'],
    },
  ],
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "silent",
  //
  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
  // - @wdio/mocha-framework, @wdio/jasmine-framework
  // - @wdio/local-runner, @wdio/lambda-runner
  // - @wdio/sumologic-reporter
  // - @wdio/cli, @wdio/config, @wdio/sync, @wdio/utils
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  // logLevels: {
  // webdriver: 'info',
  // '@wdio/applitools-service': 'info'
  // },
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  // baseUrl: '',
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 1000000,
  //
  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  // services: [],//
  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: https://webdriver.io/docs/frameworks.html
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: "cucumber",

  cucumberOpts: {
    requireModule: ["@babel/register"],
    require: ["/Users/NI763593/Documents/WebDriverIO-with-CucumberJS-master/stepDefinitions/*.js"], // <string[]> (file/dir) require files before executing features
    backtrace: true, // <boolean> show full backtrace for errors
    dryRun: false, // <boolean> invoke formatters without executing steps
    failFast: false, // <boolean> abort the run on first failure
    format: ["pretty"], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    colors: true, // <boolean> disable colors in formatter output
    snippets: true, // <boolean> hide step definition snippets for pending steps
    source: true, // <boolean> hide source uris
    profile: [], // <string[]> (name) specify the profile to use
    strict: false, // <boolean> fail if there are any undefined or pending steps
    tags: [], // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    timeout: 1000000, // <number> timeout for step definitions
    //tagExpression: argv.tag || "",
    // tagExpression: argv.tag || 'not @SITonly',
    ignoreUndefinedDefinitions: true, // <boolean> Enable this config to treat undefined definitions as warnings.
  },

  // onPrepare () {
  //   removeSync('.tmp/')
  //   console.log('Starting cucumber tests')
  // },

  // async afterStep () {
  //   await browser.takeScreenshot().then((val) => {
  //     cucumberJSON.default.attach(val, 'image/png')
  //   }).catch((err) => {
  //     console.log('Error in capturing screenshots', err)
  //   })
  // },

  // onComplete () {
  //   multipleCucumberHtmlReporter.generate({
  //     openReportInBrowser: true,
  //     reportName: '', // Provide the report name to put it in the reports.
  //     screenshotPath: './reports/screenshots/',
  //     displayDuration: true,
  //     saveCollectedJSON: false,
  //     jsonDir: '.tmp/json/',
  //     reportPath: './reports/',
  //     customData: {
  //       title: 'Project Data',
  //       data: [
  //         { label: 'Project', value: '' }, // Provide the custom data value for project, for example: Test
  //         { label: 'Release', value: '1.0' },
  //         { label: 'Execution Start Date', value: moment().format('dddd, MMMM Do YYYY') }
  //       ]
  //     }
  //   })
  // }
}
