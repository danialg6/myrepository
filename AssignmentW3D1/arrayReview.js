"use strict";
"eslient-disale";
/**
 * 
 * @param {Array} arr finding min from array
 * @return {number} returning minimum; 
 */
function minArray(arr){
    let min=arr[0];
    for(let Element of arr){
        Element++;
        if(Element<min){
            
            min=Element;
        }else{
             min;
        }
        return min;
    }
}
let array=[5,1,2,3,4];
console.log(minArray(array));