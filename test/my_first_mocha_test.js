/**
 * Created by guru on 24/01/18.
 */
const assert = require('chai').assert;
const app = require('../app');


/*
 1. test to capture output

 */

describe('App', function () {
    it('return correct value', function () {
        assert.equal(app(), 'helloz');
    });
});