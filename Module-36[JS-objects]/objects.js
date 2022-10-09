const student = {
    name: 'Abdullah',
    id: 2424,
    roll: 23,
    major: 'Physics',
    minor: ['math 101', 'bnagla', 'chemistry', 'economics']
}

const objKey = Object.keys(student);
// console.log(objKey)

const objValue = Object.values(student);
// console.log(objValue);

const pairValueKey = Object.entries(student);
// console.log(pairValueKey); 

Object.freeze(student);
// Object.seal(student);
student.id = 2352;
student.collage = 'IIT'
const removeProp = delete student.major;
console.log(student);