'use strict';
/* eslint no-undef: 0 */
describe('jab-seed', function () {
  var elm;
  var html;

  beforeEach(function loadApp() {
    module('app');
  });

  beforeEach(function compileHTML() {
    html = '' +
      '<!doctype html>' +
      '<html lang="en" ng-app="app">' +
      '</html>';

    elm = angular.element(html);
  });

  it('should be defined', function () {
    expect(function () {angular.bootstrap(elm, ['appimaginary']);}).to.throw();
    expect(function () {angular.bootstrap(elm, ['app']);}).not.to.throw();
  });
});
