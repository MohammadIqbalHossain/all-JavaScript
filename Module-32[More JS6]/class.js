
class Support {
     name;
     address;
     constructor(name){
         this.name = name;
         this.address = 'South africa';
     }
     session(){
        //  console.log(this.name, 'Do something');
     }
}

console.log(new Support('iqbal'));

const sessionNew = new Support('bablu', 'bangaldesh');

sessionNew.session();
console.log(sessionNew);

// function min(nums) { return Math.min(nums) }
// console.log(min( [1,3,2 ]))

// const cube=x=> x*x*x; 
// console.log(cube(2))

// const [a, b] = [1,2,3,4,45,5]; 
// console.log(a+b);

// const {x, y, z} = {x: 1, y1: 2, z: 3};
// console.log(y);

// const nums = [1,2,3,4,5];
// let output = nums.filter(n => n%2);

// console.log(output);

// const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}

// const {price} = product;
// console.log(price);

// const person=[ {singer:'Atif aslam', address:'23 something street'}];
// console.log(person[0].address)

// const player = { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38};

// console.log(player.firstName);

// class Teacher {tname: 'you too';}

// const players = [
//     { name: { firstName: "Shakib", lastName: "Hasan" }, age: 34 },
//     { name: { firstName: "Tamim", lastName: "Iqbal" }, age: 32 },
//     { name: { firstName: "Mahmudullah", lastName: "Riyad" }, age: 36 },
//     { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38 },
//    ];

// const firstNameArr = players.map((player) => player.name.firstName);
// console.log(firstNameArr);
