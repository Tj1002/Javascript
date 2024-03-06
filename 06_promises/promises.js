//****************************************Promises**************************************/
// A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation.
//  there are primarily three types of promises:
//
//****************************************1 Fulfilled Promise:**************************************/
// A promise is considered fulfilled when the asynchronous operation it represents completes successfully.
// .then() method is used to handle the resolved value of a fulfilled promise.
//
//****************************************2 Rejected Promise:**************************************/

// A promise is considered rejected when the asynchronous operation it represents encounters an error or fails.
// .catch() method is used to handle the error or rejected reason of a rejected promise.
//
//****************************************1 Pending Promise:**************************************/

// A promise is considered pending when neither the resolve nor reject function has been called yet.

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`async task is complete`);
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log(`promiseOne is fulfilled after 1sec`);
});

//
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`async task is complete 2`);
    resolve();
  }, 2000);
}).then(() => {
  console.log(`promiseTwo is fulfilled after 2 sec`);
});
//
// Creating a promise
const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const randomValue = Math.random();
    if (randomValue < 0.5) {
      resolve(randomValue); // Resolve the promise with a value
    } else {
      reject(new Error("Operation failed")); // Reject the promise with an error
    }
  }, 500);
});

// Consuming the promise
myPromise
  .then((result) => {
    console.log("Promise resolved with value:", result);
  })
  .catch((error) => {
    console.error("Promise rejected with error:", error);
  });

//

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`async task is complete 3`);
    resolve({ username: "tausif", password: "123456" });
  }, 3000);
});
promiseThree.then((result) => {
  console.log(result.username);
});

//
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "tausifjawed", password: "123456897" });
    } else {
      reject("Promise 4 rejected");
    }
  }, 4000);
});
promiseFour
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise 4 is resolved or rejected after 3 sec ");
  });
//
//
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "javascript", password: "123456897" });
    } else {
      reject("Promise 5 rejected");
    }
  }, 5000);
});

async function asyncFunction() {
  try {
    const result = await promiseFive;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
asyncFunction();

//
//
// async function fetchFunction() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchFunction();

//
//
//************************************************fetch**************************************
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
// request Option
fetch("https://api.example.com/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ key: "value" }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

//fetch() follows the same-origin policy, meaning it can only make requests to the same origin as the page that invokes it.
// In the context of a Promise returned by fetch(), a response with a status code of 404 (or any other status code) is indeed considered fulfilled, as long as the request was completed successfully from the network perspective.
//
//When you receive a response from the server, regardless of the status code, the fetch() Promise is fulfilled, allowing you to access the response data using the subsequent .then() method.
