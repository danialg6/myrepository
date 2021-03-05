"use strict";
/**
 * 
 * @param {number} arr rotating elements to the right;
 * @return {number} arr;  
 */
function rotateelement(arr){
    for(let i=0;i<arr.length-1;i++){
        // 
        arr.push(arr.shift());
    }
    return arr;
}
let letters=[-10, 2, 3, 4, 20];
console.log(rotateelement(letters));