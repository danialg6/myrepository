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
    // if(str.includes("lottery")||str.includes("prize")){
    // result=true;
    // }else{
    //     result=false;
    // }
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
let str="hello mom lottery i got  and it is ";
console.log(checkSpam(str));

