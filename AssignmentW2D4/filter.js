"use strict";
let prompt=require("prompt-sync")();
let numbers=prompt("Enter number: ");
let array=numbers.split(",");
console.log(array);

//const numbers = [];
const negativeNumbers = array.filter(numbers => numbers < 0);
console.log(negativeNumbers);


const sum = negativeNumbers.map(item => item+item);
console.log(sum);