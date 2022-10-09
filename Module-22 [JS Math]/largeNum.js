
//Finding the largest number of an array.
function largestNum(numbers){
    let num = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element > num){
           num = element
        }
    }
    return num
}

let myNum = largestNum([583, 75, 537, 57, 79]);
console.log(myNum);

//Geting the lowest number of an array.
function lowestNum(numbers){
    const min = Math.min(...numbers)
    return min
}
// let lowestNumber = lowestNum([3975, 8347, 7, 365,]);
// console.log(lowestNumber);

function smallNum(numbers){
    let smallest = numbers[0];
    for(var i=1; i < numbers.length; i++){
        if(numbers[i] < smallest){
            smallest = numbers[i];   
        }
    }
    
    return smallest;
}

let lowestNumber = smallNum([3975, 8347, 7, 365,]);
console.log(lowestNumber);

