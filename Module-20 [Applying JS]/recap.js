// variable
var time = "1:10PM";
time = "I have no time.";
time = "2:00AM";

//Array 

var tableItem = ["phone", " two pen", "Itel phone", "cap", "Moniotor", "keyboard"];

var phoneIndex = tableItem.indexOf("Itel phone");
// console.log(phoneIndex);

tableItem.push("books");
tableItem.pop();
tableItem.shift();
tableItem.unshift("Papers");
console.log(tableItem);

//objects 
var  phoneDetails = {
    name: "Itel P33",
    model: "P3",
    display: "gorilla",
    size: "2",
    color: "khakiBlurish"
} 

//I can get and set value of the obejcts.

//using let const var.
// Let.
let InitValueChange = "I admire my friends";
InitValueChange = "Now I'am not admiring my friends."
console.log(InitValueChange);

//const.

const myCountryName = "Bangladesh.";
// myCountryName = "south africa";  //It's can't be assinged.
console.log(myCountryName); 

//function 
function demoFunction() {
    console.log("this is a demo fuction")
}

let demo = demoFunction()

//for loop 
for(var j = 0; j < tableItem.length; j++) {
    console.log(j)
}

//while loop 
var i = 0;
while(i < 10) {
    console.log(i)
    i++
}

//Conditions 
if(i < 10 && i > 0) {
    console.log("This will work for the while loop.")
}else if(j < tableItem.length && l > 0) {
    console.log("It will work for the for loop.")
}


