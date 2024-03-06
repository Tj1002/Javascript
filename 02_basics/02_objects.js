// objects

// objects are one of the fundamental data types and are used to store collections of data and more complex entities. They consist of key-value pairs, where keys are strings (or symbols) and values can be of any data type, including other objects, arrays, functions, etc.

//singleton and object literal

//object literals
const person = {
  name: "John",
  "full name": "John Doe",
  age: 30,
  city: "New York",
};
console.log(person.name); //john
console.log(person.age); //30
console.log(person["full name"]); // john doe
console.log(typeof person["full name"]); //important //string

person.age = 42;
console.log(person.age);

// Object.freeze(person); // here we freeze the object and we caannot change the values of object
// person.name = "tj";
// console.log(person.name);

person.greeting = function () {
  console.log("Hello, my name is " + this.name);
  console.log(`Hello, my name is  ${this.name}`);
};
person.greeting();
console.log(person.greeting());

//
//
// Nested objects
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  owner: {
    name: "Alice",
    age: 25,
  },
};

console.log(car.owner.name);
//
//singleton
const fbUser = new Object(); //singleton object
const instauser = {}; // non-singleton user
console.log(fbUser);

fbUser.id = "12345abc";
fbUser.name = "john";
(fbUser.isLoggedIn = true), console.log(fbUser);

// more depth on nested object
let company = {
  name: "ABC Inc.",
  location: "New York",
  departments: {
    sales: {
      manager: "John",
      employees: ["Alice", "Bob", "Charlie"],
    },
    marketing: {
      manager: "Emily",
      employees: ["David", "Eve"],
    },
    finance: {
      manager: "Michael",
      employees: ["Frank", "Grace", "Harry"],
    },
  },
  revenue: 1000000, // Example revenue data
};
console.log(company.departments.sales.manager); // Output: John
console.log(company.departments.marketing.employees); // Output: ["David", "Eve"]

// Adding new department
company.departments.engineering = {
  manager: "Olivia",
  employees: ["Ivy", "Jack", "Kevin"],
};
console.log(company.departments.engineering.manager); // Output: Olivia

// Modifying nested object property
company.departments.finance.manager = "Sophia";
console.log(company.departments.finance.manager); // Output: Sophia
console.log(company);
//
//assign
//Object.assign(target, ...sources): Copies the values of all enumerable own properties from one or more source objects to a target object and returns the target object.

// Define source objects with const
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 };

// Create an empty target object with const
// const target = {};

// Copy properties from source objects to the target object
// Object.assign(target, obj1, obj2, obj3);

// console.log(target);
// Output: { a: 1, b: 3, c: 4, d: 5 }
// we can use spread object instead
const target = { ...obj1, ...obj2, ...obj3 };
console.log(target);

//++++++++++++++++++++Array of an Object+++++++++++++++++++
// Define an array of objects representing cars using const
const cars = [
  { make: "Toyota", model: "Camry", year: 2020 },
  { make: "Honda", model: "Accord", year: 2019 },
  { make: "Ford", model: "Mustang", year: 2021 },
];

// Accessing properties of objects in the array
console.log(cars[0].make); // Output: Toyota
console.log(cars[1].model); // Output: Accord

// Adding a new object to the array
// Since the array variable is declared with const, we cannot reassign it, but we can still modify its contents
cars.push({ make: "Chevrolet", model: "Cruze", year: 2018 });
console.log(cars);

// Modifying an object in the array
cars[2].year = 2022;
console.log(cars[2]); //output { make: 'Ford', model: 'Mustang', year: 2022 }

console.log(Object.keys(cars[0])); //output [ 'make', 'model', 'year' ] return array
console.log(Object.values(cars[0])); //output [ 'Toyota', 'Camry', 2020 ] return array
console.log(Object.entries(cars[0])); //output [ [ 'make', 'Toyota' ], [ 'model', 'Camry' ], [ 'year', 2020 ] ] return array
