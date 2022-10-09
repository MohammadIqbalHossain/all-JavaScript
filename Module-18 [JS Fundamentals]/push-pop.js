//Pushing or adding an elment in an array last index.

var moenyByPerson = [200, 599, 29, 8, 75, 24, 74];
moenyByPerson.push(600);
moenyByPerson.push("abdullah");
// console.log(moenyByPerson);

//Poping or removing last element from the array.

var writterName = ["Jibanandha", "Bonkimchandra", "nazrul", "Rabindranat", "IshorChandra Bidya sagar"];

writterName.pop();
writterName.push("Manik Bandhopadhay"); //Practicing push.
console.log(writterName);

//Giving a selter to poped or kicked item.
var lastwritter = writterName.pop();
console.log(lastwritter);


//Removing an element from the beginnig of an array.
var booksName = ["The art of thinking clearly", "Men search for meanning", "Amader chitijog kow jhik jhik"];

booksName.shift();
console.log(booksName);

//adding an element in the beginnig of an array;
booksName.unshift("Devdas");
console.log(booksName);