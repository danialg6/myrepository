"use strict";
/*eslint-disable*/
/**
 * 
 * @param {number} number number
 * @return {number} number count
 */
function countdigits(number){
    if(number<10&&number>-10){
        return 1;
    }
    else{
        return 1+countdigits(Math.floor(number/10));
    }
}
let num=-67;
console.log(countdigits(num));