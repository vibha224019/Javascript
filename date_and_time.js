// Dates

let myDate=new Date();
// console.log(myDate); //it gives the time 
// console.log(myDate.toString()); //it provides the date anf time in terms of friday,...etc

// console.log(myDate.toDateString()); //it gives only day, month, date and year
// console.log(myDate.toISOString()); //it gives output accordng to the international organization

// console.log(myDate.toLocaleString()); // it gives the time in the format of date/month/year

// console.log(typeof myDate); //output is object


//here first parameter indicates the year, second parameter indicates
// month and third parameter indicates date.month are started from 0 in js
// let myCreatedDate=new Date(2023, 1, 23);

// console.log(myCreatedDate.toDateString()); //output is  Thu Feb 23 2023


//here month are started count from 1 if we gave format of year,month and date
// let myCreatedDate=new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString()); //output is 1/14/2023, 5:30:00 AM


// let myCreatedDate=new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString()); //output is 1/14/2023, 12:00:00 AM

let myTimeStamp=Date.now();
// console.log(myTimeStamp);  //output is 1702638352569  these are the milliseconds from 1970 till now

let newDate=new Date();
// console.log(newDate);  // output is 2023-12-15T11:12:34.002Z
// console.log(newDate.getMonth()); //output is 11 (month of december)
// console.log(newDate.getDay()); //output is 5 (day is the fifth day of the day)
