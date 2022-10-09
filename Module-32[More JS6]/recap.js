
//Let const
const name = 'iqbal';
let lastName = 'hossain';
lastName = 'chowdhury';

//Default param spread

function add(array = []){
    const maxNum = Math.max(...array);
    return maxNum
}
console.log(add());

//Template string
const writing = `I am always wanted to be a number ${name} one developer with writing code`;
console.log(writing);

//arrow funtion
const favNum = x => x * x;
console.log(favNum(4));

