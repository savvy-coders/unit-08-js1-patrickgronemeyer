import { firstName, age, isProgrammer, canVote, description, num1, num2, sum, option, decision, isAdult } from '../solution.js'; 

describe('JavaScript Coding Challenge', () => {
  it('should declare a variable named firstName and assign it a string value', () => {
    expect(typeof firstName).toBe('string');
  });

  it('should declare a variable named age and assign it a number value', () => {
    expect(typeof age).toBe('number');
  });

  it('should declare a variable named isProgrammer and assign it a boolean value', () => {
    expect(typeof isProgrammer).toBe('boolean');
  });

  it('should declare a variable named canVote and assign it a boolean value indicating whether a person of your age is eligible to vote', () => {
    expect(canVote).toBe(age >= 18);
  });

  it('should declare a variable named description and assign it a string that includes firstName, age, and whether or not you are a programmer', () => {
    expect(description).toBe(`My name is ${firstName}, I am ${age} years old and it is ${isProgrammer ? 'true' : 'false'} that I am a programmer.`);
  });

  it('should declare two variables named num1 and num2 and assign them number values, then declare a third variable named sum and assign it the sum of num1 and num2', () => {
    expect(sum).toBe(num1 + num2);
  });

  it('should declare a variable named option and assign it a string value of 1, 2, or 3, then declare a variable named decision and assign it a different string value based on the value of option', () => {
    switch(option) {
      case '1':
        expect(decision).toBe('Option 1');
        break;
      case '2':
        expect(decision).toBe('Option 2');
        break;
      case '3':
        expect(decision).toBe('Option 3');
        break;
      default:
        expect(decision).toBe('Invalid option');
    }
  });

  it('should declare a variable named isAdult using the ternary operator, holding a string value of Adult if age is 18 or over, and Not Adult if age is under 18', () => {
    expect(isAdult).toBe(age >= 18 ? 'Adult' : 'Not Adult');
  });
});
