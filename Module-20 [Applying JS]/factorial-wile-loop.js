//Getting factorial with the while loop.
function getFactorial(num){
    let factorial = 1;
    var i = 1;
    while(i <= num){
        factorial = factorial * i;
         i++
    }
    return factorial;
}
let myFact = getFactorial(7);
console.log(myFact);

//geting factorial with decremental while loop.
function  GetDecrementFact(number){
    let factorial = 1;
    let i = number;
    while(i >= 1){
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

let factNumber = GetDecrementFact(7);
console.log(factNumber);

//Decrementing factorial with for loop.

function forDecrementFact(num){
    let factorial = 1;
    for(let i = num; i >= 1; i--){
        factorial = factorial * i;

    }
    return factorial;
}

let factNum_x = forDecrementFact(3);
console.log(factNum_x); 