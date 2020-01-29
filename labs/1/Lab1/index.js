const Adder = require("./Adder.js");


let x = document.getElementById("a");
let y = document.getElementById("b");

let myAdder = new Adder(x, y);

myAdder.onClick();


