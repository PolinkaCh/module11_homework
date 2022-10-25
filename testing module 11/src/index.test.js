import {getPercents} from './index.js';

describe("test for function countDown", () => {
    it('test for successful result', () => {
    expect(getPercents(30,200)).toBe(60)}) ,
    it ('test for negative result', () => {
    expect(getPercents(15, 350)).toBe(78)
    }),
    it ('test for corner case', () => {
        expect(getPercents(0, 10)).toBe(0)
    }),
    it ('test for corner case', () => {
        expect(getPercents(-10, 350)).toBe(-35)
    })
});
