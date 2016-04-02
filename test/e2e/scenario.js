'use strict';
/* eslint no-undef: 0 */
var chai = require('chai');
var promised = require('chai-as-promised');
var expect = chai.expect;

chai.use(promised);

describe('app', function () {
  beforeEach(function () {
    browser.get('/');
  });

  it('should successfully load the demo page', function () {
    expect(browser.getTitle()).to.eventually.equal('');
  });
});
