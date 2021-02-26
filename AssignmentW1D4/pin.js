let prompt=require('prompt-sync')();
let user=prompt("Enter a pin");
const pin="hello123";
let result;
let i=1;
while(i<=3){
    if(user===pin){
       result="Correct, welcome back";
        break;
    }else {
        result="Incorrect, try again";
        user=prompt("Enter a pin again please");
    }
    
    result="Sorry but you have been locked out";
    i++;
}
console.log(result);