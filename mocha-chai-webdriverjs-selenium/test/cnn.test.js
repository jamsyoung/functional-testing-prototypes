/* global describe, before, beforeEach, it, afterEach */
'use strict';

var expect = require('chai').expect,
    webdriverjs = require('webdriverjs'),
    client = webdriverjs.remote();

describe('cnn.com', function () {

    before(function () {
        client.addCommand('hasText', function (selector, text, callback) {
            this.getText(selector, function (result) {
                expect(result).to.be.a('object');
                expect(result.value).to.be.a('string');
                expect(result.value).to.have.string(text);
                callback();
            });
        });
    });

    beforeEach(function (done) {
        client.init();
        client.url('http://www.cnn.com/', done);
    });

    it('should have a navigation item named "Home"', function (done) {
        client.hasText('#nav-home', 'Homez', done);
    });

    afterEach(function (done) {
        client.end();
        done();
    });
});
