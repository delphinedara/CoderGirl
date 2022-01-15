const isAnagram = require('../anagrams');
const assert = require('assert');

describe('isAnagram - basic functionality', ()=>{
    it ('returns true when two known anagrams are passed in', ()=>{
        let expected = true;
        let actual = isAnagram('listen', 'silent');
        assert.strictEqual(actual, expected);
    });

    it('returns false when either of the strings has extra letters',()=>{
        let expected = false;
        let actual = isAnagram('elbows', 'below');
        assert.strictEqual(actual,expected);

        let actual2= isAnagram('below','elbows');
        assert.strictEqual(actual2,expected);

    })

    it('returns false when strings have the same letters in different values ', ()=>{
        let expected =false;
        let actual =isAnagram('listens', 'silent');
        assert.strictEqual(actual, expected);
    })

})