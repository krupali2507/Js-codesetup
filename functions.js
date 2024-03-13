// What is function in js
// smply function is a block of code that gets executed and return something and it can be useful in making code modular and reusable.

// How to define function in js?
// There are multiple ways to define function in js and one of them is

// function functionName(parameters) {
//   //do some operation
//   return something;
// }

// functionName(arguments); //call with functionname()

//basic example
function addTwoNum(a, b) {
  const res = a + b;
  return res;
}

addTwoNum(2, 3);

//rest operator

function restExample(num1, num2, ...rest) {
  console.log("Num1::", num1);
  console.log("Num2::", num2);
  console.log("Rest::", rest);
}

restExample(100, 200, 300, 400, 500, 600, 1000);

//pass object and arrays as argumnets

function objectAsArgument(anyObject) {
  return `${anyObject.name} just logged in on ${anyObject.day}`;
}

console.log(objectAsArgument({ name: "Krupali", day: "Monday" }));

function arrayAsArgument(anyarray) {
  return anyarray[1];
}

console.log(arrayAsArgument([200, 400, 500]));
