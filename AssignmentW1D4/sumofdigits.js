"use srtrict";
let prompt=require('prompt-sync')();
let number=prompt("Enter a number: ");
let remainder=0;;
let sum=0;
while(number){
    sum+=number%10;  
  number=Math.floor(number/10);
}
console.log(sum);