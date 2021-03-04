"use strict";
let prompt=require("prompt-sync")();
let num=+prompt("Enter a number");
let sum=0;// 

/**
 * check parfect number
 */
let i;
for( i=0;i<num;i++){
    if(num%i==0){
        sum=sum+i;
    }
}
if(num===sum){
    console.log(num+" is perfect number");
}else{
    console.log(num +" is not perfect number");
}

