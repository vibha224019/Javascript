//singleton
//if we create object as literals then it is not construct as singleton
//it object is made from constructor then it will made as singleton



//object literals

const JsUser={
    name:"vibha", //system consider this name as "name" but we didn't it as this
    "full name":"Vibha garg", //we cant access this line through dot we can ony acess it as [] 
    age:18,
    location:"panchkula",
    email:"vibha@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser[email]); //this file shows error in this file
//beacuse as we studied js considered name as "name" so as we have to give email as "email"

// console.log(JsUser["email"]);
// console.log(JsUser."full name"); //we cant access full name like this

//declaraing symbols

const mySym=Symbol("key1")  //we have to add this symbol in object

const JsUser1={
    name:"vibha", //system consider this name as "name" but we didn't it as this
    "full name":"Vibha garg", //we cant access this line through dot we can ony acess it as [] 
    mySym:"key1", //if we check its datatype here then it is not used as symbol
    age:18,
    location:"panchkula",
    email:"vibha@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser1.mySym);
// console.log(typeof JsUser1.mySym); //its output is string 

//if we want to use mySym as a symbol then we have to write in sqaure brackets everywhere


const JsUser2={
    name:"vibha", //system consider this name as "name" but we didn't it as this
    "full name":"Vibha garg", //we cant access this line through dot we can ony acess it as [] 
    [mySym]:"key1", //now it is symbol
    age:18,
    location:"panchkula",
    email:"vibha@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser2[mySym]);//question

//to change any value in the object
JsUser2.email="vibhagarg@gmail.com";
console.log(JsUser2["email"]);

//if we want that nobody can change the value os the object hen we can freeze the object

// Object.freeze(JsUser2);
JsUser2.email="vibhagrazitti@gmail.com";
console.log(JsUser2);


//js greeting
JsUser2.greeting=function(){  //we cant use greeting method because here we freeze the object
    console.log("hello js user");
}

JsUser2.greetingTwo=function(){  //we cant use greeting method because here we freeze the object
    console.log(`hello js user,${this.name}`);
}
console.log(JsUser2.greetingTwo());