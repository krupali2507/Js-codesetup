// Using .from() method of an aray we can create array of any elements provided in argument (argument can only be iterable object and can have index for ex; string and array) 
// const newArrayFromString = Array.from("Krupali")
// const newArrayFromarray = Array.from([1,2,3,4])
// console.log("newArrayFromString::",newArrayFromString)

// Using .of()
// const newArrayofString = Array.of("kru","pa","li")
const newArrayofString = Array.of(1,2,3,[1,2,3],{name:"Krupali"})
console.log("newArrayofString::",newArrayofString)