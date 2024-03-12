// There are two ways to create javascript objects
// Using constructor (we are not mostly using this way and when we create objet using this way then it create as singleton which means aa type no aa ek j object hase)
// we are not mostly using this first way
const objUsingConstructor = new Object();
console.log("objUsingConstructor::", objUsingConstructor);

// Using Object literals (we mostly use this way)(and when we create object using this way then there can be multiple objects like this means singleton above way karta diferent)
// This is how we can declare it using Object literals
const jsUser = {}; //Object with no properties right now
console.log("jsUser::", jsUser);

//There are two ways to access value of an object
let firstUser = { name: "Krupali", id: "abc123" };

console.log(firstUser.name);
console.log(firstUser["id"]);

// To add key value in Object
firstUser["isLoggedIn"] = true;
console.log("after adding new Key value:::", firstUser);

//create new object from multiple objects
const object1 = { 1: "a", 2: "b" };
const object2 = { 3: "c", 4: "d" };

const object3 = { ...object1, ...object2 };

// Some of th Objects Methods
console.log(Object.keys(firstUser)); // ['name','id']
console.log(Object.values(firstUser)); // ['Krupali','abc123']
console.log(Object.entries(firstUser)); // [['name','Krupali'],['id',''abc123']]
console.log(firstUser.hasOwnProperty("name")); // true

// If i don't want to change my object like adding new key value in it and so on then i can freeze t
// Object.freeze(firstUser);
firstUser["isLoggedIn1"] = true;
console.log("after freezing the object::", firstUser);

// There is one Data type called symbol falls under the category of Primitive Data type in Js so will see how to declare symbol type in object.
let mySym = Symbol("newsym");
let obj1 = {
  name: "Krupali",
  age: 30,
  [mySym]: "newsym",
};

console.log("obj1::", obj1);
console.log("obj1.mySym::", obj1[mySym]);
console.log("typeof obj1.mySym::", typeof obj1[mySym]);
console.log("typeof obj1.mySym::", typeof mySym);

//Object destructuring
// instead of accessing single property of object using dot notation or square bracet we can use following way

const { name, id } = firstUser;
console.log(name);
console.log(id);

//if i want to use the key of object using destructuring but want different varibale name then

const { name: firstname } = firstUser;
console.log(firstname);
