"use strict";
1; // boolena(true/false)
var isAll;
isAll = true;
// string('foo', "foo", `foo`)
var message;
message = "foo";
// number (int, float, hex, binary)
var total;
total = 0xff || 123;
// array (type[])
var itens;
itens = ["foo", "foo2"];
// or generic notation
var build;
build = [1, 2];
// tuple (defined array[])
var title;
title = [1, "foo", true];
// enum(object {key:value})
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (nothing type #DONT USE)
var coisa;
// void(function(){})
function logger() { }
// null | undefined
var bla;
bla = "foo";
bla = undefined;
// never (function never return)
function error() {
    throw new Error("error");
}
// object ({})
var cart;
cart = {
    item: "card",
};
