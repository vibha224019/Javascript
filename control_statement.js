//if
// === strict equal

const temperature=41;
// if(temperature === 41){
//    console.log("executed");
// }else{
//     console.log("temperature is greater than 50");
// }

// const score=200;
// if(score > 100){
//     const power="fly"
//     console.log(`power: ${power}`);
// }
// console.log(`power: ${power}`);


// const balance=1000;
// if(balance < 500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 700");
// }else if(balance <900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }


// const userLoggedIn = true;
// const debitCard=true;
// const loggedInFromGoogle=false;
// const loggedInFromEmail= true;

// if(userLoggedIn && debitCard ){
//     console.log("Allow to buy course");
// }

// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log("User Logged In");
// }

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = "march";

// switch (month) {
//     case "jan":
//         console.log("January");
//         break;
//     case "feb":
//         console.log("Febraury");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     case "april":
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }



//truthy or falsy

const userEmail = [];
if(userEmail){
    console.log("Got User Email");
}else{
    console.log("Dont have user email");
}


//flasy values

// 1.false
// 2.0
// 3. -0
// 4. BigInt 0n
// 5. ""
// 6. null, undefined
// 7. NaN

// truthy values
// 1."0"
// 2. "false"
// 3. " "
// 4.[]
// 5. {}
// 6. function(){}   empty function



//to check whether an array is empty or not
// if(userEmail.length===0){
//     console.log("rray is empty");
// }

// const emptyObj={}

// if(Object.keys(emptyObj).length===0){
//     console.log("object is empty");
// }



//Nullish Collescing Operator (??) : null undefined
let val1;
// val1=5??10;   //output is 5

// val1=0 ?? 10  //output is 0

// var1=undefined ?? 15   //output is 15

// val1=null ?? 10 ?? 15;  //output is 10
// console.log(val1);  



//ternary operator

// condition ? true :false

const iceTeaPrice=100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");;