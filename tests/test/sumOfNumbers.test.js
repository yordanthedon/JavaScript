import { expect } from "chai";
import sum from "../sumOfNumbers.js";

describe('Sum', () => {
    it('Return sum of elements', () =>{
        const input = [1, 2, 3];
        const output = 6;

        const actualResult = sum(input);

        expect(actualResult).to.equal(output);
    })
})