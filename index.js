// index.js

// Function expression example
const foo = function() {
  return 'bar';
};

// Arrow function with two parameters
//const add = (parameter1, parameter2) => parameter1 + parameter2;

// Arrow function with one parameter
const twoAdder = x => x + 2;

// Arrow function with multiple lines (explicit return)
const sum = (parameter1, parameter2) => {
  console.log(`Adding ${parameter1}`);
  console.log(`Adding ${parameter2}`);
  return parameter1 + parameter2;
};

// Example of using arrow function in .map()
const nums = [1, 2, 3];
const squares = nums.map(x => x ** 2);
// Function expression called divide
const divide = function() {
  return 2000 / 100;
};

// Arrow function called square
const square = (x) => x * x;

// Arrow function called add (you already have this, but leaving it here for clarity)
const add = (a, b) => a + b;
