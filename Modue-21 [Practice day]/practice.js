
//converting string into number.
let stingNum = "12" + "12";
let convertingString = parseInt(stingNum);
console.log(convertingString);

//converting float num string.
let floatNum = '3.500';
let convertFloat = parseFloat(floatNum);
console.log(convertFloat);


//addeing two special float number.
var firstNumber = 0.1;
var secondNumber = 0.2;
var total = firstNumber + secondNumber;
total = total.toFixed(1);
total= parseFloat(total);
console.log(total);

//geting remainder 
var ammount = 13;
var interser = 5;
let reaminder = ammount % interser;
console.log(reaminder);


//solving chalelnges. module-17;
var price = 33;
var name = "sabana";
var boxName = "colcola";
var price88 = 34;
var negativeNum = -1;
var _$box78 = "Monika"; 
var homeAddress = "kochu khet";

//challenges: module-18

//Calculating a student grade.

function studentGrade(marks){
   
    if(marks >= 80 && marks < 100){
        console.log("You've got A+");
    }else if(marks >= 60 && marks <= 80){
        console.log("You've got A")
    }else if (marks >= 40 && marks <= 60){
        console.log("You've got A-")
    }else if(marks >= 33 && marks <= 40){
        console.log("You've got c")
    }else{
        console.log("You're failed");
    }
    return marks
}

console.log(studentGrade(40));

//second problem.
var trafficSignal = "green";

if(trafficSignal == "red"){
    console.log("danger")
}else if(trafficSignal == "green"){
    console.log("you can pass")
}else{
    console.log("Stop now!");
}


//module 18.5;

let dailywork = ["Module unlock in 8PM", "Practice after watching video", "Taking notes", "After finishing module practice the whole module."]
let understood = true;

for(var i = 0; i < dailywork.length; i++){
    var tasks = dailywork[i]
    console.log(tasks);
    if (understood == false){
        console.log("Join the support session!")
    }
}

//Module-19; challenge-1:
function multiplicationTable(number){

    for(let i = 1; i <= 10; i++){
       var result = number * i;
       console.log(result);
    }
    return result;
}

let myNumber = 13
let multiply = multiplicationTable(13);


//Challenge-2:

function upCaseName(name){
    return name.toUpperCase()
}

console.log(upCaseName("IQBAL ABDULLAH").toLowerCase());

// challenge-3:

function fullName(firstName, lastName){
    console.log("Hello "+ firstName + " " + lastName);
     
 }
 
 let Myname = fullName("Abir", "kahan")


 //Chanllenge-4 

 function square(num){
     var result = 0;
     for(let i = 0; i <= num; i++){
         result = num * i;
     }
     return result;
 }

 console.log(square(7))


  //Chanllenge-5
 const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],
   
    crust: 'deep dish',
   
    serves: 2
   
   }

   let papperoniIndex = pizza.toppings['2'];
   console.log(papperoniIndex);

   //Module-20: Challenges 
   
   //challenge -1:
   function leapYear(year){
       if((year % 4 == 0 && year % 100 != 0)|| (year % 4 == 400)){
           return true;
       }else {
           return false
       }
   }

   let myYear = 2023;
   let isLeapYear = leapYear(myYear);
   console.log(isLeapYear);

   //Challenge-2:
   function oddOrEven(num){
       if(num % 2 == 0){
           return true;
       }else{
           return false;
       }
   }

   let myNum = 3805;
   let isEven = oddOrEven(myNum);
   console.log(isEven);

   //Challenge-3:
   function hourToMinute(num){
       let convertion = num * 60;
       return convertion;
   }

   let myHour = 50;
   let inMinute = hourToMinute(myHour);
   console.log("Hour is in minute: ", inMinute);
