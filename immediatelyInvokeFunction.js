//Immediately Invoked Function Expression(IIFE)

//(IIFE) is used to termination the pollution caused by glaboal scope

// function Chai(){
//     console.log(`DB CONNECTED`);
// }
// Chai();

(function Chai(){
    console.log(`DB CONNECTED`);
})();  //semicolon is necessary here because if we have two 
//immediately invoked function here then it may be confused so to end the execution we need go
//put semicolon here.


//syntax of arrow function
(() => {
    console.log(`DB connected two`);
})();

//arrow function parameters

((name)=>{
    console.log(`DB connected Two ${name}`);
})('vibha')