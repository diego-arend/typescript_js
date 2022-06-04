"use strict";
const a = 1;
const b = 2;
function sum(x, y) {
    const newLocal = x + y;
    return newLocal;
}
const c = sum(a, b);
function logDetails(uid, item) {
    console.log(`A product ${uid} reference the product ${item}`);
}
const logs = logDetails(123, "shoes");
const x = logDetails(123, { id: true });
function renderPlatform(platform) {
    return platform;
}
renderPlatform("Mac");
