const score=400; //defining a number

const balance=new Number(100.0000);
// console.log(balance);

// console.log(balance.toString()); //it converts number into string
// console.log(balance.toString().length);

// console.log(balance.toFixed(2));  //it gives the given length after decimal

const otherNumber=123.8966;
// console.log(otherNumber.toPrecision(6)); //this methods gives the round off of a number after decimal

const hundred=1000000;
// console.log(hundred.toLocaleString('en-In'));  //it automatically put commas in a number which have more zeros like lakhs, ten lekhs

//++++++++++++++++++++++++++++++++Maths +++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-9.12));
// console.log(Math.round(6.6)); //round off the number decline the decimal part
// console.log(Math.ceil(9.1));
// console.log(Math.floor(9.9));
// console.log(Math.min(6,8,1,12));
// console.log(Math.max(34,100,99,88));

// console.log(math.floor(Math.random()*10)+1);

const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max-min + 1) + min)); 