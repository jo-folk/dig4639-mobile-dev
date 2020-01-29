require('./Adder');


let x = document.getElementById("a");
let y = document.getElementById("b");

let myAdder = new Adder(x, y);

myAdder.onClick();


