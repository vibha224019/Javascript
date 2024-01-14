const name="vibha-garg-bilaspur";
const repCount=50;

// console.log(name + repCount +" value");

//string interpolation(in placeholders we can directly inject the variables)
// console.log(`Hello my name is ${name} and my repo count is ${repCount}`);
// the above method of write is calles string interpolation

// Another method of declaraing strings
const gameName = new String('vibhavg');

//string is object by default if we want to access that trough index then we can
// console.log(gameName[0]);  // output is v
// console.log(gameName.__proto__); // output is object {}


// console.log(gameName.toLowerCase());  // it doesn't change the original value as string is stored in stack memory;

// console.log(gameName.charAt(2)); // it tells that at 2nd index which character is there
// console.log(gameName.indexOf('a')); //it tells that the given character lies on which index
//if the given character is not available in the given string then it returns -1

// console.log(gameName.substring(0,4));
// it starts from 0 index and count 4 from there or we can say it doesnt include the last index
// console.log(gameName.slice(0,4)); //also used for substring but we can give negative index here

// console.log(gameName.slice(-6,4)); //if we give negative index then it starts counting from back and starts from 6.

const newString1="      hitesh    ";
// console.log(newString1);
// console.log(newString1.trim()); //it removes all the unnecessory spaces 

const url="https://vibha.com/vibha%20garg";
// console.log(url.replace('%20','-'));  //it replaces the given character

// console.log(url.includes('vibha')); //output is true because my url contains vibha

// console.log(name.split('-')); // it converts a string into array based on the given symbol. it may be anything from which we want to split the string into an array.