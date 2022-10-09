//Geting erroe with try catch.

const myName = 'ami';

try{
    myName = 'tumi';
}catch(error){
  console.log(error)
}

console.log(myName);