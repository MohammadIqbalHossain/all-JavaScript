
const obj = {
    person:'Labib', 
    profession:'Developer',
    id: 243, 
    favFood: {
        soap: 'daal',
        brad: 'bun',
        price: 300,
        peiceOfFood: {
            saak: 10,
            begun: 30,
            meat: 400
        }
    }
}

const {meat, saak, brad} = obj.favFood.peiceOfFood;
console.log(meat, saak);

// console.log(obj.favFood.brad);