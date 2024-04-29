import {expect} from 'chai';
import {mathEnforcer} from '../mathenforcer.js';

describe('Math Enforcer', () => {
    describe('Add five', () => {
        it('Should add 5 to the number', () => {
            const result = mathEnforcer.addFive(10);
            expect(result).to.equal(15);
        });
        it('Should add 5 to negative number', () => {
            const result = mathEnforcer.addFive(-10);
            expect(result).to.equal(-5);
        });
        it('Should add 5 to decimal number', () => {
            const result = mathEnforcer.addFive(10.5);
            expect(result).to.equal(15.5);
        });
        it('Should return undefined, when not a number is added', () => {
            expect(mathEnforcer.addFive(true)).to.be.undefined;
            expect(mathEnforcer.addFive('string')).to.be.undefined;
            expect(mathEnforcer.addFive('5')).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
        });
    });

    describe('Subtract Ten', () => {
        it('Should subtract 10 from the number', () => {
            const result = mathEnforcer.subtractTen(20);
            expect(result).to.equal(10);
        });
        it('Should subtract 10 from the number', () => {
            const result = mathEnforcer.subtractTen(-10);
            expect(result).to.equal(-20);
        });
        it('Should subtract 10 from the number', () => {
            const result = mathEnforcer.subtractTen(5);
            expect(result).to.equal(-5);
        });
        it('Should subtract 10 from the number', () => {
            const result = mathEnforcer.subtractTen(10.5);
            expect(result).to.equal(0.5);
        });
        it('Should return undefined, when not a number is subtracted', () => {
            expect(mathEnforcer.subtractTen('10')).to.be.undefined;
            expect(mathEnforcer.subtractTen('string')).to.be.undefined;
            expect(mathEnforcer.subtractTen('')).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
        });
    });

    describe('Sum', () => {
        it('Should sum the both numbers', () => {
            const result = mathEnforcer.sum(20, 10);
            expect(result).to.equal(30);
        });
        it('Should sum the both numbers', () => {
            const result = mathEnforcer.sum(20, -10);
            expect(result).to.equal(10);
        });
        it('Should sum the both numbers', () => {
            const result = mathEnforcer.sum(-10, -10);
            expect(result).to.equal(-20);
        });
        it('Should sum the both numbers', () => {
            const result = mathEnforcer.sum(10.5, 10);
            expect(result).to.equal(20.5);
        });
        it('Should return undefined, when one is not a number', () => {
            expect(mathEnforcer.sum('string', 10)).to.be.undefined;
            expect(mathEnforcer.sum('', '10')).to.be.undefined;
            expect(mathEnforcer.sum([], null)).to.be.undefined;
            expect(mathEnforcer.sum(true, undefined)).to.be.undefined;
        });
    });
});