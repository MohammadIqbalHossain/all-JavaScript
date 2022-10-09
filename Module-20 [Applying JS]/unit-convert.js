// Inches to feet.
var myInches = 180;
var inFeet = myInches / 12;
console.log(inFeet);

//Converting multiple Inches in a time.

function inchInFeet(inches) {
    var feet = inches / 12;
    return feet;
} 

let phoneScreenInch = 142;
let phoneScreenFeet = inchInFeet(phoneScreenInch);
console.log(phoneScreenFeet); 

let computerScreen = inchInFeet(100);
console.log("Computer screen in inch: ", computerScreen);

//Miles in kilometer.
var myMiles = 50;
var inKm = myMiles * 1.60934;
console.log(inKm);

//Converting multiple miles in a time with function.
function milesInKm(miles){
    let km = miles * 1.60934;
    return km;
}

 let collegeDistance = 12;
 let collegeInKm = milesInKm(collegeDistance);
 console.log(collegeInKm);


 let shopDistance = milesInKm(2);
 console.log("Shop distance from home in Km: ",shopDistance);

 


