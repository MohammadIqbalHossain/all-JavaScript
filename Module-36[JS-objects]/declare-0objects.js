//Literal
const myObj = {name: 'Abdullah', age: 22}

//constructor
const obj = new Object('');
// console.log(obj)

const newObj = Object.create(myObj)
// console.log(newObj.name)

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
}

const person1 = new Person('khan', 34);
// console.log(person1);

function artist(name, art){
    this.name = name;
    this.art = art;
}

const atrits = new artist('cow', 'foo');
console.log(atrits);

console.log(artist('cow', 'glaas of grass'));

// const obj ={a:1, b:7, c:3, length:2};
// // console.log(Object.keys(obj).length);

// const obj1= {module: 35, video:2}; const obj2= {module: 35, video:2};
// // console.log(obj1 === obj2);

// const getGirlFriend= (name = "chokina") => "name"; console.log(getGirlFriend()); 
