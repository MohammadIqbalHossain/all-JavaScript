//solving basic challenges for tetsting myself.

//1:
var str = "Hello, I am learning programming."; // string
var myRank = 20;  //number
var doISleep = true; //boolean

//2:
let myName = 'Mohammd Iqbal';
const jobStatus = 'Unemployed';
myName = 'Mohammad Iqbal Hossain';

//3:
let expressions = 10;
let secondExp = 20;

let add = expressions + secondExp;
let sunstraction = expressions - secondExp;
let division = expressions / secondExp;
let multiplication = expressions * secondExp;
let remainder = expressions % secondExp;
// console.log(remainder);


//4:
let num_x = 10;
let num_y = 20;

if(num_x > num_y){
    console.log("num one is bigger");
}else if(num_x < num_y){
   console.log("It's loweer than num one")
}else if (num_x == num_y){
    console.log("Theu are equal")
}else if( num_x != num_y){
    console.log('They are not equal')
}else if(num_x <= num_y){
    console.log('They are equal or low')
}else if (num_x >= num_y){
    console.log('tehy are greater or equal')
}

//5 & 6:
let isRaining = true;
let haveUmbrella = false;
let takeRickshaw = false;

if((isRaining == true && haveUmbrella == true) || takeRickshaw == true){
    console.log('We will have a trip')
}else{
    console.log("we will eat jhalmuri in the house.")
}


//7: 
let number = 7;
while(number <= 19){
    if(number % 2 !== 0){
        console.log(number)
    }
    number++
}

//8: 

let arr = [23, 75, 92, 29, 928, 93, 73, 85];
let arrayLength = arr.length;
arr[4] = 34;
arr.push(22, 50)
arr.pop()
// console.log(arrayLength)
// console.log(arr)

//  9 & 10:
let arr = [23, 75, 92, 29, 928, 93, 73, 85];
for(const element of arr){
    if(element > 80){
        console.log(element)
    }
}

function multiplicationOfThreeNum(num1, num2, num3){
    const multiply = num1 * num2 * num3;
    return multiply
}

console.log(multiplicationOfThreeNum(2, 2, 2))

let person = {
    name: 'Jahangir alam',
    occupation: "Student",
    education: 13
}

let changeJob = person.occupation = 'expatriate';
console.log(changeJob)
console.log(person)

