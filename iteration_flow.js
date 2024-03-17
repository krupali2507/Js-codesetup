// Most basic loop

// for (let i = 0; i < 10; i++) {
//   const element = i;
//   console.log("element:::", element);
// }

// Nested loop
// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + " * " + j + " = " + i * j);
//   }
// }

// break and continue
// situation: If number 5 detected then break the loop

// for (let i = 0; i < 20; i++) {
//   if (i === 5) {
//     console.log(`Detected number ${i} so breaking the loop`);
//     break;
//   }
//   console.log("i", i);
// }

// situation: If number 5 detected then ignore that and continue with other numbers
// for (let i = 0; i < 20; i++) {
//   if (i === 5) {
//     console.log(
//       `Detected number ${i} so ignoring it and will continue the loop`
//     );
//     continue;
//   }
//   console.log("i", i);
// }

// While loop
// let number = 0;
// while (number <= 10) {
//   console.log("Number::", number);
//   number = number + 2;
// }

// Do while loop
// let Balance = 2000;
// let Balance = 12000;
// do {
//   console.log("Land Money::::", Balance);
//   Balance = Balance += 2000;
// } while (Balance <= 10000);

// For of loop
let greetings = "Hello World!";
for (const greet of greetings) {
  if (greet == " ") {
    continue;
  }
  // console.log("Each char is:::", greet);
}

// for in loop
// If yo want to interate through object

let userDetails = {
  name: "Krupali",
  age: 30,
  lastname: "Rao",
};

for (const key in userDetails) {
  // console.log("Key::", key);
  // console.log("value::", userDetails[key]);
}

// Basic difference between for of and  for in loop

const countryArray = [
  "India",
  "USA",
  "Germany",
  "Australlia",
  "Canada",
  "Ireland",
];

const countryDetails = {
  IN: "India",
  USA: "United states of America",
  GR: "Germany",
  AUS: "Australlia",
};

for (const key of countryArray) {
  // console.log("for of on array", key); // for of will directly print value
}

// for of specifically designed to loop over iterable objects such as array,maps,sets,strgs but not over plain object
//we can use instead for in loop
// and if wants to use for of compulsory then using Object.keys and Object.values we can get key,values

for (const key of Object.values(countryDetails)) {
  // console.log("for of on object", key);
}

// Now use for in loop for both
for (const key in countryArray) {
  // console.log("for in on array", key); // It will display index value of array
  // console.log("for in to get value", countryArray[key]); // to print value
}

for (const key in countryDetails) {
  console.log("for in on Object", key); // for object it will display key of object
  console.log("for in on Object to get value", countryDetails[key]);
}

// for each loop
// It is also use most commonly for iteration

countryArray.forEach(() => {
  // you need to pass function here as callback, We have declare function using arrow function
  // using for each you can only perform operation on each item, but for each will not return any value implicitly so for that we can use map filter and reduce like methods
  console.log("values of array using foreach");
});
