"use strict";
var address = ["San Diego", 424];
var names = ["Jack"];
var myName = "JackM";
function returnMyName() {
    return myName;
}
console.log(returnMyName());
function multiply(val1, val2) {
    return val1 * val2;
}
// function type
// let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
var myMultiply = multiply;
console.log(myMultiply(38, 23));
//Objects
var userData = {
    name: "Jack",
    age: 25
};
// complex objects
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
