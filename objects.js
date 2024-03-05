// There is one Data type called symbol falls under the category of Primitive Data type in Js so will see how to declare symbol type in object.

let mySym = Symbol("newsym")
let obj1 = {
    name:"Krupali",
    age: 30,
    [mySym]:"newsym"
}

console.log("obj1::",obj1)
console.log("obj1.mySym::",obj1[mySym])
console.log("typeof obj1.mySym::", typeof obj1[mySym])
console.log("typeof obj1.mySym::", typeof mySym)



