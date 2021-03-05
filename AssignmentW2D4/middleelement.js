"use strict";
/**
 * 
 * @param {number} arr finding middle element from an array;
 * @return {number} middle element; 
 */
function getMiddle(arr){
    let middleelement;
    for(let i=0;i<arr.length;i++){
      if(arr.length%2!==0){
          middleelement=arr[Math.floor(arr.length/2)];
      }else{
          middleelement=(arr[(arr.length/2)-1]+arr[arr.length/2])/2;
      }
    }
    return middleelement;
}
let numbers=[2,4,5,6,7,9];
console.log(getMiddle(numbers));