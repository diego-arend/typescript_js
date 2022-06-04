"use strict";
1; // boolena(true/false)
let isAll;
isAll = true;
// string('foo', "foo", `foo`)
let message;
message = "foo";
// number (int, float, hex, binary)
let total;
total = 0xff || 123;
// array (type[])
let itens;
itens = ["foo", "foo2"];
// or generic notation
let build;
build = [1, 2];
// tuple (defined array[])
let title;
title = [1, "foo", true];
// enum(object {key:value})
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (nothing type #DONT USE)
let coisa;
// void(function(){})
function logger() { }
// null | undefined
let bla;
bla = "foo";
bla = undefined;
// never (function never return)
function error() {
    throw new Error("error");
}
// object ({})
let cart;
cart = {
    item: "card",
};
