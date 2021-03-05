"use strict";
/**
 * 
 * @param {number} arr rotating elements to the left;
 * @return {number} arr;  
 */
function rotateelement(arr){
    for(let i=0;i<arr.length-1;i++){
        // let temp=arr[i+1];
        // arr[i+1]=arr[i];
        // arr[i]=temp;
        arr.unshift(arr.pop());
    }
    return arr;
}
// function arrayRotate(arr, reverse) {
//     if (reverse) arr.unshift(arr.pop());
//     else arr.push(arr.shift());
//     return arr;
//   }
//   usage:
  
//   arrayRotate(['h','e','l','l','o']);       // ['e','l','l','o','h'];
//   arrayRotate(['h','e','l','l','o'], true); // ['o','h','e','l','l'];
let letters=[-1, -100, 1, 2, 3, -55];
console.log(rotateelement(letters));