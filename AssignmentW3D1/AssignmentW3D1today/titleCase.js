"use strict";
/*eslint-disable*/
/**
 * 
 * @param {String} s string
 * @return {String} return string
 */
function titleCase(s){
return s[0].toUpperCase()+s.substr(1,s.length-1);
}
let str="hello";
console.log(titleCase(str));
//console.log(str.substr(1,3));
let abc="frehiwet";
console.log(abc.substr(2,abc.length-1));