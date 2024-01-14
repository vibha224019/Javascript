const user={
    username:"vibha",
    price:999,

    welcomeMessage:function(){
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage();

// console.log(this);

//arrow function

// function chai(){
//     let username="vibha";
//     console.log(this.username);  this can be used only in objects not in functions
// }
// chai();


//expression function
// const chai=function(){
//     let username="vibha"
//     console.log(this.username);  //here also this can't be work
// }
// chai();

//arrow function
// const chai=()=>{
//     let username="vibha";
//     console.log(this.username);
// }
// chai();

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }

// const addTwo=(num1,num2)=>num1+num2; //another way to write

// const addTwo=(num1,num2)=>(num1+num2) 

const addTwo=(num1,num2)=>({username:"vibha"})

console.log(addTwo(3,4));

const myArray=[2,5,3,7,8];