//array

const myArray=[0,1,2,3,4,5];

const myHeros=["shaktimaan","naagraaz"];

const myArr2=new Array(1,2,3,4,5);

console.log(typeof myArr2);
// console.log(myArray[1]);

//Array methods

// myArray.push(6);
// myArray.push(7);
// myArray.pop();

// myArray.unshift(0);
// myArray.shift();

// console.log(myArray.includes(9)); //output is false because doesn't include array
// console.log(myArray.indexOf(9));//it returns -1 or 1 (9 doesn't exists in the array so it returns -1 else it returns the index on which the value is present)

// const newArr=myArray.join(); //it will bind as well as change the type as string.

//the output of join method doen't comes out as array unless it shows the result as string 0,1,2,3,4,5
// console.log(myArray);
// console.log(newArr); //output is 0,1,2,3,4,5 it doesn't contain square brackets

// console.log(typeof newArr); //output is string



//slice,splice

// console.log("A ",myArray);
// const myn1=myArray.slice(1,3);
// console.log(myn1);
// console.log("B ",myArray);


// const myn2=myArray.splice(1,3);
// console.log("C ",myArray);
// console.log(myn2);