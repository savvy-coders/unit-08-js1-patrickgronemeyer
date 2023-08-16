import { firstName, age, isProgrammer, canVote, description, num1, num2, sum, option, decision, isAdult } from '../index.js'; 

describe('JavaScript Coding Challenge', () => {

  it('should declare a variable named canVote and assign it a boolean value indicating whether a person of your age is eligible to vote', () => {
    expect(canVote).toBe(age >= 18);
  });
});