/* global describe, it, before, after */
'use strict';

describe('cersei.tbs.io', function () {

    before(function (done) {
        client.init().url('http://cersei.tbs.io/test.html', done);
    });

    describe('page', function () {
        it('should have a background image of a kitten', function (done) {
            client.getCssProperty('.has-background', 'background-image', function (error, result) {
                expect(result).to.contain('http://placekitten.com/g/200/300');
                done();
            });
        });
    });

    after(function (done) {
        client.end(done);
    });
});
