
const numbers = [34, 54, 64, 32, 4, 64];

const bigNum =  numbers.filter(number => number < 10 );
// console.log(bigNum);

const specificNum = numbers.find(x => x > 10);
// console.log(specificNum);

const writers = [
    {name: 'Jibanandha', book: 20, poem: 30, drama: 10},
    {name: 'Humayun ahmed', book: 240, natok: 30, chotonatok: 140},
    {name: 'Nazrul', book: 20, poem: 330, drama: 10},
    {name: 'Rabindra', book: 2410, poem: 3014, drama: 10},
    {name: 'Jasumudding', book: 24, poem: 30421, drama: 110},
];

const precious = writers.filter(book => book.book > 100);
// console.log(precious);

const bigNamed = writers.find(name => name.name.length > 10);
// console.log(bigNamed);

const mostWritten = writers.find(x => x.book > 100);
console.log(mostWritten);