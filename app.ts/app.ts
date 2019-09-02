let address: [String, number] = ["San Diego", 424];

let names: [string] = ["Jack"]

let myName = "JackM"

function returnMyName(): string {
    return myName;
}

console.log(returnMyName());

function multiply(val1: number, val2: number): number {
  return value1 * value2;
}

// function type
let myMultiply: (val1: number, val2: number) => ;
// myMultiply = sayHello;
// myMultiply();

myMultiply = multiply;
console.log(myMultiply(38, 23));
