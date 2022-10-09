
//Calculating a student grade.

function studentGrade(marks){
   
    if(marks >= 80 && marks < 100){
        console.log("You've got A+");
    }else if(marks >= 60 && marks <= 80){
        console.log("You've got A")
    }else if (marks >= 40 && marks <= 60){
        console.log("You've got A-")
    }else if(marks >= 33 && marks <= 40){
        console.log("You've got c")
    }else{
        console.log("You're failed");
    }
    return marks
}

console.log(studentGrade(40));