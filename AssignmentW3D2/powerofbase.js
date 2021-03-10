"use strict";
/*eslint-disable*/
/**
 * 
 * @param {number} number num
 * @param {number} pow num
 * @return {number} number
 */
function powerofbase(number,pow){
    if(pow==0){
        return 1;
    }
   else{
        return number*powerofbase(number,pow-1);
    }
}
let num=2;
let power=3;
console.log(powerofbase(num,power));