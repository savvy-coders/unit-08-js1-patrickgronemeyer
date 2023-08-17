import {getIsProgrammer} from '../index.js';

describe('JavaScript Coding Challenge', () => {

  it('should declare a variable named isProgrammer and assign it a boolean value', () => {
    expect(typeof getIsProgrammer()).toBe('boolean');
  });
});