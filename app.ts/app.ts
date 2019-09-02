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

// type alias

type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
  data: [100, 3.99, 10],

  output: function (all: boolean): number[]{
    return this.data;
  }
};

// union types
let myRealRealAge: number | string = 27;

// check types

let finalValue = 30;
if(typeof finslvalue == "number"){
  console.log("Final value is a number");
}


// never type
//
function neverReturns():never {
  throw new Error('An error!');
}

// Nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;



// Practice

type Bank = {money: number, deposit: (val: number ) => void};

let bankAccount: Bank = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let myself: {name: string, bankAccount: Bank, hobbies: string[]} = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);
