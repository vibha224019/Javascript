function sayMyName(){
    // console.log("v");
    // console.log("i");
    // console.log("b");
    // console.log("h");
    // console.log("a");
}
// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1,number2){
    // let result=number1+number2;
    // console.log("vibha");
    // return result;

    return number1+number2;
}
const result=addTwoNumbers(4,7);
// console.log(result); //output is undefined

function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage());

// the three dots represent rest operator here
//it means bond all the values in an array
// function calculateCartPrice(...num1){
//     return num1;
// }

function calculateCartPrice(val1,val2,...num1){
    return num1;
}
// console.log(calculateCartPrice(200,400,600,2000));

const user={
    username:"hitssh",
    prices:199
}
// function handleObject(anyObject){
//     console.log(`username is ${anyObject.username} and price is ${anyObject.prices}`);
// }

// handleObject(user); we can also pass the object here

// handleObject({
//     username:"vibha",
//     prices:999
// })

//lets pass the array in function

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray)); we can pass the whole array here

console.log(returnSecondValue([200,400,600]));
