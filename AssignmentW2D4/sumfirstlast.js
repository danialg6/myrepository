"use strict";
/**
 * 
 * @param {number} arr finding sum;
 * @return {number} sum; 
 */
function addends(arr){
let sum=0;
for(let i=0;i<arr.length;i++){
    sum=arr[0]+arr[arr.length-1];
}
return sum;
}
let numbers=[2,4,3,5,1,6,7,8];
console.log(addends(numbers));