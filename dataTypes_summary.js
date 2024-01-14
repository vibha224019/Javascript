// Primitive and non-primitive or refernce types
// (call by value if i.e. copy of the variables provided for changes )
// 7 categories: 
// 1. String 2.Number 3. Boolean
// 4. null 5. undefined  6. Symbol
// 7. BigInt

// non-primitive data types or refernce types

// memory refernce can be allocated directly to you

// 1. Array  2. Objects 3. Functions

//Example of symbol
//Symbol uses for uniqueness
// const id=Symbol("123");
// const anotherId=Symbol("123");
// console.log(anotherId);
// console.log(id);

// console.log(id == anotherId);

const bigNumber = 785478908653234555n;
// n represents the bigInt

// refernce (Non-Primitive)

//Array, objects, functions

const heros=["shaktimaan", "naagraj","doga"];
//objects are in curly braces
//data is in key:value pair
let myobj={
    name:"vibha",
    age:22
}

//functions
const myFunction=function (){
    console.log("hello world");
}

// to check the data type
// console.log(typeof bigNumber);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//types of memory
// 1. stack 2. Heap
// Stack is used in Primitive data types(change in the copy of the variable)
// Heap s used in Non-primitive data types(change in original value(due to refernce))

let myYoutubename="vibha garg";
let anothername=myYoutubename;
anothername="garg vibha";

//here value doesn't change in myYoutubename because in anothername there is a copy of youtubename

console.log(myYoutubename);
console.log(anothername);


//here user is in stack memory and email and upi is in  heap meamory and user just refer to that memory where email and upi is stored

let user={
    email: "vibhagarg@gmail.com",
    upi:"user@byl"
}

// here variable userTwo occupied space in stack memory but after this assignment it also refers to that heap memory location where email and upi is stored
let userTwo=user;

userTwo.email="garg@gmail.com";

//here valyue also changes in user because user and userTwo both refer to same memory location
console.log(userTwo);
console.log(user);
