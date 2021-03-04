"use strict";
 
const assert = require("assert");
const myFunctions = require("./primechecker");
 
describe("checkPrime", function () {
    it("37 is prime", function () {
        assert.strictEqual(myFunctions.checkPrime(37), true);
    });
    it(" 77 is not prime", function () {
        assert.strictEqual(myFunctions.checkPrime(77), false);
    });
});