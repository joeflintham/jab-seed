exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'test/e2e/*.js'
  ],

  capabilities: {
    browserName: 'chrome'
  },

  baseUrl: 'http://localhost:8000',

  framework: 'mocha'
};
