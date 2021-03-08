"use strict";
/*eslint-disable */

// const { checkPrime } = require("../../AssignmentW2D3A/primechecker");

// function findSumAfe(arr){
//     let avg=0;
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//         avg=sum/arr.length;
//      for(let i=2;i<avg;i++){
//          if(i%2===0)
//          break;
//      }
//      return Prime;

//      }

//    // }

//     return avg;
//     if(avg%2){}

// //}
// let result=[2,3,4,5];
// //console.log(findSumAfe(result));

////W2D5 number 4
/*4. Write a JavaScript function named enhancedIncludes that takes two parameters, an array, and a
value to search in the array and return an array result with three values.
a. First value is boolean representing if the search value exists in the array.
b. Second value is the first index of value found in the array or -1
c. Third value is the last index of value found in the array or -1.
// //  */
// function  enhancedIncludes(arr, value) {
//     let result;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             result = true;
//             break;
//         } else {
//             result = false;
//         }
//     }
//     return result;
// }
// let array = [1, 2, 3,2, 4];
// let value = 2;
// console.log( enhancedIncludes(array, value));
// let index;

// for (let i = 0; i < array.length; i++) {
//     if (array.indexOf(value) !== -1 ) {
//         index = array.indexOf(value);

//     } else {
//         index = -1;
//     }
// }

// console.log(index);
// let position;
// for (let i = 0; i < array.length; i++) {
//     if (array.lastIndexOf(value) !== -1 ) {
//         position = array.lastIndexOf(value);

//     } else {
//         position = -1;
//     }
// }
// console.log(position);

//W2D5 number 6
/*6. (EC) Write a function that merges two sorted arrays into one single sorted array. Make use of
shift and push array methods. Hint: Be careful about using a destructive operation such as shift
on an array that is being iterated over. The array and its indices will be changed between
iterations. */
function mergesortedarray(arr1,arr2){
    let result=[];
   // result=arr1.concat(arr2,arr3);
   for(let i=0;i<arr1.length;i++){
   result.push(arr1[i]);
   }
   for(let i=0;i<arr2.length;i++){
      result.push( arr2[i]);
   }
    return result.sort();//result.unshift(arr2);
}
let array1=[1,2,3];
let array2=[0,4,5];

console.log(mergesortedarray(array1,array2));


///filling 100 random numbers to an empty array, array 
//elements should be between 0 and max value
// function fillArray(arr, maxValue) {
//     let arr1 = [];
//     let i = 0;
//     for (i = 0; i <= 100; i++) {
//         arr = Math.floor(Math.random() * maxValue);
//         //arr1.push(arr);
//         arr1[i]=arr;
//     }
//     return arr1;
// }
// let num = [];
// let max = 20;
// console.log(fillArray(num, max));
