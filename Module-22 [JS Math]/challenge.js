//solving the challenges!
// Challenge: 1
function lowestNum(num){
    let lowCount = num[0];
    for(let i = 0; i < num.length; i++){
        let element = num[i]
        if(element < lowCount){
            lowCount = element;
        }
    }
    return lowCount;
}

let myNum = [39, 36, 2, 3];
let lowNumber = lowestNum(myNum);
console.log(lowNumber);

// Challenge-2:
function findSmall(number1, number2, number3){
    return Math.min(number1,number2, number3)
}

console.log(findSmall(7569, 63, 83652))

//challenge-3:
function mass(arr){
    let arrayLength = arr.length;
    let sum = 0;
    for(let i = 0; i < arrayLength; i++){
        sum += arr[i] 
    }
    return sum / arrayLength;
}

let massNum = [2, 3, 4, 2];
let massNumber = mass(massNum);
console.log(massNumber); 

// challenge-3:
function getArea(length, height){
    return length * height;
}

let myArea = (getArea(2,3))
console.log(myArea);



function secondLargest(arr){
    let firstLargeNum = arr[0];
    let secondLargeNum = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > firstLargeNum ){
            secondLargeNum = firstLargeNum;
            firstLargeNum = arr[i];
        }

        if(arr[i] > secondLargeNum && arr[i] < firstLargeNum){
            secondLargeNum = arr[i]
        }
    }
    return secondLargeNum;
}


let myArray = [499,374, 75, 93,39];
console.log(secondLargest(myArray))