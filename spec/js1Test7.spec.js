import { getOption, getDecision } from '../index.js';

describe('JavaScript Coding Challenge', () => {

  it('should declare a variable named option and assign it a string value of 1, 2, or 3, then declare a variable named decision and assign it a different string value based on the value of option', () => {
    switch (getOption()) {
      case '1':
        expect(['Option One', '1', 'Option 1', 'option 1']).toContain(getDecision());
        break;
      case '2':
        expect(['Option Two', '2', 'Option 2', 'option 2']).toContain(getDecision());
        break;
      case '3':
        expect(['Option Three', '3', 'Option 3', 'option 3']).toContain(getDecision());
        break;
      default:
        expect(getDecision()).toBe('Invalid option');
    }
  });
});
