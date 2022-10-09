
const manDetails = {
    name: 'RJ rehaan',
    money: 4000,
    profession: "Radio jokey",
    isJobGood: true,
    getTreat: function(expense, tip){
        const trit = this.money - expense - tip
        return trit;
    }

}

const rehaanTreat = manDetails.getTreat(1000, 1000)
console.log(rehaanTreat);