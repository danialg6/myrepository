"use strict";
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