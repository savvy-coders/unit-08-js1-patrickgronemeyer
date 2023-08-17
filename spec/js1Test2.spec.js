import {getAge} from '../index.js';

describe('JavaScript Coding Challenge', () => {

  it('should declare a variable named age and assign it a number value', () => {
    expect(typeof getAge()).toBe('number');
  });
});