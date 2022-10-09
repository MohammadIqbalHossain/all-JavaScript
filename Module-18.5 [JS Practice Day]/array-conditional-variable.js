
//Variable 

var pcLighting = "My pc has RGB lighting.";
var pcCost = 300000;

//Array 

var readingList = ["Almanek of naval rabikant", "The alcehmist", "The things you can see when you jsut slow down.", "Ugly love"];

readingList.push("Unquenchable thoughts", "Sophis world.")
var shelteredBook = readingList.pop()
readingList.shift()
readingList.unshift("This book loves you.");
// console.log(shelteredBook);
// console.log(readingList);

//conditional 

var timeInWeek = 2;
var havework = true;
var betterBook = false;

if (timeInWeek == 3) {
    // console.log("I will read all of the books listed.");
    if (timeInWeek == 2 && havework == true) {
        console.log("I will read two books.");
    }else {
        console.log("I will try to read books as per as I can.");
    }
}else if (havework == false && betterBook == true){
     console.log("I will read listed book first then others.")
}else {
    console.log("trying to read all of the books.")
}


