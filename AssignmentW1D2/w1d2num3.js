let prompt=require('prompt-sync')();
let numofboxes=prompt("Enter numofboxes : ");
let numofboxesineachstack=prompt("Enter numofbonumofboxesineachstack  : ");
let numofstack=Math.ceil(numofboxes/numofboxesineachstack);
console.log(numofstack);