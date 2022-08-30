let num01 = prompt("primeiro numero?");
let num02 = prompt("segundo numero?");
Number(num01);
Number(num02);

console.log("O primeiro numero e maior que o segundo?", num01 > num02);

console.log("O primeiro numero e igaul ao segundo?", num01 === num02);

console.log("O primeiro numero e divisivel pelo segundo?", num01 % num02 === 0);

console.log("O segundo numero e divisivel pelo primeiro?", num02 % num01 === 0);
