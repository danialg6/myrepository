"use strict";

const { checkPrime } = require("../../AssignmentW2D3A/primechecker");

function findSumAfe(arr){
    let avg=0;
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        avg=sum/arr.length;
     for(let i=2;i<avg;i++){
         if(i%2===0)
         break;
     }
     return Prime;

     }

   // }
    
    return avg;
    if(avg%2){}

//}
let result=[2,3,4,5];
console.log(findSumAfe(result));
