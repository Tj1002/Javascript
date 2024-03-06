//********************************************filter()*************************************
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6]
const books = [
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publishedYear: 1925,
    edition: "First",
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publishedYear: 1960,
    edition: "First",
  },
  {
    title: "1984",
    genre: "Dystopian",
    publishedYear: 1949,
    edition: "First",
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publishedYear: 1813,
    edition: "First",
  },
  {
    title: "The Catcher in the Rye",
    genre: "Fiction",
    publishedYear: 1951,
    edition: "First",
  },
  {
    title: "Animal Farm",
    genre: "Dystopian",
    publishedYear: 1945,
    edition: "First",
  },
  {
    title: "Lord of the Flies",
    genre: "Fiction",
    publishedYear: 1954,
    edition: "First",
  },
  {
    title: "Brave New World",
    genre: "Dystopian",
    publishedYear: 1932,
    edition: "First",
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publishedYear: 1937,
    edition: "First",
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    genre: "Fantasy",
    publishedYear: 1997,
    edition: "First",
  },
];

console.log(books);
// Filter books with genre 'Dystopian'
const dystopianBooks = books.filter((book) => book.genre === "Dystopian");

console.log("Dystopian Books:", dystopianBooks);
//
//
//
//********************************************map***************************************************/
//
const arr = [1, 2, 3, 4, 5];

const squaredNumbers = arr.map((number) => number * number);

console.log("Squared Numbers:", squaredNumbers);
//chaining
const data = [1, 2, 3, 4, 5];

const squaredDoubledData = data
  .map((value) => value * 2) // Double each value
  .map((value) => value * value); // Square each doubled value

console.log("Squared Doubled Data:", squaredDoubledData);
{
  const numbers = [1, 2, 3, 4, 5];

  const squaredEvenNumbers = numbers
    .filter((number) => number % 2 === 0) // Filter even numbers
    .map((number) => number * number); // Map to square of each number

  console.log("Squared Even Numbers:", squaredEvenNumbers);
}
//
//
//************************************************reduce**********************************************
const values = [1, 2, 3, 4, 5];

const sum = values.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log("Sum of Values:", sum);
//
const shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Shoes", price: 80 },
  { name: "Socks", price: 5 },
];

const totalPrice = shoppingCart.reduce((total, item) => total + item.price, 0);

console.log("Total Price:", totalPrice);
