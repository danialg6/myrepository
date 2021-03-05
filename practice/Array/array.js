"use strict";
let fruits=["apple","mango","banana"];
let ab1=fruits[0];
fruits[2]="peer";
console.log(ab1,fruits[2],fruits);
console.log(fruits.length);
////
let numbers=[];
numbers[5]=8;
console.log(numbers.length);
////
let score=[99,97,100,98.3];
for(let i=0;i<2;i++){
    score[i];
}
//using for...of
for(let elements of score){
let mom=score;//alert(score);
console.log(mom[1]);
}