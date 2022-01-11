const setTemperature = require('../setTemperature');
const assert = require('assert');

describe("setTemperature", function() {
    it('should return "low temp" when passed 45', function() {
        let expected = "low temp";
        let actual = setTemperature(45);
        assert.strictEqual(actual, expected);
    });

    it('should return "high temp" when passed 101', function() {
        let expected = 'high temp';
        let actual = setTemperature(101);
        assert.strictEqual(actual, expected);
    });

    it('should return "temp set" when passed 75', function() {
        let expected = 'temp set';
        let actual = setTemperature(75);
        assert.strictEqual(actual, expected);
    });
});