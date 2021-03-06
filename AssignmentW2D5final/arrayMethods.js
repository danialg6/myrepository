"use strict";
/* eslint-disable */

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


/**
 * 
 * @param {Array} arr chaniging array to string
 * @return {String} getting string from array
 */
function tranferToString(arr) {
 
    let str = arr.join();
 
    str = arr.join("_").toString();
    return str;
}
let arr1 = ["Quick", "Brown", "Fox"];
console.log(tranferToString(arr1));


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
let arr4 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
console.log(mergesSortedarr(arr4, arr2));

/**
 * 
 * @param {Array} arr checking if it is palindrom
 * @return {boolean} true if it is palindrom, otherwise false 
 */
function checkPaliendrom(arr) {
    let copy = [];
    for (let num1 of arr) {
        copy.push(num1);
    }
 
    for (let i = 0; i < arr.length; i++) {
        if (arr.pop() !== arr.shift()) {
            return false;
 
        }
    }
    return true;
 
}
let num = [1, 2, 2, 5, 2, 2, 1];
console.log(checkPaliendrom(num));


/**
 * 
 * @param {Array} arr accepting an array
 * @return {Array} finding the inverted copy of an array 
 */
function reverse(arr) {
    let temp = [];
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        temp[j] = arr[i];
        j++;
    }
    return temp;
}
let input = [1, 2, 3, 4, 5];
console.log(reverse(input));


module.exports={isArrayEqual,tranferToString,mergesSortedarr,
    checkPaliendrom,reverse}