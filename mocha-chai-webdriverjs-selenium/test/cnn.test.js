/* global describe, it, before, after */
'use strict';

var SauceLabs = require('saucelabs'),
    sauce = new SauceLabs({
        username: process.env.SAUCE_USER || '',
        password: process.env.SAUCE_KEY || ''
    }),
    useSauceLabs = true, // I am manually toggling this for now
    chai = require('chai'),
    webdriverjs = require('webdriverjs'),
    options = {
        desiredCapabilities: {
            browserName: 'chrome',
            version: 31,
            platform: 'Windows 8.1',
            name: 'Mocha/Chai/Selenium CNN.com POC on SauceLabs'
        },
        host: useSauceLabs ? 'ondemand.saucelabs.com' : 'localhost',
        port: useSauceLabs ? 80 : 4444,
        user: useSauceLabs ? process.env.SAUCE_USER : '',
        key: useSauceLabs ? process.env.SAUCE_KEY : '',
        logLevel: 'silent'  // verbose | silent | command | data | result
    },
    client = webdriverjs.remote(options);

global.should = chai.should();

console.log(' browser: %s', options.desiredCapabilities.browserName);
console.log(' version: %s', options.desiredCapabilities.version);
console.log('    host: %s', options.host);
console.log('    port: %d', options.port);
console.log('    user: %s', options.user);
console.log('logLevel: %s', options.logLevel);
console.log('    name: %s', options.desiredCapabilities.name);


/* this is used to send a result to sauce labs so they can record it
 * the problem is that there are multiple tests in this file but sauce
 * only sees it as one job, with one global pass or fail
 */
/*
 *function recordResult(result, done) {
 *    console.log('recordResult called');
 *
 *    function updateJob(error, response) {
 *        if (response.status === 'in progress') {
 *            console.log('result is %j', result);
 *            console.log('id: %s', response.id);
 *            sauce.updateJob(response.id, { passed: result }, function () {
 *                console.log('job updated');
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
