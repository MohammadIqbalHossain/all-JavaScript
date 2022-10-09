//geting the chepest phone from array of object.
let phones = [
    {name: 'samsung s5', price: 25000, model: 37},
    {name: 'oppo o3', price: 10000, model: 53},
    {name: 'nokia n5', price: 20000, model: 2},
    {name: 'xaomi x', price: 25000, model: 1},
    {name: 'iphone x', price: 100000, model: 3}
 ];


     let chepest = phones[0]
     for(const phone of phones){
         if(phone.price < chepest.price){
            chepest = phone
         }
     }
    
 console.log(chepest);