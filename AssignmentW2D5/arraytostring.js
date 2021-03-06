"use strict";
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