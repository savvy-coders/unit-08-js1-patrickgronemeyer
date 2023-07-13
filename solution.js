// 1. Declare a variable named 'firstName' and assign it a string value of your first name.
let firstName = 'John';

// 2. Declare a variable named 'age' and assign it a number value of your age.
let age = 25;

// 3. Declare a variable named 'isProgrammer' and assign it a boolean value representing whether you are a programmer or not.
let isProgrammer = true;

// 4. Declare a variable named 'canVote'. This variable should hold a boolean value indicating whether a person of your age is eligible to vote. (In most countries, the voting age is 18.)
let canVote = age >= 18;

// 5. Declare a variable named 'description'. This variable should hold a string that includes your 'firstName', 'age', and whether or not you are a programmer (using the 'isProgrammer' variable).
let description = `My name is ${firstName}, I am ${age} years old and it is ${isProgrammer ? 'true' : 'false'} that I am a programmer.`;

// 6. Declare two variables named 'num1' and 'num2' and assign them number values. Then declare a third variable named 'sum' and assign it the sum of 'num1' and 'num2'.
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;

// 7. Declare a variable named 'option' and assign it a string value of '1', '2', or '3'. Then declare a variable named 'decision' and assign it a different string value based on the value of 'option'. The options are '1', '2', and '3'. If 'option' is none of these, 'decision' should be 'Invalid option'.
let option = '1';
let decision;
switch(option) {
  case '1':
    decision = 'Option 1';
    break;
  case '2':
    decision = 'Option 2';
    break;
  case '3':
    decision = 'Option 3';
    break;
  default:
    decision = 'Invalid option';
}

// 8. Declare a variable named 'isAdult' using the ternary operator. The variable should hold a string value of 'Adult' if 'age' is 18 or over, and 'Not Adult' if 'age' is under 18.
let isAdult = age >= 18 ? 'Adult' : 'Not Adult';

// your code here

export { firstName, age, isProgrammer, canVote, description, num1, num2, sum, option, decision, isAdult };

