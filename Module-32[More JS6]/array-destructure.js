
const fishPrice = [120, 244, 56, 64, 64, 734];

const [elish, magur, poti, telapia] = fishPrice;
// console.log(elish, magur, poti);

//chaining
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
console.log(obj.favFood?.peiceOfFood?.alo);
