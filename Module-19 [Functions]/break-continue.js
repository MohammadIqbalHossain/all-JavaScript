
// //while loop.
// // var i = 0;
// // while(i < 10) {
// //     console.log(i)
// //     if(i >= 5) {
// //         break;
// //     }
// //     i++;
// // }

// //for loop
// var randomItems = [35, 76, 3, 75, 735, 5, 59, 58];
// for(var i = 0; i <= randomItems.length; i++){
//     var item = randomItems[i];
//    if(i == 3) {
//        continue;
//   }
//   console.log(item);
// }

// for(var i = 0; i < randomItems.length; i++) {
//   var num = randomItems[i];
//   if(num > 75) {
//     continue;
//   }
//   console.log(num)
// }

//while loop continue.
var randomItems = [35, 76, 3, 75, 735, 5, 59, 58];
var number = 0;
while(number < randomItems.length) {
  var count = randomItems[number];
  if(count <= 75) {
    continue;
  }
  number++
  console.log(count)
  
 
}