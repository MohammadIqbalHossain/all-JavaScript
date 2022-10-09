
// geting the largest number in an array.
function largestNumber(num){
    let max = num[0];
    for(let i = 0; i  < num.length; i++){
        let element = num[i]
        if(element > max){
            max = element;
        }
    }
    return max
}

let numberofArray = [28, 35, 34, 92, 34]
let largestNum = largestNumber(numberofArray)
// console.log(largestNum);

//geting the lowest number of an array.
function lowestNumber_x(num){
    let min = num[0];
    for(let i = 0; i  < num.length; i++){
        let element = num[i]
        if(element < min){
            min = element;
        }
    }
    return min
}

let lowestNumber = [28, 35, 34, 92, 34]
let largestNum_x = lowestNumber_x(lowestNumber)
// console.log(largestNum_x);


//finding the even number in an array 

function isEven(number){
    let evenNum = number[0];
    for(let i = 0; i < number.length; i++){
        let element = number[i];
        if(element % 2 == 0){
            evenNum = element
        }
    }
    return evenNum
}

let evenNums = isEven(lowestNumber);
console.log(evenNums);

// finding 