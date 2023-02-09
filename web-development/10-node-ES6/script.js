// const script2 = require('./script2.js')
// import { largeNumber } from "./script2.js";

let a;
if (true) {
  const { largeNumber } = await import('./script2.js')
  a = largeNumber;
}

const b = 5;

console.log(a, b);