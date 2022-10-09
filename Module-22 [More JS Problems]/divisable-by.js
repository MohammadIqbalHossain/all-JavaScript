
//Finding divisible by 3 numbers between 1 - 50;

function yourNumber(num){
    for(let i = 1; i <= num; i++){
            if(i % 3 == 0 && i % 5 == 0){
                console.log('foobar')
            }else if(i % 3 == 0){
                console.log('foo');
            }else if(i % 5 == 0){
                console.log('bar')
            }else{
                console.log(i)
            }
         }  
    return num
}

let myNum = 50;
console.log(yourNumber(myNum));


// for(let i = 1; i <= 50; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log('foobar')
//     }else if(i % 3 == 0){
//         console.log('foo');
//     }else if(i % 5 == 0){
//         console.log('bar')
//     }else{
//         console.log(i)
//     }
//  }
