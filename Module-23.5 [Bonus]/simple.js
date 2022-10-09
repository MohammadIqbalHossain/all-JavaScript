// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

//recurtion!
function recurtion(i){
    if(i > 10){
        return;
    }
    console.log(i);
    recurtion(++i);

}
recurtion(1);