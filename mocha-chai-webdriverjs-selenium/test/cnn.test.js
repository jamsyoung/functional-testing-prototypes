/* global describe, it, before, after */
'use strict';

var debug = require('debug')('mocha-test'),
    SauceLabs = require('saucelabs'),
    sauce = new SauceLabs({
        username: process.env.SAUCE_USER || '',
        password: process.env.SAUCE_KEY || ''
    }),
    useSauceLabs = (process.env.USE_SAUCE_LABS === 'TRUE') ? true : false, // environment variable is a string
    chai = require('chai'),
    webdriverjs = require('webdriverjs'),
    options = {
        desiredCapabilities: {
            browserName: 'chrome',
            version: useSauceLabs ? 31 : '*',
            platform: useSauceLabs ? 'Windows 8.1' : null,
            name: 'CNN.com PoC Selenium Testing'
        },
        host: useSauceLabs ? 'ondemand.saucelabs.com' : 'localhost',
        port: useSauceLabs ? 80 : 4444,
        user: useSauceLabs ? process.env.SAUCE_USER : '',
        key: useSauceLabs ? process.env.SAUCE_KEY : '',
        logLevel: 'silent'  // verbose | silent | command | data | result
    },
    client = webdriverjs.remote(options);

global.should = chai.should();

debug('process.env.USE_SAUCE_LABS: %s', process.env.USE_SAUCE_LABS);
debug(' browser: %s', options.desiredCapabilities.browserName);
debug(' version: %s', options.desiredCapabilities.version);
debug('    host: %s', options.host);
debug('    port: %d', options.port);
debug('    user: %s', options.user);
debug('logLevel: %s', options.logLevel);
debug('    name: %s', options.desiredCapabilities.name);


/* this is used to send a result to sauce labs so they can record it
 * the problem is that there are multiple tests in this file but sauce
 * only sees it as one job, with one global pass or fail
 */
/*
 *function recordResult(result, done) {
 *    debug('recordResult called');
 *
 *    function updateJob(error, response) {
 *        if (response.status === 'in progress') {
 *            debug('result is %j', result);
 *            debug('id: %s', response.id);
 *            sauce.updateJob(response.id, { passed: result }, function () {
 *                debug('job updated');
 *                done();
 *            });
 *        }
 *    }
 *
 *    sauce.getJobs(function (error, jobs) {
 *        for (var job in jobs) {
 *            if (jobs.hasOwnProperty(job)) {
 *                sauce.showJob(jobs[job].id, updateJob);
 *            }
 *        }
 *    });
 *}
 */


describe('cnn.com', function () {

    before(function (done) {
        client.init().url('http:/www.cnn.com/', done);
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
