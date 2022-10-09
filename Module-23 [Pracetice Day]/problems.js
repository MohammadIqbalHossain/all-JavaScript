//recurtion

function factorial(num){
    if(num == 1 || num == 0){
        return 'There is no chocolate.'
    }
    else{
        return num * factorial(num - 1)
    }
}

// console.log(factorial(4));

// 1:
function inchTofeet(feet){
      const yourfeetIs = feet * 12;
      return yourfeetIs; 
}

console.log(inchTofeet(3))

//2:
function centimeterToMeter(centemeter){
    const yourCentemeter = centemeter / 100
    return yourCentemeter;
}

console.log(centimeterToMeter(3))

//3:

function paperRequerments(book1, book2, book3){

    const firstBookPapers = book1 * 100
    const secondBookPapers = book2 * 200
    const thirdBookPapers = book3 * 300
    return firstBookPapers + secondBookPapers + thirdBookPapers
}

let bookpageNeed = paperRequerments(3, 5, 10,);
console.log(bookpageNeed, 'pages need')

//4:

function bestFriend(name){
    let largestName = name[0]
    for(const element of name){
        if(element.length > largestName.length){
            largestName = element;
        }
    }
    return largestName;
}

const friendsArray = ['Jahangir', 'Azomhasankan', 'Rubel', 'Arshad']
let friends = bestFriend(friendsArray)
console.log(friends);

//5:

function positiveCheck(arr){
    let positiveNum = [];
    for(const element of arr){
        if(element >= 0){
            positiveNum.push(element);
        }
        if(element < 0){
            break;
        }  
    }
    return positiveNum;
}
const positiveNumbers = positiveCheck([12, 4, 5, 3, 5, 0 ,-1, -12, 6]);
console.log(positiveNumbers);


//Last module problem. finding triangles area.
function triangleArea(base, height){
    const areaMultiply = height * base;
    const area = areaMultiply / 2;
    return area;
}

const myTriangle = triangleArea(150, 200);
console.log(myTriangle);


//Checking a number is a prime number.
// function primeNum(n){
//     let primeNumber = 0;
//     if((6 * n + 1 || 6 * n - 1) && (n % 5 !== 0 && n % 7 !== 0)){
//         primeNumber = true;
      
//     }else {
//         primeNumber =  false;
//     }
//     return primeNumber;
// }
// const myPrime = primeNum(4);
// console.log(myPrime);




// Checking a number is a prime number.
function primeNum(n){
    let rule = 6 * n + 1;
    let rule2 = 6 * n - 1;
    let primeNumber = 0;
    if((rule || rule2) && (rule && rule2 % 5 == 1 || rule && rule2 % 7 == 1)){
        primeNumber = true;
      
    }else {
        primeNumber =  false;
    }
    return primeNumber;
}
const myPrime = primeNum(5);
console.log(myPrime);


function sme(secondInteger, secondDecimal, secondString){
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';
    
   
    const sum = firstInteger + parseInt(secondInteger);
    console.log(sum)
  
    const secondSum = firstDecimal + parseFloat(secondDecimal);
    console.log(secondSum);
    

    const concateStr = firstString + secondString
    console.log(concateStr);
}

let HackerRank = sme(4, 4.16, 'HackerRank is the best place to learn and practice coding!')


function factorial(n){
    let factSum = 1;
    for(let i = 1; i <= n; i++){
        factSum = factSum * i 
     
    }
    return factSum;
}

let fact = factorial(4);
console.log(fact);


// function vowelsAndConsonants(s) {
//     let vowelConsonats = '';
//     let voweles  = ['a', 'e', 'i', 'o', 'u']
//     for(const element of s){
//        if(voweles.includes(element)){
//            vowelConsonats.push(element)
//        }
//        else if(!voweles.includes(element)){
//            vowelConsonats.push(vowelConsonats);
//        }
//     }
//     return vowelConsonats;
// }
// let javaScript =  vowelsAndConsonants('javascriptloops')
// console.log(javaScript);

let str = 'javascriptloops';
let vowels = '';
let consonent = '';
for(let i = 0; i < str.length; i++){
    let element = str[i];
    switch (element) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
       vowels = vowels + element;
       break;
       default:
           consonent = consonent + element;

    }
}
let updateStr = vowels + consonent;
for(let j = 0; j < updateStr.length; j++){
    console.log(updateStr[j])
}

let uppersCase = 0;
let lowerCase = 0;
let str = 'banGladesh';

for (let i = 0; i < str.length; i++){
    let element = str[i];
    if(element)
}