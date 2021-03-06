"use strict";
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