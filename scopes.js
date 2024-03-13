// scope menas the area where values of particluar variable is accessible
// We can define variable using three Keyword
// var,let and const

// first with var (Defining variable with var doesn't using the concept of local scope)
var a = 3; // Defining a here

if (a / 2 != 0) {
  var a = "It's odd number!"; // Defining again variable with name a here
  console.log("A inside if:::", a); // It will display the value of a defined inside if
}

console.log("A outside if::", a); // I need value of a outside if but it will return value from inside if as using var if we defined variable the value will be override

// Defining variables with let and const allow the concept of local scope
// The only difference between let and const is defining value with let you can change anytime and with const you can't

let b = 123;
b = 456;

console.log("b::", b);

const c = 123;
// c = 456; // This will give an error

console.log("C::", c);

// Now lets check scope with let and const with above sam example
let d = 3; // Defining d here

if (d / 2 != 0) {
  let d = "It's odd number!"; // Defining again variable with name d here
  console.log("D inside if:::", d); // It will display the value of d defined inside if
}

console.log("D outside if::", d); // It will display value of outside if

const e = 3; // Defining d here

if (e / 2 != 0) {
  let e = "It's odd number!"; // Defining again variable with name d here
  console.log("E inside if:::", e); // It will display the value of d defined inside if
}

console.log("E outside if::", e); // It will display value of outside if
