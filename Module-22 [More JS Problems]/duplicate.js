//finding al the dupllicate elements of an array.
function duplicateElements(person){
    let unique = []
    for(let element of person){
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}

let myArr = ["Iqbal", "rubel", "massud", "azom", "Jbon babu", "Iqbal", "azom"];
const uniquePerson = duplicateElements(myArr);
console.log(uniquePerson);


function duploicateNum(number){
    const uniqueNumber = [];
    for(const element of number){
        if(uniqueNumber.indexOf(element) == -1){
            uniqueNumber.push(element)
        }
    }
    return uniqueNumber;
}

let myNums = [683, 6358, 76, 76, 683];
let nums = duploicateNum(myNums);
console.log(nums);