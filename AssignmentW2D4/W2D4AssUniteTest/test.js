"use strict";
/**
 * 
 * @param {number} arr finding sum;
 * @return {number} sum; 
 */
function addends(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=arr[0]+arr[arr.length-1];
    }
    return sum;
    }
    let numbers=[2,4,3,5,1,6,7,8];
    console.log(addends(numbers));



/**
 * 
 * @param {number} arr rotating elements to the left;
 * @return {number} arr;  
 */
function rotateelement(arr){
    for(let i=0;i<arr.length-1;i++){
        // let temp=arr[i+1];
        // arr[i+1]=arr[i];
        // arr[i]=temp;
        arr.unshift(arr.pop());
    }
    return arr;
}

let letter=["a","b","c","d","e"];
console.log(rotateelement(letter));
    

/**
 * 
 * @param {number} arr rotating elements to the right;
 * @return {number} arr;  
 */
function rotateelements(arr){
    for(let i=0;i<arr.length-1;i++){
        
        arr.push(arr.shift());
    }
    return arr;
}
let letters=["a","b","c","d","e"];
console.log(rotateelements(letters));



const rotate = (arr, count = 1) => {
    return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
  };
/**
 * 
 * @param {number} arr finding array 
 * @param {number} n 
 */


  
  const arr = [1,2,3,4,5];
  
  console.log(rotate(arr, 1));
  console.log(rotate(arr, 2));
  console.log(rotate(arr, 3));



  /**
 * 
 * @param {number} arr finding middle element from an array;
 * @return {number} middle element; 
 */
function getMiddle(arr){
    let middleelement;
    for(let i=0;i<arr.length;i++){
      if(arr.length%2!==0){
          middleelement=arr[Math.floor(arr.length/2)];
      }else{
          middleelement=(arr[(arr.length/2)-1]+arr[arr.length/2])/2;
      }
    }
    return middleelement;
}
let number=[2,4,5,6,7,9];
console.log(getMiddle(number));
module.exports={addends, rotateelement, rotateelements, rotate, getMiddle};


