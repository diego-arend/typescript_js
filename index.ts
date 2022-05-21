const a = 1;
const b = 2;
function sum(x: number, y: number) {
  const newLocal = x + y;
  return newLocal;
}
const c = sum(a, b);

// type union
// define que uma variavel pode assumir mais de um tipo ex: string | number
// type alias define o type
type Uid = number | string;
type Item = string | {};
function logDetails(uid: Uid, item: Item) {
  console.log(`A product ${uid} reference the product ${item}`);
}
const logs = logDetails(123, "shoes");
const x = logDetails(123, { id: true });

type Platform = "Windows" | "Mac" | "Linux";
function renderPlatform(platform: Platform) {
  return platform;
}
renderPlatform("Mac")
