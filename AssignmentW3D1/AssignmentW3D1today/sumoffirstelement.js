"use strict";
/*eslint-disable*/
/**
 * 
 * @param {Array} arr array
 * @return {number} number 
 */
function sumFirst(arr){
    let sum=0;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        sum=sum+arr[i][0];
}
}
return sum;
}
let arr = [[1, 2], [3, 4], [5, 6]] ;
console.log(sumFirst(arr));