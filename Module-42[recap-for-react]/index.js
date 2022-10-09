const myObj = {
    name: 'Iqbal',
    age: 20,
    job: ["student",'web developer']
}

const job = `My name is ${myObj.name} my age is ${myObj.age}. job is ${myObj.job[0]}`;
// console.log(job);

const arr = [23, 32, 43, 12];
const myArr = [...arr, 34, 54];
arr.push(70);
// console.log(myArr);

const noParamFunc = () => 9;
// console.log(noParamFunc());

const oneParamFunc = num => num * 12;
// console.log(oneParamFunc(2));

const twoParamFunc = (num1, num2) => (num1 + num2) / 4;
// console.log(twoParamFunc(4, 4));

const multiLineFunc = (num1, num2) => {
    const addFirst = num1 + 5;
    const addSecond = num2 + 5;
    const multiply = addFirst * addSecond;
    return multiply;
}

// console.log(multiLineFunc(2, 2));

const obj = {
   name: 'Hamedani',
   age: 30,
   tech: {
       subject: ["java", "javaScript", "Python", "html", "css"],
       interested: 'books',
       channel: "code with mosh"
   }
}

const {subject} = obj.tech;
// console.log(subject[3]);

const moshTeach =  ["java", "javaScript", "Python", "html", "css"];
const [ , balance] = moshTeach;
// console.log(balance);


// I have to leran short hand obj declaration

let a = 45, b = 30, c = 34;
const shortObj = {a: a, b: b, c: c};
// console.log(shortObj.b);

const newShortObj = {a, b, c};
// console.log(newShortObj.a);

const defaultParamFunc = (num1, num2 = 7) => num1 + num2;
// console.log(defaultParamFunc(22))

const teacher = {
    name: 'Hamedani',
    age: 30,
    tech: {
        code: ["java", "javaScript", "Python", "html", "css"],
        interested: 'books',
        channel: "code with mosh",
        others: {
            goodAt: 'Talking',
            hobby: 'Coding allways'
        }
    }
 }

 const {code, channel, hobby} = teacher?.tech?.others;
//  console.log(subject, channel, hobby);



const Newarr = [23, 32, 43, 12];
const mappingArr = Newarr.map(num => num * 2);
// console.log(mappingArr);

const arrFilter = Newarr.filter(num => num < 20);
console.log(arrFilter);

const arrFind = Newarr.find(num => num !== 23 && num !== 32);
console.log(arrFind);

let name = "";
const getTrue =  name ?  'this is name': 'Not name';
console.log(getTrue);

const keysOfObj = Object.keys(teacher);
const values = Object.values(teacher);
const all = Object.entries(teacher)
console.log(all);
console.log(values);
console.log(keysOfObj);

// !active means if  the value is negative it's true.  