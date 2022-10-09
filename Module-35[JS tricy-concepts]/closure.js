
function closure(){
    let counter = 0;
    return function(){
        counter++
        return counter
    }
}

let count1 = closure()
console.log(count1()) // returns 1
console.log(count1()) // returns 2
console.log(count1()) // returns 3



