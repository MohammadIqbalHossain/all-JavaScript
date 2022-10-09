
//get multiple numbers factorial with the function
function getFactorial(num){
    let factorial = 1;
    for(let i = 1; i <= num; i++){
        factorial = factorial * i;
    }
    return factorial;
}
let factNum = 90;
let randomFactorial = getFactorial(factNum);
console.log(randomFactorial);

// let secondNum = getFactorial(15);
// console.log(secondNum);

for(let i = 0; i < 10; i++){ 
  console.log(i)
}


