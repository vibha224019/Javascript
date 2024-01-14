// var c=300;
let a=300;
//curly braces is scope
if(true){
    let a=10;
    const b=20;
    var c=30;
    // console.log(a); 

}

console.log(a);  //a cant be access
// console.log(b);  //b is not access here
// console.log(c);  //var can be access here


//nested scope
function one(){
    const username="vibha"

    function two(){
        const website="youtube"
        // console.log(username);
    }
    // console.log(website);  website cant access here
    two();
}
one();

//scope in if-else
if(true){
    const username="vibha";
    if(username=="vibha"){
        const website="youtube";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//++++++++++++++++++interesting ++++++++++++++++++

//basic function
function addone(value){
    return value+1; 
}
addone(5);

//expression function
const addTwo=function(num){
    return num+2
}
addTwo(5);


// addTwo(5);
// const addTwo=function(num){   we ant do this in function expression
//     return num+2
// }
