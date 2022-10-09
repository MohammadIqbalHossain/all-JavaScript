
var salam = 65;
var kalam = 45; 

// console.log(salam > kalam);  //grater Than operator 
// console.log(salam < kalam);  //less than
// console.log(salam == kalam)  // equal to
// console.log(kalam != salam); //different
// console.log(kalam >= salam); //greater than or equal
// console.log(kalam <= salam); // less than or equal
// If used Logical and && operator it have fulifil both coindition 
//If used logical or || operator it have to fulfil atlist one condition.

// Logical and && operator and || or operator

if (salam >= kalam && kalam < salam) {
    console.log ("Kalam is a better reader");
} else if (salam == kalam || kalam < salam) {
    console.log ("kalam is not so much reader")
}else {
    console.log("Both are good but need some improvement!");
}
