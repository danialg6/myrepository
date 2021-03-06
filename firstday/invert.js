"use strict";
/*eslint-diasable*/
/**
 * 
 * @param {*} arr finding the inverse
 * @return {*} arr calculating inverse;
 */
function inverting(arr,separator=" "){
   let newArray=[];
    newArray=arr.reverse();
    newArray.sort();
 

   return newArray;
}
let result=[2,4,5,1,6,7];
console.log(inverting(result));