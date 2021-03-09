"use strict";
"eslint-disable";
/**
 * 
 * @param {String} str string
 * @return {boolean} check if string is found; 
 */
function  checkSpam(str){
    let result;
    let arraystring=str.split(" ");
for(let elements of arraystring){
    if(elements==="lottery"||elements==="prize"){
result=true;
break;
    }else{
        result=false;
    }
}
    return result;
}
let str="hell mom i got lottery and it is prize";
console.log(checkSpam(str));

