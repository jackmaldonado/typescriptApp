let address: [String, number] = ["San Diego", 424];

let names: [string] = ["Jack"]

let myName = "JackM"

function returnMyName(): string {
    return myName;
}

console.log(returnMyName());

function multiply(val1: number, val2: number): number {
  return val1 * val2;
}

// function type
// let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();

let myMultiply = multiply;
console.log(myMultiply(38, 23));


//Objects
let userData: {name: string, age: number} = {
  name: "Jack",
  age: 25
}

// complex objects

let complex: {data: number[], output: (all: boolean) => number[]} = {
  data: [100, 3.99, 10],

  output: function (all: boolean): number[]{
    return this.data;
  }
};
