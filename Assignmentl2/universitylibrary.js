let prompt = require('prompt-sync')();
let librarian = prompt("Enter the status of the borrower: ");
let overduebooks = parseInt(prompt("Enter the number of overdue books in the last year: "));
let loandurationinweeks;
if (librarian == 'student' && overduebooks == 0) {
    loandurationinweeks=6;  
} if (librarian == 'student' && (overduebooks > 0 && overduebooks < 3)) {
    loandurationinweeks=4;   
} if (librarian == 'student' && overduebooks >= 3) {
    loandurationinweeks=2;
} if (librarian == 'faculty' && overduebooks == 0) {
    loandurationinweeks=12;
} if (librarian == 'faculty' && (overduebooks > 0 && overduebooks < 3)) {
    loandurationinweeks=10;
} if (librarian == 'faculty' && overduebooks >= 3) {
    loandurationinweeks=8;
} if (librarian == 'other' && overduebooks == 0) {
    loandurationinweeks=4;
} if (librarian == 'other' && (overduebooks > 0 && overduebooks < 3)) {
    loandurationinweeks=3;
} if (librarian == 'other' && overduebooks >= 3) {
    console.log("loanduration is 2 weeks");
    loandurationinweeks=2;
}
console.log("loan duration is: "+loandurationinweeks);


