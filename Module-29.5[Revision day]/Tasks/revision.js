
const books  = [
    'Learn python with iqbal',
    'leart JavaScript wuth sajid',
    'leatn Cotran with Budda',
    'learn JavaScript with Iqbal',
    'Book of JavaScript',
    'C++ A-Z',
    'Advnced JavaScript'
]

let Mysearch = 'javascript'

let jsBooks = [];
for(const book of books){
    if(book.toLowerCase().includes(Mysearch.toLowerCase())){
        jsBooks += book;
    }
   
}
console.log(jsBooks);


const numsArr = [12, 347, 12, 23, 9, 95, 4, 56, 5, 6, 77];
const sortedArr = numsArr.sort(function(a, b){
    return a - b;
})

console.log(sortedArr);