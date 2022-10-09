const wtrites = [
    {name: 'Jibanandha', book: 20, poem: 30, drama: 10},
    {name: 'Humayun ahmed', book: 240, natok: 30, chotonatok: 140},
    {name: 'Nazrul', book: 20, poem: 330, drama: 10},
    {name: 'Rabindra', book: 2410, poem: 3014, drama: 10},
    {name: 'Jasumudding', book: 24, poem: 30421, drama: 110},
]

const writing = wtrites.map(w => w.name);
// console.log(writing);
wtrites.map(w => console.log(w))

wtrites.forEach(w => console.log(w.book))