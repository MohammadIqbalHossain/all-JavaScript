
//Geting unlimited prameter with arguments
function getNum(num1, num2){
    let result = 0;
    for(const num of arguments){
        result += num;
    }
    return result
}

const myNum = console.log(getNum(12, 43, 12, 3, 10)); 


function getFullName(){
    let fullName = '';
    for(const name of arguments){
        fullName += name + " ";
    }
    return fullName;
} 

console.log(getFullName('Mohammad', 'iqbal', 'abdullah'));