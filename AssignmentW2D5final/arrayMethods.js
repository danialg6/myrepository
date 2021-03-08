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
// function mergesSortedarr(arr1, arr2) {
 
//     let arr = [];
//     arr = arr1.concat(arr2).sort();
 
//     return arr;
// }
// let arr4 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];
// console.log(mergesSortedarr(arr4, arr2));
function mergesSortedarr(arr1,arr2){
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
let array2=[3,4,5];

console.log(mergesSortedarr(array1,array2));


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


"use strict";
const arr = ['carecar', 1344, 12321, 'did', 'cannot'];
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      } else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr => {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));


function  enhancedIncludes(arr, value) {
    let result;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            result = true;
            break;
        } else {
            result = false;
        }
    }
    return result;
}
let array = [1, 2, 3, 4, 2] ;
let value = 2;
console.log( enhancedIncludes(array, value));
let index;

for (let i = 0; i < array.length; i++) {
    if (array.indexOf(value) !== -1 ) {
        index = array.indexOf(value);

    } else {
        index = -1;
    }
}

console.log(index);
let position;
for (let i = 0; i < array.length; i++) {
    if (array.lastIndexOf(value) !== -1 ) {
        position = array.lastIndexOf(value);

    } else {
        position = -1;
    }
}
console.log(position);


module.exports={isArrayEqual,tranferToString,mergesSortedarr,
    checkPaliendrom,reverse,isPalindrome,enhancedIncludes}