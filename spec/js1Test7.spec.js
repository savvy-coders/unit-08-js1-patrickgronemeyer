import { firstName, age, isProgrammer, canVote, description, num1, num2, sum, option, decision, isAdult } from '../index.js'; 

describe('JavaScript Coding Challenge', () => {

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
});