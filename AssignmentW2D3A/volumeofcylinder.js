"use strict";
const prompt = require("prompt-sync")();
let redius = prompt("Enter the redius of the circle: ");
 /**
  * 
  * @param {number} redius finding area
  * @return {number} area
  */
function areacircle(redius) {
    let area = Math.PI * Math.pow(redius, 2);
    return area;
 
}
let heigth = prompt("Enter the heigth of cylinder: ");
/**
 * 
 * @param {number} heigth findig volume 
 * @returns {number} volum
 */
function volumeCylinder(heigth) {
    let volume = heigth * areacircle(redius);
    return volume;
 
}
console.log(areacircle(redius));
console.log(volumeCylinder(heigth));