// "use strict";

let score="33abc";

// console.log(typeof score);

let valueInNumber=Number(score);
// console.log(typeof valueInNumber);

// let valueInInteger=parseInt(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//"33" => 33 (easily converted into number)
//"33abc" => NaN 

//typeof NaN is number
//true converted into 1
//false converted into 0

let isLoggedIn=1; //directly a boolean value

//conversion into boolean

let booleanIsLoggedIn=Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
//output is true;

let isLoggedBoolean="";
let booleanIsLoggedOut=Boolean(isLoggedBoolean);
// console.log(booleanIsLoggedOut);
//output is false

//"hitesh" => true

//conversion nto string
let someNumber=33;
let matchString=String(someNumber);
// console.log(matchString);  //output=33(but of string type)
// console.log(typeof matchString);

//  *********************operations ***************************

let value=3;
let nagValue=-value;
// console.log(nagValue);

// console.log(2+2);

let str1="vibha";
let str2=" garg";
// console.log(str1+str2);

// console.log("1"+2); //output=12
// console.log(1+"2"); //output=12

// console.log("1"+2+2); //output=122
// console.log(1+2+"2"); //output=32

// console.log(+true); //output=1
// console.log(+""); //output=0

let num1, num2, num3
num1=num2=num3=2+2

let gameCounter=100;
++gameCounter;
// console.log(gameCounter);

//postfix and prefix from mdn