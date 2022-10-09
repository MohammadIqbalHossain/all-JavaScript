
//Cheking if a year  is leap year.
function isleapYear(year){
     if((year % 4 == 0 && year % 100 != 0) || (year % 4 == 400)) {
         return true
     } else {
         return false;
     }
}

let thisYear = 2024;
let leapOrNot = isleapYear(thisYear);
console.log(leapOrNot);

let newYear = isleapYear(2500);
console.log(newYear);