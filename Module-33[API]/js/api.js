
const obj = {
    name: 'Chowdhury mosarrof',
    id: 13,
    job: 'Actor',
    films: {
        filmName: 'valobasha',
        filmName: 'alovasha',
        filmName: 'Moner manush',
        filmName: 'khan saheb',
    },
    netGross:[123, 34, 45, 123,]
}

console.log(obj);
const stringified = JSON.stringify(obj);
console.log(stringified);

const convert = JSON.parse(stringified);
console.log(convert)


const man = { name: "James", roll: 3 }
const stuInfo = JSON.stringify(man); 

console.log(stuInfo.name); 

const info={ data: [ { language:"Javascript", library:"React" } ] }  

console.log(info.data[0].library)


  
  