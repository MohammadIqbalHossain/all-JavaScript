
const numbers = [13, 35, 12, 53, 63, 134, 124, 43];
const slicedNum = numbers.slice(2, 6);
// console.log(slicedNum); 
// console.log(numbers);

const splicedNum = numbers.splice(2, 5, 100, 203);
console.log(splicedNum);
console.log(numbers);