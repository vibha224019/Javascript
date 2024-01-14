//singleton

// const tinderUser=new Object(); //it creates empty object

const tinderUser={};  //it also creates an empty object
// the difference is this that above one is singleton object and another one is non-sigleton object
tinderUser.id="123abc";
tinderUser.name="Vibha";
tinderUser.isLoggedIn=false;


// console.log(tinderUser);

const regularUser={
    email:"vibha@gmail.com",
    fullname:{
        userfullname:{
            firstname:"vibha",
            lastname:"garg"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1={
    1:"a",
    2:"b",
    3:"c"
}
const obj2={
    4:"d",
    5:"e",
    6:"f"
}

// const obj3=

// const obj3=Object.assign({},obj1,obj2);

const obj3={...obj1,...obj2}
// console.log(obj3);

const users=[
    {

    },
    {
        id:1,
        email:"vibha@gmail.com"
    },
    {

    },
    {

    },
    {

    },
]
// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    coursename:"js in hindi",
    price:999,
    courseInstructor:"hitesh"
}

// course.courseInstructor  instead of this we can use

const {courseInstructor} = course;

const {courseInstructor:instructor} = course;

console.log(courseInstructor);
console.log(instructor);