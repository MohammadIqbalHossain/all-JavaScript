//1
let Myname = 'Mohammad Iqbal';
const myAge = 20;

//2
const myObj = {
    phone: 'iTel p33',
    monitor: 'hp 1400',
    price: 5000,
    mouse: 'mixit'
}

const str = `This is a dummy string I am writing for declare ${Myname} and ${myAge} also for ${myObj.mouse} and ${myObj.monitor}`;
// console.log(str);

//3

const divition = num => num / 5;
// console.log(divition(12));

//4

const addMultiply = (x, y) => (x + 2) * (y + 2);
console.log(addMultiply(2,2)); 

//5

const ThreeParam = (x, y, z) => x * y * z;
// console.log(ThreeParam(2, 2, 2));

//6

const multiline = (num1, num2) => {
    const firstAdd = num1 + 2;
    const secondAdd = num2 + 2;
    const Multiply = firstAdd * secondAdd;
    return Multiply;
}

// console.log(multiline(4, 4));

//7

let nameArgs ="Arrow function"
let me = { 
 name: "Regular function", 
 thisInArrow:() => { 
   console.log("Example of " + this.name); //no 'this' binding here 
 }, 
 thisInRegular(){ 
   console.log("Example of " + this.name); //'this' binding works here 
 } 
};
me.thisInArrow(); 
me.thisInRegular();


//8


//9

const arr = [23, 35, 46, 3, 44, 31];
const arrMuliply = arr.map(num => num * 5);
// console.log(arrMuliply);

//10
const getOdd = arr.filter(oddNum => oddNum % 2 != 0);
// console.log(getOdd);

// 11:

const objArr = [
    {name: 'Walton pro max', price: 2000},
    {name: 'Samsung Galaxy', price: 2000},
    {name: 'Noah pro', price: 5000},
    {name: 'iPhone xxx', price: 200000}
]

const findBudgetPhone = objArr.find(obj => obj.price == 5000);
// console.log(findBudgetPhone);

// 12:
// summary of what does map, filter, forEach, find

// Map: loop through all the element of array, take every indivitual element as parameter, does a specific work on the every element return all the element as an array.

//filter: conditionally filter elemets from an array. it's return a array!

//forEach: if we don't need return from an array we use forEach;

//find: conditinally find a element in an array, if condition matched two it will return first one.

// 13:
const obj = {
    name: 'abdul',
    occupation: 'web dev'
}

const {name, occupation} = obj;
// console.log(name);

// 14:
const arrDes = [23, 35, 46, 3, 44, 31];

const [three] = [arrDes[2]];
// console.log(three);

function defaultParam(x, y, z = 7){
    const add = x + y + z;
    return add;
}
// console.log(defaultParam(3, 4));

//15

const nestedObj = {
    company: 'sunsine web dev',
    netPrice: 20000,
    subCompany: {
        name: 'Oil sunsine',
        worker: 100,
        vancancy: 10,
        worth: 1000,
        branch: {
            main: 'gulsan',
            secondMain: 'singapre',
            thirdMain: 'dubai'
        } 
    }
}

// console.log(nestedObj?.subCompany?.branch?.secondMain);
const thirdMain = nestedObj;
// console.log(thirdMain);