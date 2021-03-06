"use strict";
/*eslint-disable*/
/**
 * 
 * @param {Array} arr1 finding 
 * @param {Array} arr2 finding
 * @returns boolean;
 */
function isArrayEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
 
    }
    return true;
 
}
let myArr1 = [1, 2, 3, 4];
let myArr2 = [1, 2, 3, 4];
console.log(isArrayEqual(myArr1, myArr2));