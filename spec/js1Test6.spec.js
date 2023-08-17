import {getNum1, getNum2, getSum} from '../index.js';

describe('JavaScript Coding Challenge', () => {

  it('should declare two variables named num1 and num2 and assign them number values, then declare a third variable named sum and assign it the sum of num1 and num2', () => {
    expect(getSum()).toBe(getNum1() + getNum2());
  });
});