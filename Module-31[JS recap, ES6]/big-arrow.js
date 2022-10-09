
const sum = (num1, num2) => num1 + num2;
const total = sum(12, 10);
console.log(total);


const Multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = Multiply(12, 43, 6);
console.log(result);

const SingleParam = title =>  'abdul ' + title;

const personTitle = SingleParam('halim');
console.log(personTitle);

const withoutparam = () => 'Chowdury mofazzol';

console.log(withoutparam());

const math = (x, y) => {
    const add = x + y;
    const diff = add - 10;
    const multiply = diff * x;
    return multiply;
}

const dummyMath = math(12, 7);
console.log(dummyMath);