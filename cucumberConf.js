var env = require('./features/support/environment.js');

exports.config = {
  seleniumAddress: env.seleniumAddress,

  // Spec patterns are relative to this directory.
  specs: [
    'features/*.feature',
    'features/*/*.feature'
  ],

  capabilities: env.capabilities,

  baseUrl: env.baseUrl,

  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    // Require files before executing the features.
    require: 'features/steps/*.js',
    // Only execute the features or scenarios with tags matching @dev.
    // This may be an array of strings to specify multiple tags to include.
    tags: '@dev',
    // How to format features (default: progress)
    format: 'pretty'
    // Other options include `coffee`, `noSnippets`, and `dryRun`
  },

  // If set, protractor will save the test output in json format at this path.
  // The path is relative to the location of this config.
  resultJsonOutputFile: null,

  // A callback function called once configs are read but before any environment
  // setup. This will only run once, and before onPrepare.
  // You can specify a file containing code to run by setting beforeLaunch to
  // the filename string.
  beforeLaunch: function () {
    // At this point, global variable 'protractor' object will NOT be set up,
    // and globals from the test framework will NOT be available. The main
    // purpose of this function should be to bring up test dependencies.
  },

  onPrepare: function () {
    // At this point, global variable 'protractor' object will be set up, and
    // globals from the test framework will be available. For example, if you
    // are using Jasmine, you can add a reporter with:
    //     jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(
    //         'outputdir/', true, true));
    //
    // If you need access back to the current configuration object,
    // use a pattern like the following:
    //     return browser.getProcessedConfig().then(function(config) {
    //       // config.capabilities is the CURRENT capability being run, if
    //       // you are using multiCapabilities.
    //       console.log('Executing capability', config.capabilities);
    //     });

    // Use the external Chai As Promised to deal with resolving promises in expectations.
    var chai = require('chai');
    var chaiAsPromised = require('chai-as-promised');
    console.log('########## PROTRACTOR ##########');

    chai.use(chaiAsPromised);
    global.expect = chai.expect;

    // Chai expect().to.exist syntax makes default jshint unhappy. jshint expr:true

    
  },

  // The params object will be passed directly to the Protractor instance,
  // and can be accessed from your test as browser.params. It is an arbitrary
  // object and can contain anything you may need in your test.
  // This can be changed via the command line as:
  //   --params.login.user "Joe"
  params: {
    login: {
      user: 'Jane',
      password: '1234'
    }
  }
};