//Making a function for the carpenter!
function woodCalculation(woodPerBed, woodPerChair, woodPerTable){
    const bedQuantity = 50;
    const chairQuantity = 10;
    const  tableQuantity = 1;
    
    const bedCount = bedQuantity * woodPerBed;
    const chairCount = chairQuantity * woodPerChair;
    const tableCount = tableQuantity * woodPerTable;

    const totalWood = bedCount + chairCount + tableCount;
    return totalWood;
}

let myFurniture = woodCalculation(1, 2, 1)
console.log(myFurniture);