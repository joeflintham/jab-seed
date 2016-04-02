module.exports = function karmaConfig(config) {
  config.set({

    // base path used to resolve all patterns (e.g. files, exclude)
    basePath: '',

    // frameworks to use
    frameworks: ['mocha', 'chai'],

    plugins: [
      'karma-mocha',
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-mocha',
      'karma-chai',
      'karma-mocha-reporter',
      'karma-ng-html2js-preprocessor'
    ],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/jquery/dist/jquery.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'frontend/**/*.js',
      'frontend/**/*.html',
      'test/unit/**/*spec.js'
    ],

    ngHtml2JsPreprocessor: {
      stripPrefix: 'frontend/html/'
    },

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    preprocessors: {
      'frontend/**/*.js': ['coverage'],
      'frontend/**/*.html': ['ng-html2js']
    },

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    // test results reporter to use
    reporters: ['mocha', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests on file changes
    autoWatch: true,

    // start these browsers
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
