import {getAge, getCanVote} from '../index.js';

describe('JavaScript Coding Challenge', () => {

  it('should declare a variable named canVote and assign it a boolean value indicating whether a person of your age is eligible to vote', () => {
    expect(getCanVote()).toBe(getAge() >= 18);
  });
});