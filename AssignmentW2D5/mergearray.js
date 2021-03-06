"use strict";
/**
 * 
 * @param {Array} arr1 first array
 * @param {Array} arr2 second array
 * @return {Array} finding the merged array 
 */
function mergesSortedarr(arr1, arr2) {
 
    let arr = [];
    arr = arr1.concat(arr2).sort();
 
    return arr;
}
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
console.log(mergesSortedarr(arr1, arr2));