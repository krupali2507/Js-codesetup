// // What is function in js
// // smply function is a block of code that gets executed and return something and it can be useful in making code modular and reusable.

// // How to define function in js?
// // There are multiple ways to define function in js and one of them is
// // Using function Defination

// // function functionName(parameters) {
// //   //do some operation
// //   return something;
// // }

// // functionName(arguments); //call with functionname()

// //basic example
// function addTwoNum(a, b) {
//   const res = a + b;
//   return res;
// }

// addTwoNum(2, 3);

// //rest operator

// function restExample(num1, num2, ...rest) {
//   console.log("Num1::", num1);
//   console.log("Num2::", num2);
//   console.log("Rest::", rest);
// }

// restExample(100, 200, 300, 400, 500, 600, 1000);

// //pass object and arrays as argumnets

// function objectAsArgument(anyObject) {
//   return `${anyObject.name} just logged in on ${anyObject.day}`;
// }

// console.log(objectAsArgument({ name: "Krupali", day: "Monday" }));

// function arrayAsArgument(anyarray) {
//   return anyarray[1];
// }

// console.log(arrayAsArgument([200, 400, 500]));

// // Using Arrow function
// // this are all correct way it depends on it's usage

// const addTwoNumbers1 = (n1, n2) => {
//   // Big operations and not one liner code only
//   return n1 + n2;
// };
// console.log(addTwoNumbers1(1, 2));

// const addTwoNumbers2 = (n1, n2) => n1 + n2; // Implicitly return single liner value; No need to write Return keyword
// console.log(addTwoNumbers2(3, 4));

// const addTwoNumbers3 = (n1, n2) => ({ username: "Krupali" }); // Implicitly need to write this kind of value like object and array
// console.log(addTwoNumbers3());

// // There is once concept called IIFE(Immediately Invoked function expression)
// Still need to make it more clear

// Without IIFE (polluting global scope)
var globalVar = "I am global";

function foo() {
  console.log(globalVar); // Accessing globalVar
}

foo(); // Output: "I am global"

// With IIFE (preventing global pollution)
(function () {
  var localVar = "I am local";
  console.log(localVar); // Accessing localVar
})();

//without IIFE
function boo() {
  var localVar = "I am local";
  console.log(localVar); // Accessing localVar
}

boo();

console.log(typeof localVar === "undefined"); // Output: true (localVar is not defined globally)
