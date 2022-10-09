const numbers = [12, 45, 34, 65, 34];
const maxNum = Math.max(...numbers);
// console.log(maxNum);


numbers.push(45);
// console.log(...numbers);

const newNumbers = ['Iqbal', ...numbers, 324];
// const minNum = Math.min(...newNumbers);
// console.log(minNum);
// console.log(newNumbers); 


const numbersof = [45, 12, 36, 84];
numbersof.unshift(25);
// console.log(numbersof);

// function getSum(a, b=9){return a+b;} console.log(getSum(2, 7));

const y = x => x*x;
const z = y(5);
console.log(z)
