// function Sum(n1,n2){
//     return n1+n2;
// }
// let total=Sum(1,2);
// //console.log(total);
// //console.log(sum(2,3));
// for(let i=1; i<10; i++){
//     if(i%3===0) break;
//     console.log(i);
//    }
let prompt=require('prompt-sync')();
let number=prompt("Enter a number: ");
let remainder=0;;
//let sum=0;
let hold=number;
let result=" ";
while(hold){
    result=result.concat(hold%10);
    //sum+=number%10;  
    hold=Math.floor(hold/10);
}
console.log(result);