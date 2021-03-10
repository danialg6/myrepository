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


/**
 * 
 * @param {number} number number
 * @return {number} number count
 */
function countdigits(number){
    if(number<10){
        return 1;
    }
    else{
        return 1+countdigits(Math.floor(number/10));
    }
}
let number=123;
console.log(countdigits(number));


/**
 * 
 * @param {String} str string
 * @return {String} string 
 */
function reverse(str){
    if(String.length===0){
        return ;
    }
    if(str.length===1)
        return str;
    else
        return str.substr(str.length-1)+ reverse(str.substr(0,str.length-1));
    
}
let str="hello";
console.log(reverse(str));

module.exports={powerofbase,countdigits,reverse};