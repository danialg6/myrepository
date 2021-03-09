"use strict";
"eslint-disable";
/**
 * 
 * @param {Object} obj1 object one
 * @param {Object} obj2 object 2
 * @return {boolean} returns true if the two objects are equal
 */
function  isPersonEqual(obj1, obj2){
    if (obj1.name === obj2.name && obj1.age === obj2.age) {
        return true;
    } else {
        return false;
    }
}
const sam1 = { name: "Sam", age: 10 };
const sam2 = { name: "Sam", age: 10 };
let jhon = { name: "jhon", age: 10 };
console.log(isPersonEqual(sam1,sam2));



"use strict";
"eslint-disable";


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

