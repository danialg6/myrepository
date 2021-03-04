"use strict";
const prompt = require("prompt-sync")();
/**
 * 
 * @param {number} num for checking prime
 * @return {boolean} true  
 */
function checkPrime(num) {
    let i;
    for (i = 2; i < num; i++) {
 
        if (num % i === 0) {
            break;
        }
    }
    if (num === i) {
        return true;
 
    } else {
        return false;
    }
 
}
let toTestNumber = parseInt(prompt("Enter the number to test: "));
let isPrime = checkPrime(toTestNumber);
if (isPrime === true) {
    console.log("you Entered a prime one number");
} else {
    console.log("you Entered a number which is not a prime ");
}
module.exports={checkPrime};