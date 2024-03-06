//***********************************************IIFE*************************************** */
// It is a design pattern in JavaScript where a function is declared and immediately invoked (executed) right after its declaration.
//IIFEs create their own scope, which helps avoid polluting the global scope with variables and functions.
(function () {
  // Function body
})();
//using arrow
((message) => {
  console.log(message);
})("Hello, world!");
