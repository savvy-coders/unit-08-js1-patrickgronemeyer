import { firstName, age, isProgrammer, canVote, description, num1, num2, sum, option, decision, isAdult } from '../index.js'; 

describe('JavaScript Coding Challenge', () => {

  it('should declare a variable named age and assign it a number value', () => {
    expect(typeof age).toBe('number');
  });
});