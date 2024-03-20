//Filter method use to filter out value of array based on specific cndition. It returns value if condition evaluates to true.

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const booksEditionbefore2000 = books.filter(
  (eachBook) => eachBook.edition <= 2000
);
console.log("🚀 ~ booksEditionbefore2000:", booksEditionbefore2000);

const booksEditionbefore2000andGenreHistory = books.filter(
  (eachBook) => eachBook.edition <= 2000 && eachBook.genre === "History"
);
console.log(
  "🚀 ~ booksEditionbefore2000andGenreHistory:",
  booksEditionbefore2000andGenreHistory
);

// Reduce Method will take an whole array and perform operation and return single value
// If initial value provide then it takes that as initital value otherwise first value of array will be initital value.

const oneArray = [1, 2, 3, 4, 5];
const reduceResult = oneArray.reduce((acc, currValue) => {
  return acc + currValue;
}, 8);
// console.log("reduceResult::", reduceResult);

const shoppingCart = [
  {
    courseName: "JS Dev course",
    price: 999,
  },
  {
    courseName: "Python Dev course",
    price: 1999,
  },
  {
    courseName: "PHP Dev course",
    price: 2999,
  },
  {
    courseName: "Mobile Dev course",
    price: 3999,
  },
];

const finalPriceOfCart = shoppingCart.reduce((acc, currValue) => {
  console.log("acc::", acc);
  console.log("currValue::", currValue);

  return acc + currValue.price;
}, 0);

console.log("🚀 ~ finalPriceOfCart:", finalPriceOfCart);
