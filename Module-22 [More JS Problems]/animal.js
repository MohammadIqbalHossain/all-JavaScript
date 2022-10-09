
// function animalCount(miles){
//     const animalDensityFirst10Miles = 10;
//     const animalDensitySecond10Miles = 50;
//     const animalDensityRestmiles = 100;
//     if (miles <= 10){
//         const firstDenseAnimal = miles * animalDensityFirst10Miles;
//         return firstDenseAnimal;
//     }
//     else if (miles <= 20){
//         const firstDenseAnimal = 10 * animalDensityFirst10Miles;
//         const restMiles = miles - 10;
//         const secondDenseAnimal = restMiles * animalDensitySecond10Miles
//         const totalAnimal = firstDenseAnimal + secondDenseAnimal;
//         return totalAnimal;
        
//     }
//     else {
//         const firstDenseAnimal= 10 * animalDensityFirst10Miles;
//         const secondDenseAnimal = 10 * animalDensitySecond10Miles
//         const resttMiles = miles - 20;
//         const restDenseAnimal = resttMiles * animalDensityRestmiles;
//         const totalAnimal = firstDenseAnimal + secondDenseAnimal + restDenseAnimal;
//         return totalAnimal; 
       
//     }
// }

// let myMiles = 22
// let animalDensity = animalCount(myMiles)
// console.log(animalDensity);




function animalDesnsity(miles){
     const tenMiles = 10;
     const tenmiles2 = 50;
     const restmiles3 = 100;

     if(miles <= 10){
         const firstDensity = miles * tenMiles;
         return firstDensity;  
     }
     else if (miles <= 20){
        const firstDensity = 10 * tenMiles;
        const restmiles  = miles - 10;
        const secondDensity = restmiles * tenmiles2;
        const totalAnimal = firstDensity + secondDensity;
        return totalAnimal;

     }
     else {
        const firstDensity = 10 * tenMiles;
        const secondDensity = 10 * tenmiles2;
        const restmiles = miles - 20;
        const RestDensity = restmiles * restmiles3;
        const totalAllAnimal = firstDensity + secondDensity + RestDensity;
        return totalAllAnimal;
        

     }
}

let myAnimals = 22;
let densityOfAnimal = animalDesnsity(myAnimals);
console.log(densityOfAnimal);