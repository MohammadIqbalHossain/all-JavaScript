// Parameter is a variable.
function singara(taka) {
    console.log(`"Bhaiya gave ${taka} for singara.",`)
    var singaraPrice = 5;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}

var haveSingara = singara(90);
console.log("singara I have", haveSingara);


