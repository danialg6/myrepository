"use strict";
/*eslint-disable*/
/**
 * 
 * @param {Array} users array
 * @return {number} number return 
 */
function getAverageAge(users){
    let sum=0;
    for(let i=0;i<users.length;i++){
        sum+=users[i].age;
    }
    return sum/users.length;
}
let arr=[{name:"abc",age:20},{name:"xyz",age:10}];
console.log(getAverageAge(arr));