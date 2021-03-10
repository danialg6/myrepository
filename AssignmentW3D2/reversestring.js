"use strict";
/*eslint-disable*/
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
//console.log(str.substring(str.length-1));