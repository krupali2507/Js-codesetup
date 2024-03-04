const a = [0,1,2,3,4,5]

// Below methods will mutate the original array

// unshift method will add elements passed in the argument at the starting of an original array 
// console.log("A before:::",a)
// a.unshift(6,7,8,9,10)
// console.log("A after:::",a)


// shift method will remove the first element of an original array, pop() method will work reverse it will remove the last element of an original array.
// console.log("A before:::",a)
// a.shift()
// const newArr = a.slice(1)  // I can use this if i want to remove first element but don't want to chnage the original array
// console.log("newArr:::",newArr)
// console.log("A after:::",a)


// splice(startIndex,deleteCount,replaceValue) method will remove an elements from an array fro stratIndex to number of deleteCount and also replace value at that place

//we haven't used replaceValue argument here so it will only delete elements from original array
// console.log("A before:::",a)
// const c = a.splice(0,3)
// console.log("C:::",c) //will return deleted value only
// console.log("A after:::",a)

//we have used replaceValue argument here so along with deleting value it will also put new values i original array
console.log("A before:::",a)
const c = a.splice(0,3,5,7,8,9)
console.log("A after:::",a)
console.log("C:::",c) // will return deleted value



