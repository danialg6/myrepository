"use strict";
"eslint-disable";
/**
 * 
 * @param {Object} obj1 object one
 * @param {Object} obj2 object 2
 * @return {boolean} returns true if the two objects are equal
 */
function  isPersonEqual(obj1, obj2){
    return (obj1===obj2);
}
const sam1 = { name: "Sam", age: 10 };
const sam2 = { name: "Sam", age: 10 };
console.log(isPersonEqual(sam1,sam2));