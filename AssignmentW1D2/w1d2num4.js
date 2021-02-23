//Write JavaScript program to compute the mileage of a vehicle. Your program should allow the
//user to enter the beginning and ending odometer readings and the number of gallons of gas
//used and should output the mileage in miles per gallon
let prompt=require('prompt-sync')();
let startingodometer=parseInt(prompt("enter the starting odometer"));
let endingodometer=parseInt(prompt("enter the starting odometer"));
let gallon=parseInt(prompt("enter the gallon gass you used"));
let mileage=(endingodometer-startingodometer)/gallon;
console.log(mileage);