let a = 5;
let b = '5'; //a+b = 55 a-|*|% = 0|25|1

console.log("type a: ", typeof a, "| type b: ", typeof b);
console.log("a + b = ", a + b);
console.log("a * b = ", a * b, ", a - b =  ", a - b, ", a / b = ", a / b);

let c = +b;
console.log(`+b : đổi b thành number `, "type b: ", typeof c);
console.log("a === b : ", a === b, "a === +b : ", a === c);