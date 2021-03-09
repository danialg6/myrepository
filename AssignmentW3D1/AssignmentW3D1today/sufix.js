"use strict";
/*eslint-disable*/;
/**
 * 
 * @param {String} str1 string
 * @param {String} str2 string
 * @return {String} finding sufix of two strings 
 */
function suffix(str1,str2){
    let sufixresult="";
    let count=0;
    let length1=str1.length-1;
    let length2=str2.length-1;
    while(true){
        if(str1[length1-count]===str2[length2-count]){
            sufixresult=str1[length1-count]+sufixresult;
            count++;
        }else{
            break;
        }
        
    }
    return sufixresult;

}
let inputstring1="reading";
let inputstring2="seeding";
console.log(suffix(inputstring1,inputstring2));