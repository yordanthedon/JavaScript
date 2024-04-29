import {expect} from 'chai';
import {analyzeArray} from '../arrayanalyzer.js';

describe('Array Analyzer', () => {
    it('Should return object with specific param', () => {
        const input = analyzeArray([1, 2, 3]);

        expect(input).to.be.an('object');
        expect(input).to.have.property('min');
        expect(input).to.have.property('max');
        expect(input).to.have.property('length');
    })
    it('Should return highest number', () => {
        const input = [1, 11, 7];

        expect(analyzeArray(input)).has.property('max', 11);
    });
    it('Should return the highest negative number', () => {
        expect(analyzeArray([-7, -11, -7])).to.include({'max': -7});
    })
    it('Should return the highest decimal number', () => {
        expect(analyzeArray([3.14, 3.13, 3.17])).to.include({'max': 3.17});
    })
    it('Should return lowest positive number', () => {
        expect(analyzeArray([3, 5, 11])).has.property('min', 3);
    })
    it('Should return lowest negative number', () => {
        expect(analyzeArray([-3, -5, -11])).has.property('min', -11);
    })
    it('Should return the correct length', () => {
        expect(analyzeArray([3, 5, 11])).has.property('length', 3);
    })
    it('Should return undefined when empty array is given', () => {
        expect(analyzeArray([])).to.be.undefined;
    })
    it('Should return undefined when invalid input is given', () => {
        expect(analyzeArray()).to.be.undefined;
        expect(analyzeArray(false)).to.be.undefined;
        expect(analyzeArray(null)).to.be.undefined;
        expect(analyzeArray(1)).to.be.undefined;
        expect(analyzeArray(NaN)).to.be.undefined;
        expect(analyzeArray({})).to.be.undefined;
        expect(analyzeArray('123')).to.be.undefined;
    })
    it('Should work whit single element array is given', () => {
        expect(analyzeArray([1])).to.include({
            min: 1,
            max: 1,
            length: 1,
        })
    })
    it('Should return undefined when non number array is given', () => {
        expect(analyzeArray(['1', '2', '3'])).to.be.undefined;
    })
});