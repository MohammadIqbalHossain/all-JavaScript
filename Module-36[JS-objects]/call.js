const manDetails = {
    name: 'RJ rehaan',
    money: 4000,
    profession: "Radio jokey",
    isJobGood: true,
    getTreat: function(expense, tip){
        const trit = this.money - expense - tip;
        // return trit;
        console.log(trit)
    }

}

const womenDetails = {
    name: 'RJ sarmin',
    money: 4000,
    profession: "Radio jokey",
    isJobGood: true,
}

// manDetails.getTreat.call(womenDetails,  300, 200);
// manDetails.getTreat.call(womenDetails,  300, 200);

manDetails.getTreat.apply(womenDetails, [300, 200])