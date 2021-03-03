let prompt=require("prompt-sync")();
let n=+prompt("Enter a number");
let sum=0;
let i;
for( i=0;i<n;i++){
    if(n%i==0){
        sum=sum+i;
    }
}
if(n===sum){
    console.log(n+" is perfect number");
}else{
    console.log(n +" is not perfect number");
}

