// 1. Declare a variable named 'firstName' and assign it a string value of your first name.
let firstName = "David"; // Replace "David" with your first name.
console.log(firstName);

// 2. Declare a variable named 'age' and assign it a number value of your age.
let age = 41; // Replace 41 with your age.
console.log(age);

// 3. Declare a variable named 'isProgrammer' and assign it a boolean value representing whether you are a programmer or not.
let isProgrammer = true; // If you're not a programmer, change this to false.
console.log(isProgrammer);

// 4. Declare a variable named 'canVote'. This variable should hold a boolean value indicating whether a person of your age is eligible to vote. (In most countries, the voting age is 18.)
let canVote = age >= 18;
console.log(canVote);

// 5. Declare a variable named 'description'. This variable should hold a string that includes your 'firstName', 'age', and whether or not you are a programmer (using the 'isProgrammer' variable).
let description = `My name is ${firstName}, I am ${age} years old, and it is ${isProgrammer ? 'true' : 'false'} that I am a programmer.`;
console.log(description);

// 6. Declare two variables named 'num1' and 'num2' and assign them number values. Then declare a third variable named 'sum' and assign it the sum of 'num1' and 'num2'.
let num1 = 10, num2 = 20; // Replace 10 and 20 with your chosen numbers.
let sum = num1 + num2;
console.log(sum);

// 7. Declare a variable named 'option' and assign it a string value of '1', '2', or '3'. Then declare a variable named 'decision' and assign it a different string value based on the value of 'option'. The options are '1', '2', and '3'. If 'option' is none of these, 'decision' should be 'Invalid option'.
let option = '1'; // Replace '1' with your chosen option.
let decision;
switch (option) {
    case '1':
        decision = 'Option 1 selected';
        break;
    case '2':
        decision = 'Option 2 selected';
        break;
    case '3':
        decision = 'Option 3 selected';
        break;
    default:
        decision = 'Invalid option';
}
console.log(decision);

// 8. Declare a variable named 'isAdult' using the ternary operator. The variable should hold a string value of 'Adult' if 'age' is 18 or over, and 'Not Adult' if 'age' is under 18.
let isAdult = age >= 18 ? 'Adult' : 'Not Adult';
console.log(isAdult);
