
//checking even number 
const myNumber = 7294;
const isEvenNum = myNumber % 2 == 0;
console.log(isEvenNum);

//checking even with function.

function isEven(number){
    if(number % 2 == 0) {
        return true
    }
    return false
}

let hisNumber = 379567;
let numberStatus = isEven(hisNumber)
console.log(numberStatus) 

// cheking odd number 

let randomNum = 9276;
let isNumOdd = randomNum % 2 !== 0;
console.log("Checking is this odd: ", isNumOdd);

//checking odd number with the function 

function isOdd(number) {
    if(number % 2 == 1) {
        return false;
    }
    return true;
}
const specialNum = 350;
const numStatus = isOdd(specialNum);
console.log("Is this a odd number: ", numStatus);


//Cheking odd and even in just a function.

function oddOrEven(number){
    if(number % 2 == 0) {
        return true;
    }else if(number % 2 !== 0){
        return false;
    }
}

let num_x = 937;
const oddOrEvenNum = oddOrEven(num_x);
console.log("this is: ", oddOrEvenNum);


let petagurasNum = oddOrEven(3);
console.log(petagurasNum);


