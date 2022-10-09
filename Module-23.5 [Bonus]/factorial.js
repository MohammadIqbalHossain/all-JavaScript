// let factorial = 1;
// for(let i = 4; i >= 1; i--){
//     factorial = factorial * i;
    
// }
// console.log(factorial);
// console.log('hello');

function factorialRecur(i){
    if(i == 1){
        return 1;
    }
    return i * factorialRecur(--i);
}
console.log(factorialRecur(4));