import { firstName, age, isProgrammer, canVote, description, num1, num2, sum, option, decision, isAdult } from '../index.js'; 

describe('JavaScript Coding Challenge', () => {

  it('should declare two variables named num1 and num2 and assign them number values, then declare a third variable named sum and assign it the sum of num1 and num2', () => {
    expect(sum).toBe(num1 + num2);
  });
});