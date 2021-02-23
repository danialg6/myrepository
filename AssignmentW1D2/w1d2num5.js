let prompt=require('prompt-sync')();
let age=parseInt(prompt("Enter your age: "));
let heartRateslowest=(220-age)*0.65;
let heartRatefastest=(220-age)*0.85;
console.log(heartRateslowest);
console.log(heartRatefastest);
