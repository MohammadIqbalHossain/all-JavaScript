
// Converting celcius into fahrenheit. 1c= 1.8deg fahrenheit.
function celciusInfahrenheit(degree){
    var celcius = degree *  1.8 + 32;
    return celcius
}
let myCelcius = -30;
let inFahrenheith = celciusInfahrenheit(myCelcius);
console.log("You'r temperature is in fahrenheith degree: ", inFahrenheith);


//Converting fahrenheith into celcius.
function fahrenheitInCelcius(degree){
    let inCelcius =  degree - 32; //(32°F − 32) × 5/9 = 0°C
    inCelcius * 1.8;
    return inCelcius
}
let myFahrenheith = fahrenheitInCelcius(32);
console.log("You'r temperature is in celcius degree: ", myFahrenheith);


