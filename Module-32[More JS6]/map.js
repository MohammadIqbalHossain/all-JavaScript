
const numbers = [2, 3, 64, 2, 5, 6];

const doubleIt = x => x * x;

for(const number of numbers){
    // console.log(doubleIt(number));
}

const mapingDouble = numbers.map(x => x * x);
// console.log(mapingDouble);

const square = numbers.map(x => x * 2);
console.log(square)