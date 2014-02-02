/* global describe, it, before, after */
'use strict';

var chai = require('chai'),
    webdriverjs = require('webdriverjs'),
    useSauceLabs = false, // I am manutally toggling this for now
    options = {
        desiredCapabilities: {
            browserName: 'chrome',
            name: 'Mocha/Chai/Selenium CNN.com POC on SauceLabs'
        },
        host: useSauceLabs ? 'ondemand.saucelabs.com' : 'localhost',
        port: useSauceLabs ? 80 : 4444,
        user: useSauceLabs ? 'saucelabs-username' : '',
        key: useSauceLabs ? 'saucelabs-key' : '',
        logLevel: 'silent'  // verbose | silent | command | data | result
    },
    client = webdriverjs.remote(options);

global.should = chai.should();

console.log(' browser: %s', options.desiredCapabilities.browserName);
console.log('    host: %s', options.host);
console.log('    port: %d', options.port);
// console.log('    user: %s', options.user);
// console.log('     key: %s', options.key);
console.log('logLevel: %s', options.logLevel);
console.log('    name: %s', options.desiredCapabilities.name);


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
