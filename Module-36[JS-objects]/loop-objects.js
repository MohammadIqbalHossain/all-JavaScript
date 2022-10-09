const student = {
    name: 'Abdullah',
    id: 2424,
    roll: 23,
    major: 'Physics',
    minor: ['math 101', 'bnagla', 'chemistry', 'economics']
}

for(const prop in student){
    // console.log(prop,  student[prop])  //didn't undestood 
}

const objKeys = Object.keys(student);
for(const prop of objKeys){
    // console.log(prop, student[prop])
}

for(const [prop, value] of Object.entries(student)){
    console.log(prop, value);
}