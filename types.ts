1; // boolena(true/false)
let isAll: boolean;
isAll = true;
// string('foo', "foo", `foo`)
let message: string;
message = "foo";
// number (int, float, hex, binary)
let total: number;
total = 0xff || 123;
// array (type[])
let itens: string[];
itens = ["foo", "foo2"];
// or generic notation
let build: Array<number>;
build = [1, 2];
// tuple (defined array[])
let title: [number, string, boolean];
title = [1, "foo", true];
// enum(object {key:value})
enum Colors {
  white = "#fff",
  black = "#000",
}
// any (nothing type #DONT USE)
let coisa: any;
// void(function(){})
function logger() {}
// null | undefined
let bla: string | undefined;
bla = "foo";
bla = undefined;
// never (function never return)
function error(): never {
  throw new Error("error");
}
// object ({})
let cart: object;
cart = {
  item: "card",
};
