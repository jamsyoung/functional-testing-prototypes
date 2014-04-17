/* global describe, it, before, after */
'use strict';

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
        client.init().url('http://www.cnn.com/', done);
    });

    describe('page', function () {
        it('should have a title that contains "CNN.com"', function (done) {
            client.getTitle(function (error, result) {
                expect(result).to.contain('CNN.com');
                done();
            });
        });
    });

    describe('page navigation', function () {
        it('should have an item for "Home"', function (done) {
            client.getText('#nav-home', function (error, result) {
                expect(result).to.equal('Home');
                done();
            });
        });

        it('should have an item for "TV & Video"', function (done) {
            client.getText('#nav-video', function (error, result) {
                expect(result).to.equal('TV & Video');
                done();
            });
        });

        it('should have an item for "CNN Trends"', function (done) {
            client.getText('#nav-trends', function (error, result) {
                expect(result).to.equal('CNN Trends');
                done();
            });
        });
    });

    after(function (done) {
        client.end(done);
    });
});
