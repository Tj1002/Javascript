// Stack and heap memory

// ****************************************  STACK(primitive)******************************************
/*
copy is created for the variable we decleare.No changes in original

Stack memory is used for static memory allocation, such as local variables and function call frames.
Each time a function is called, a new frame is pushed onto the stack, which includes parameters, local variables, return address, etc.
Stack memory is fast and managed by the runtime environment (e.g., V8 engine for Node.js or Chrome).
Memory allocation and deallocation are handled automatically when functions are called and return.




*/
let myName = "tausif";
let newName = myName; // copy is created

console.log(myName); //tausif
console.log(newName); //tausif
newName = "jawed" + newName;
console.log(newName); //tausifjawed
console.log(myName); //tausif    no chnages in original one

//

//
//**************************************** Heap (Reference or Non-Primitive)************************

/*
reference is created for original value and whatever changes we make will reflect on original one

Heap memory is used for dynamic memory allocation, such as objects and arrays.
Objects and arrays in JavaScript are allocated on the heap.
*/

// variables (including objects and arrays) are allocated on the heap, and references to these variables are stored on the stack. When variables go out of scope or are no longer referenced, they are automatically garbage collected to free up memory.
let userOne = {
  name: "tausif",
};
let userTwo = userOne;
console.log(userTwo.name); //tausif
console.log(userOne.name); //tausif

userTwo.name = "tausif jawed";
console.log(userTwo.name); //tausif jawed

console.log(userOne.name); //tausif jawed    chnages reflected in userOne
