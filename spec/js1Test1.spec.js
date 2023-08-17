import {
  getFirstName
} from '../index.js';

describe('JavaScript Coding Challenge', () => {
  it('should declare a variable named firstName and assign it a string value', () => {
    expect(typeof getFirstName()).toBe('string');
  });
});