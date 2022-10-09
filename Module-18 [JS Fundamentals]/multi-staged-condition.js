
var fullMark = 100;
var yourMark = 60;
var result = yourMark;
var markAdding = 10;
var isManared = false;
var isUnManerd = false;

// if (yourMark >= 80 && yourMark < fullMark) {
//      console.log("You've got GPA 5");
// }else if (yourMark >= 60 && yourMark < 80) {
//     console.log("You've got A grade");
// } else if (yourMark >= 40 && yourMark < 60) {
//     console.log("You've got C grade");
// }else if (yourMark >= 33 && yourMark < 40) {
//     console.log("you've got D grade")
// }else {
//     console.log("You're Failed");
// }



if (yourMark >= 33 && isManared == true) {
    yourMark += 10; 
    console.log("You've passed")
    if (isUnManerd == true) {
        markAdding -= 10;
    }
}else {
    return yourMark;
}
