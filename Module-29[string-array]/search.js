//indexOf

const products = [
    'Mohammad sabir khan',
    'Khalid Farhan',
    'Jhankar Mahbub',
    'Abir Mahbub',
    'Enayed Ahmed',
    'Sadman sadik',
    'Ayman sadik'
]

const searching = 'mahBUB';

let output = [];
for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) !== -1) {
        // output.push(product);
    }
}
// console.log(output);

//Includes 
let includesOutput = [];
for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        includesOutput.push(product)
    }
}
// console.log(includesOutput);


//StartsWith
const starName = [];
for(const name of products){
    if(name.toLowerCase().startsWith(searching.toLowerCase())){
        starName.push(name)
    }
}
console.log(starName);

//endsWith 
const nameEnd = [];
for(const name of products){
    if(name.toLowerCase().endsWith(searching.toLowerCase())){
        nameEnd.push(name);
    }
}
console.log(nameEnd);