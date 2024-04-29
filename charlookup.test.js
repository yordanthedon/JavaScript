import {expect} from 'chai';
import {lookupChar} from '../charlookup.js';

describe('CharLookUp', () => {
    it('Should return the correct index', () => {
        expect(lookupChar('index', 2)).to.be.equal('d');
    });
    it('Should return "Incorrect index"', () => {
        expect(lookupChar('index', 6)).to.be.equal('Incorrect index');
        expect(lookupChar('index', -1)).to.be.equal('Incorrect index');
        expect(lookupChar('index', 5)).to.be.equal('Incorrect index');
    });
    it('Should return undefined', () => {
        expect(lookupChar(false, 5)).to.be.undefined;
        expect(lookupChar(5, 5)).to.be.undefined;
        expect(lookupChar(undefined, 5)).to.be.undefined;
        expect(lookupChar('null', '')).to.be.undefined;
        expect(lookupChar('null', 'index')).to.be.undefined;
        expect(lookupChar('null', false)).to.be.undefined;
        expect(lookupChar('nusdsdll', 5.5)).to.be.undefined;
    });
});