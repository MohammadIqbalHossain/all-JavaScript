
function add(a, b = 0){
    // if(b == undefined){
    //     b = 0;
    // }
    // b = b || 0;
    return a + b;
}

console.log(add(12));

function nameDefault(firstName, lastName = 'Khan'){
   return firstName + ' ' + lastName;
}

console.log(nameDefault('abdullah'));