//Reversing a string with the function!

function reversingSting(str){
    let letter = '';
    for(const char of str){
        letter = char + letter;
    }
    return letter;
}

console.log(reversingSting('Hello, coder iqbal.'))

function reverseString(str){
    let reversed = '';
    for(const element of str){
        reversed = element + reversed;
    }
    return reversed;
}

console.log(reverseString('education of bangladesh is bullshit!'))


let myString = 'Hello, My name is Mohammad Iqbal.';

let getChar = myString[0]
console.log(getChar); 

for(i = 0; i < myString.length; i++){
    console.log(myString[i])

}