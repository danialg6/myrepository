"use strict";
/*eslint-disable*/;


/**
 * 
 * @param {Object} obj getting an object
 * @return {number} returning the number of properties 
 */
function  countProperties(obj){
    let count=0;
    for(let properties in obj){
        if(obj.hasOwnProperty(properties)){
            count++;
        }
    }
    return count;
}
let object1={name:"Dani",age:25,blood:"O",Department:"MSD"};
console.log(countProperties(object1));