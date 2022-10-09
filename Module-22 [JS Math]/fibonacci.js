var fibonacci = [0, 1];
function fibo(num){
     for(let i = 2; i < num; i++){
         fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
     }
     return fibonacci;
}

const myNum = fibo(13)
// console.log(myNum);


function fibonacciSeries(fiboNum){
  if(fiboNum < 0){
    return "PLease Enter a positive number"
  }
  if(fiboNum  < 2){
    return 'Please enter a valid number'
  }
   let number_x = [0, 1];
   for(let i = 2; i < fiboNum; i++){
     number_x[i] = number_x[i - 1] + number_x[i -2]
   }
   return number_x;
}

console.log(fibonacciSeries())

// var number = Math.random() * 10;
// var num = Math.round(number);
// console.log(num);

// var a=2; var b=3; if(a >= b){console.log("Hello");}

// var math = Math.floor(12.96);
// console.log(math)


// var first = "Rafsan";
// var second = "Samira";
// console.log(first, second)

// var temp = first;
// first = second;
// second = temp;
// console.log(first, second)


// var sentence = "I am hardworking. I am determined. I will be a web developer.";
// var count = 0;
// for(var i = 0; i < sentence.length; i++){
//   var letter = sentence[i];
//   if(letter == 'a'){
//     count++;
//   }
// }
// console.log(count);