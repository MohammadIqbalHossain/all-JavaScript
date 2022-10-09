let x = 'Hello';
let y = x;
console.log(x, y); // prits Hello, Hello
x = 'Hi';
console.log(x, y) // prints Hi, Hello

let p = {profession: 'web developer'};
let q = p;
console.log(p, q); // prints web developer 

p.profession = 'Font-end developer'
console.log(p, q) // prints pront-end developer