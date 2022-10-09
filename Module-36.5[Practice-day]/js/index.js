
const myObj = {
    nmae: 'Iqbal',
    job: 'student',
    isGood: false,
    partTime: {
        profession: 'web developer',
        company: 'freelancer',
        isCompanyGood: true,
    },
    booksCount: [12, 43, 54, 3, 23],
    getSomeValues: function() {
          const value = this.job = this.partTime.profession
          return value
    }
}

const logOut = myObj.getSomeValues()
// console.log(logOut);

const myStr = `my name is ${myObj.nmae} my Profession is ${myObj.partTime.profession} Book I have right now ${myObj.booksCount[1]} what is do is I am a ${myObj.job}`

// console.log(myStr);

const zeroParamFunc = () => 89;
// console.log(zeroParamFunc())

const oneParamFunc = num => num / 7;
// console.log(oneParamFunc(14));

const twoParamFunc = (num1, num2) => (num1 + num2) / 2
// console.log(twoParamFunc(4, 4))

const multiParamFunc = (num1, num2) => {
    const sum = num1 + num2;
    const add1 = num1 + 7;
    const add2 = num2 + 7;
    const addSum = add1 + add2;
    const total = sum + addSum;
    return total
}

// console.log(multiParamFunc(2, 2))

const myArr = [23, 43 , 14, 30, 32];
const divitionBySeven = myArr.map(num => num / 7);
// console.log(divitionBySeven);

//map loop throgh all the array and do a single job.
//forEach loop through all the array and get every single elment. it's  a shortcut of for loop, for of loop.
//conditonally filter or get some element from an array.
//find conditonally finds a element, if Two element fulfiled condition it's returnjust first one.


const myObjDestruc = {
    name: "iqbal",
    job: 'web developer'
}

const {name} = myObjDestruc;
// console.log(name);

const aArray = [34, 23, 42, 34];
const [ , balance] = aArray;
console.log(balance);