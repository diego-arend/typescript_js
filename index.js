"use strict";
var a = 1;
var b = 2;
function sum(x, y) {
    var newLocal = x + y;
    return newLocal;
}
var c = sum(a, b);
function logDetails(uid, item) {
    console.log("A product ".concat(uid, " reference the product ").concat(item));
}
var logs = logDetails(123, "shoes");
var x = logDetails(123, { id: true });
function renderPlatform(platform) {
    return platform;
}
renderPlatform("Mac");
