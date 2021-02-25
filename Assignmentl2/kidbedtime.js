let prompt=require('prompt-sync')();
let ageofkid=+prompt("Enter the age of the kid: ");
let season=prompt("Enter the season: ");
let bedtimeofkid;
if((ageofkid>0&&ageofkid<=5)&&(season==='summer'||season==='fall')){
bedtimeofkid="8:30";
}else if((ageofkid>0&&ageofkid<=5)&&(season==='winter'||season==='spring')){
    bedtimeofkid="8:00";
}if((ageofkid>=6&&ageofkid<=12)&&(season==='summer')){
bedtimeofkid="9:30";
}else if((ageofkid>6&&ageofkid<=12)&&(season==='winter'||season==='spring'||season==='fall')){
    bedtimeofkid="8:30";
}if((ageofkid>=13)&&(season==='summer')){
    bedtimeofkid="10:30";
}else if((ageofkid>=13)&&(season==='winter'||season==='spring'||season==='fall')){
    bedtimeofkid="9:30";
}
console.log("the bed time of the kid is: "+bedtimeofkid);
