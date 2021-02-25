let prompt=require('prompt-sync')();
let weather=prompt("Enter the day's wether: ");
let footwear;
if(weather=="hot"){
    footwear="sandals";
}else if(weather=='rain'){
    footwear="galshoes";
}else if(weather=='snow'){
    footwear="boots";
}else{
    footwear="sneakers";
}
console.log("footwear: "+footwear);
