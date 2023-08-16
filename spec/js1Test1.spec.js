import { firstName, age, isProgrammer, canVote, description, num1, num2, sum, option, decision, isAdult } from '../index.js'; 

describe('JavaScript Coding Challenge', () => {
  it('should declare a variable named firstName and assign it a string value', () => {
    expect(typeof firstName).toBe('string');
  });
});