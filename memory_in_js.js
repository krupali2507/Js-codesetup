// There are two types of memory in Javascript
// 1) Stack (all the primitive types of Data type stored in this memory, it provides copy of each variable.)

// let a = "Krupali" // created one space in meemory with name a and value "Krupali"
// let b = a // created copy of a in memory with name b and value "Krupali"
// b = "Bhumi" // change value of "Krupali" to "Bhumi" only in b, it will not affect the value stored in a
// console.log("a::",a)
// console.log("b::",b)


// let boolOne = true
// let boolTwo = boolOne
// boolTwo = false
// console.log("boolOne::",boolOne)
// console.log("boolTwo::",boolTwo)

// let numOne = 1
// let numTwo = numOne
// numTwo = 2
// console.log("numOne::",numOne)
// console.log("numTwo::",numTwo)


// 2) Heap (all the Non primitive types of Data type stored in this memory, it provide reference of original memory means if one memory block created and i copy that for other then both will refer to same block and if i change in any one of them it applies for both)

let obj1 = {
    name:"Krupali",
    age: 29
}                  // created one memory block in memory with name obj1 and value of object

let obj2 = obj1    // now same memory block have two name

obj2.age = 30      // changing value in obj2's age
console.log("obj1::",obj1) // but it will reflect in this both because both refer to same memory block
console.log("obj2::",obj2) // It's same like if you call Krupali or Bavlu i'll answer in both case because both are my names
