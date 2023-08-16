import { firstName, age, isProgrammer, canVote, description, num1, num2, sum, option, decision, isAdult } from '../index.js'; 

describe('JavaScript Coding Challenge', () => {

  it('should declare a variable named isAdult using the ternary operator, holding a string value of Adult if age is 18 or over, and Not Adult if age is under 18', () => {
    expect(isAdult).toBe(age >= 18 ? 'Adult' : 'Not Adult');
  });
});
