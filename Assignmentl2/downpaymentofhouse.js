let prompt=require('prompt-sync')();
let housecost=parseFloat(prompt("Enter the cost of the house: "));
let downpayment;
if(housecost>=0&&housecost<=49999.99){
    downpayment=(5/100)*housecost;
    
}if(housecost>=50000&housecost<=99999.99){
    downpayment=1000+(10/100)*(housecost-50000);
    
}if(housecost>=100000&&housecost<=199999.99){
    downpayment=2000+(15/100)*(housecost-100000);
 
}else if(housecost>=200000){
    downpayment=5000+(10/100)*(housecost-200000);
}
console.log("downpayment is: "+downpayment);