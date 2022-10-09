
//Adding all the array element.
const arr = [86, 66, 56, 643, 346, 33, 54];

let sum = 0;
for(let i = 0; i < arr.length; i++){
    let elements = arr[i];
    sum = sum + elements;
}
// console.log(sum);

//Adding  all the elemnts with the function.
function sumOfNum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let addedNum = numbers[i]
        sum = sum + addedNum;
    }
    return sum;
}

console.log(sumOfNum([2, 2, 2]));