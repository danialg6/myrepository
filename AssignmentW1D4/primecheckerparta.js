const prompt = require("prompt-sync")();
let n = prompt("Please enter a number to test if it is prime: ");
let factor_count = 0;
for (let i = 2; i < n; i++) {
if (n % i == 0) {
factor_count++;
 }
}
let isPrime = factor_count === 0;
console.log(isPrime)