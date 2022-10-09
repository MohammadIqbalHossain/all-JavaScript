const products = [
    {name: 'sam phone', price: 20000},
    {name: 'iphone', price: 80000},
    {name: 'Lenovo laptop', price: 55000},
    {name: 'sam laptop', price: 20200},
    {name: 'Walton phone', price: 35000},
    {name: 'dell laptop', price: 23000},
    {name: 'dell watch', price: 7000},
    {name: 'iphone smart watch', price: 10000}
]

function searching(products, searchText){
    const result = [];
    for(const product of products){
        if(product.name.includes(searchText)){
           result.push(product);
        }
    }
    return result
}

let myProduct = searching(products, 'phone');
console.log(myProduct);