
//finding the biggest of three numbers with if/ else.
function bigNum(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return "Num 1 is the biggest";
    }else if(num2 > num1 && num2 > num3){
        return "num 2 is biggest"
    }else{
        return "num 3 is the biggest"
    }
}

let biggestNum = bigNum(3975,73, 7593);
console.log(biggestNum);

//shorthand:
function biggestNumber(firstNum, secondNum, thirdNum){
    return Math.max(firstNum, secondNum, thirdNum)
}

let biggestInteger = biggestNumber(39750,735,75);
console.log(biggestInteger);

//finding lowest of three number with the if/else.

function lowestNum(count1, count2, count3){
    if(count1 < count2 && count1 < count3){
        return "Count one is the lowest number"
    }else if (count2 < count1 && count2 < count3){
        return "Count two is the lowest number"
    }else {
        return "Count three is the lowest number"
    }
}

let lowestCount = lowestNum(30, 35,157);
console.log(lowestCount); 


//Shorthand:
function lowestNumber(number1, number2, number3){
    return Math.min(number1, number2, number3)
}
let lowest_Num = lowestNumber(735, 2760, 650);
console.log(lowest_Num);