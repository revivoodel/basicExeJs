// Task 8: Detect if a Number Is a Palindrome
// set variables for a 3-digit number and check if it reads the same forward and backward.
// Example: Input: 121 -> Output: Palindrome
//          Input: 123 -> Output: Not a Palindrome

let number = 121; // INPUT

// (keep the "// INPUT" comments - the tests use them to try other values)

// write your code below this line
number%10==Math.trunc(number/100)? console.log("Palindrome"):console.log("Not a Palindrome");

