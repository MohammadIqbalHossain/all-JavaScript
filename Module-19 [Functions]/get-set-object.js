//Declaring a obejct
var person = {
    name: "Jibananadha das",
    professon: "kobi",
    Books: 5,
    poetry: 1000,
    lifetime: '1920 - 1290'
}

// step-1: get a value with Dot notation
var occupation = person.professon;
console.log(person);
console.log(occupation);

//step-2: getting a value with bracket [] notation
var poems = person['poetry'];
console.log(poems);

//step-3: get the value when key is in a variable.
var writtenBooks = 'Books'
var booksCount = person[writtenBooks];
console.log(booksCount); 

// set the value.

// step-1: with dot notation.
var personName = person.name;
personName = "Kobi jibanandha das"
console.log(personName);

//step-2: with bracket notation also having value in a vriable. 
var livingTime = person['lifetime'];
var personLife = person[livingTime];
personLife = "He was a grat poet."
console.log(personLife);


function getReminder(number1, number2) {
    number1 % number2;
  }
  
  const reminder = getReminder(12, 2);
  
  console.log(reminder);
  
  function addNumber(number1, number2) {
    return "Result is " + number1 + number2;
   }
   
   var result = addNumber(5, 4);
   var some = typeof(result);
   console.log(some)