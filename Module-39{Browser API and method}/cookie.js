

// function cookies(){
//     const cookies = document.cookie.split('; ');
//     const findCookie = cookies.find(c => c.includes('lx'));
//     console.log(findCookie);{
      
//         const getNameValue = findCookie.split('=');
//         const value = getNameValue[1]
//     }
// }


const student = {
    name: 'jolil', friend: 'borsha', job: 'business',

    createMovie: function () {
        console.log(this.job)
    }
}

student.createMovie();