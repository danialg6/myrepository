"use strict";
const assert = require("assert");
const rec = require("./recursion.js");
describe("count the digits of a given numb", function () {
    it("counts digits of 1234", function () {
        assert.strictEqual(rec.countdigits(1234), 4);
    });
});
describe("reverse a given string", function () {
    it("reverse apple", function () {
        assert.strictEqual(rec.reverse("apple"), "elppa");
    });
});
describe("calculate the power of any base", function () {
    it("calculate 10**4", function () {
        assert.strictEqual(rec.powerofbase(10, 4), 10000);
    });
});