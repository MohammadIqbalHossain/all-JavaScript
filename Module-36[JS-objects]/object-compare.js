

// b = a

console.log(JSON.stringify(a))
console.log(JSON.stringify(b))
if(JSON.stringify(a) === JSON.stringify(b)){
    console.log('Matched')
}
else{
    console.log('Did not matched')
};

function compare(obj1, obj2){
    if(Object.keys(obj1).length === Object.keys(obj2).length){
        console.log('they are matched')
    }

    for(const prop in obj1){
        if(obj1[prop] == obj2[prop]){
            console.log('this is matched')
        }
    }
}

let a = {name: "Iqbal", id: 300}
let b = {id: 300, name: "Iqbal"}

compare(a, b)