import {
  getFirstName,
  getAge,
  getIsProgrammer,
  getDescription
} from '../index.js';

describe('JavaScript Coding Challenge', () => {

  it('should declare a variable named description and assign it a string that includes firstName, age, and whether or not you are a programmer', () => {
    const description = getDescription();
    expect(description).toMatch(getFirstName());
    expect(description).toMatch(String(getAge()));
    expect(description).toMatch(String(getIsProgrammer()));
  });
});
