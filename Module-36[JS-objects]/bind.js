const manDetails = {
    name: 'RJ rehaan',
    money: 4000,
    profession: "Radio jokey",
    isJobGood: true,
    getTreat: function(expense, tip){
        const trit = this.money - expense - tip;
        return trit;
    }

}

const womenDetails = {
    name: 'RJ sarmin',
    money: 4000,
    profession: "Radio jokey",
    isJobGood: true,
}

const UsingSameMethod = manDetails.getTreat.bind(womenDetails);
const expense = UsingSameMethod(3000, 200);
UsingSameMethod(200, 10);
console.log(expense);