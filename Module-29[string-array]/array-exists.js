function isExists(friends){
    if(!Array.isArray(friends)){
        return 'please enter an array';
    }
    else{
        let bigFirend = [0];
        for(const friend of friends){
           if(friend.length > bigFirend.length){
               bigFirend = friend
           }
        }
        return bigFirend
    }
}

const myBuddy = ['habkf', 'ihfi', 'uggket', 'hgpDKwf'];
// console.log(isExists(5678));

const friendName = ['Abir', 'korim', 'sabir', 'shabib'];

if(friendName.indexOf('Abir') != -1){
    // console.log('he is here!')
}

if(friendName.includes('korim')){
    console.log('Present sir');
}

const str1 = [2, 5, 62];
const str2 = [235, 2, 63,];
const stringCon = str2.concat(str1);
console.log(stringCon);

const array = ["121", "12", "1", "112", "111"];

console.log(array.sort());