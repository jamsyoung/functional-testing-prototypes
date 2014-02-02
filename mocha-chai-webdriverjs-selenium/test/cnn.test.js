/* global describe, it, before, after */
'use strict';

var chai = require('chai'),
    webdriverjs = require('webdriverjs'),
    options = { desiredCapabilities: { browserName: 'chrome' } },
    client = webdriverjs.remote(options);

global.should = chai.should();

describe('cnn.com', function () {


    before(function (done) {
        client.init().url('http:/www.cnn.com', done);
    });


    describe('page', function () {
        it('should have a title that contains "CNN.com"', function (done) {
            client.getTitle(function (error, result) {
                result.should.contain('CNN.com');
                done();
            });
        });
    });


    describe('page navigation', function () {
        it('should have an item for "Home"', function (done) {
            client.getText('#nav-home', function (error, result) {
                result.should.equal('Home');
                done();
            });
        });

        it('should have an item for "TV & Video"', function (done) {
            client.getText('#nav-video', function (error, result) {
                result.should.equal('TV & Video');
                done();
            });
        });

        it('should have an item for "CNN Trends"', function (done) {
            client.getText('#nav-trends', function (error, result) {
                result.should.equal('CNN Trends');
                done();
            });
        });
    });


    after(function (done) {
        client.end(done);
    });
});
