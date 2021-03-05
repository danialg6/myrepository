"use strict";

const rotate = (arr, count = 1) => {
    return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
  };
/**
 * 
 * @param {number} arr finding array 
 * @param {number} n 
 */


  
  const arr = [1,2,3,4,5];
  
  console.log(rotate(arr, 1));
  console.log(rotate(arr, 2));
  console.log(rotate(arr, 3));