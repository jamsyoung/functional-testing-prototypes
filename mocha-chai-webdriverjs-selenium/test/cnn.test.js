/* global describe, before, beforeEach, it, afterEach */
'use strict';

var expect = require('chai').expect,
    webdriverjs = require('webdriverjs'),
    client = webdriverjs.remote();

describe('Run Selenium tests', function () {

    before(function (done) {
        client.addCommand('hasText', function (selector, text, callback) {
            this.getText(selector, function (result) {
                expect(result.value).to.have.string(text);
                callback();
            });
        });
        done();
    });

    beforeEach(function (done) {
        client.init();
        client.url('http://cnn.com', done);
    });

    it('should be able to view the home page', function (done) {
        this.timeout(1000 * 10);
        client.hasText('#nav-home', 'Home');
        done();
    });

    afterEach(function (done) {
        client.end();
        done();
    });
});
