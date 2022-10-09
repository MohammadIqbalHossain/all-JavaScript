
const name = ['Abir', 'korim', 'sabir', 'phabib'];
const nameSorted = name.sort().reverse();
console.log(nameSorted);


//functional sorting

const randomNum = [1,2,5, 3, 2, 4, 2, 6]
const sortNum = randomNum.sort();
// console.log(sortNum);

const numbers = [435, 2, 63,]
const sortedNum = numbers.sort(function(x, y){
    return x - y;
});
console.log(sortedNum);

