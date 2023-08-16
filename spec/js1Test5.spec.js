import { firstName, age, isProgrammer, canVote, description, num1, num2, sum, option, decision, isAdult } from '../index.js'; 

describe('JavaScript Coding Challenge', () => {

  it('should declare a variable named description and assign it a string that includes firstName, age, and whether or not you are a programmer', () => {
    expect(description).toBe(`My name is ${firstName}, I am ${age} years old and it is ${isProgrammer ? 'true' : 'false'} that I am a programmer.`);
  });
});