//definig the products price from an array object.

let products = [
    {name: 'Ipad air', price: 10, quantity: 1},
    {name: 'Pi phone', price: 20, quantity: 2},
    {name: 'macbook pro', price: 15, quantity: 1},
    {name: 'Mackbook air', price: 16, quantity: 2}
]

let totalPrice = 0
for(const product of products){
    priceWithQty = product.price * product.quantity;
    totalPrice = totalPrice + priceWithQty;
}

console.log(totalPrice);