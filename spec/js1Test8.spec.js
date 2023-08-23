import {getAge, getIsAdult} from '../index.js';

describe('JavaScript Coding Challenge', () => {

  it('should declare a variable named isAdult using the ternary operator, holding a string value of Adult if age is 18 or over, and Not Adult if age is under 18', () => {
    if(getAge() >= 18){
      expect(getIsAdult()).toBe('Adult');
    }else{
      expect(getIsAdult()).toBe('Not Adult');
    }
  });
});

