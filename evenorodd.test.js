import {expect} from 'chai';
import {isOddOrEven} from '../evenorodd.js';

describe('Even Or Odd', () => {
    it('Should return - Odd', () => {
        const input = 'aaa';
        const expectedResult = 'odd';
        const result = isOddOrEven(input);
        expect(result).to.equal(expectedResult);
    });
    it('Should return - Even', () => {
        const input = 'aaaa';
        const expectedResult = 'even';
        const result = isOddOrEven(input);
        expect(result).to.equal(expectedResult);
    });
    it('Should return undefined, when no string is given', () => {
        expect(isOddOrEven(7)).to.be.undefined;
        expect(isOddOrEven(true)).to.be.undefined;
        expect(isOddOrEven({ })).to.be.undefined;
        expect(isOddOrEven([ ])).to.be.undefined;
        expect(isOddOrEven({a : 'a'})).to.be.undefined;
        expect(isOddOrEven(['a'])).to.be.undefined;
    });
})