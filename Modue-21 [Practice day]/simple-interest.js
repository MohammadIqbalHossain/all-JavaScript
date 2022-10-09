
// Calculating simple interest.
function simpleInterest(principle, percentage, duration){
    let SI = principle * percentage * duration;
    let interest = SI / 100;
    let ammount = interest + principle;
    return ammount;
}

let loan = simpleInterest(1000, 5, 1);
console.log("You'r total ammount with interest is: ",loan);
