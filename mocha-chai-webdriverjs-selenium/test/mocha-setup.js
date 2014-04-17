'use strict';

var chai = require('chai'),
    SauceLabs = require('saucelabs'),
    webdriverjs = require('webdriverjs'),
    sauceUser = process.env.SAUCE_USER || '',
    sauceKey = process.env.SAUCE_KEY || '',
    sauce;

global.debug = require('debug')('mocha-test');

global.useSauceLabs = (process.env.USE_SAUCE_LABS === 'TRUE') ? true : false, // environment variable is a string

global.options = {
    desiredCapabilities: {
        browserName: 'chrome',
        version: useSauceLabs ? 31 : '*',
        platform: useSauceLabs ? 'Windows 8.1' : null,
        name: 'CNN.com PoC Selenium Testing'
    },
    host: useSauceLabs ? 'ondemand.saucelabs.com' : 'localhost',
    port: useSauceLabs ? 80 : 4444,
    user: useSauceLabs ? sauceUser : '',
    key: useSauceLabs ? sauceKey : '',
    logLevel: 'silent'  // verbose | silent | command | data | result
};

if (useSauceLabs) {
    sauce = new SauceLabs({
        username: sauceUser,
        password: sauceKey
    });
}

chai.Assertion.includeStack = false;

global.expect = chai.expect;
global.should = chai.should();
global.client = webdriverjs.remote(options);

debug('mocha-setup finished');