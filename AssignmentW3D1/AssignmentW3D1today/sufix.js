"use strict";
"eslint-disable";
/**
 * 
 * @param {String} str1 string
 * @param {String} str2 string
 * @return {String} finding sufix of two strings 
 */
function suffix(str1,str2){
    let arr1=str1.split("");
    let arr2=str2.split("");
    let strreturn1="";
    let strreturn2="";
    for(let i=arr1.length-1;i>=0;i--){
        strreturn1=strreturn1+arr1[i];
    }
    for(let i=arr2.length-1;i>=0;i--){
        strreturn2=strreturn2+arr2[i];
    }
let count1=str1[str1.length-1];
let count2=str2[str2.length-1];

    return str1;
}
let inputstring="hello mom seeing";
let abc=inputstring.split("");
console.log(abc);