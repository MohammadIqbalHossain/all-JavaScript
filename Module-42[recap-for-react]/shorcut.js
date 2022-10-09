let money = 34;
const check = money ? 'falida' : 'ban';

let isActive = true;
const sowData = () => console.log('Data is true');
const hideData = () => console.log('Data is false');
isActive ? sowData() : hideData();
// checks if isActive is true
isActive && sowData();
console.log(isActive);
//checks if isActive is false
isActive || hideData();
console.log(isActive);

//toggle isAcive 
isActive = !isActive;

