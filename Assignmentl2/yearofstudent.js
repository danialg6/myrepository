let prompt=require('prompt-sync')();
let studentname=prompt("Enter student name: ");
let universitycredit=parseInt(prompt("Enter the number of completed university credit: "));
let universitybatch;
if(universitycredit>=0&&universitycredit<30){
    universitybatch="freshman";
}if(universitycredit>=30&&universitycredit<60){
    universitybatch="sophomore";
}if(universitycredit>=60&&universitycredit<90){
    universitybatch="junior";
}else if(universitycredit>90){
    universitybatch="senior";
}
console.log(studentname+": "+universitybatch);     