const products = [
    {name: 'sam phone', price: 20000},
    {name: 'iphone', price: 80000},
    {name: 'Lenovo laptop', price: 55000},
    {name: 'sam laptop', price: 20200},
    {name: 'Walton phone', price: 5000},
    {name: 'dell laptop', price: 23000},
    {name: 'dell watch', price: 7000},
    {name: 'iphone smart watch', price: 10000}
]

// function comparePrice(products, priceRange){
//     for(const product of products){
//         if(product.price < priceRange){
//             console.log(product)
//             break;
//         }
//     }

// }

// let found = comparePrice(products, 10000);
// console.log(found);

// for(const product of products){
//     if(product.price < 10000){
//         break;
//     }
//     console.log(product);
// }

for(const product of products){
        if(product.price < 10000){
            continue;
        }
        console.log(product);
    }

let num =  parseInt('2.7');
console.log(num);

// function compare(a, b) {
//     if (a == b) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   const result = compare(15, "15");
//   console.log(result);

function compare(a, b) {
    if (a.toString() === b) {
     return true;
    } else {
     return false;
    }
   }
   
   const result = compare(25, 25);
   console.log(result);
   
   console.log("123" + 123);

   let a='hi'
let b='there'
console.log(a+b)




const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);
}

