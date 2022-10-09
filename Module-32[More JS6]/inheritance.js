
class TeamWork{
    name;
    address;
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}



class Support extends TeamWork{
    timeForWork;
    constructor(name, address, work){
        super(name, address )
        this.timeForWork = work;
    }

    takeSession(){
        console.log(`plaese ${this.name} start a sesion for helping students.`)
    }
}

const outSupport = new Support('Abir', 'singapore', 'Call the boss');
outSupport.takeSession();
console.log(outSupport);

class NeptuneRelease {
    name;
    address;
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    release(version){
        console.log(`please release the version of neptune ${version}`)
    }

}

// const thisVersion = new NeptuneRelease('Mr khan', 'Bangladesh');
// thisVersion.release('1.5.6');
// console.log(thisVersion);


class sessionSupport{
    name;
    address;
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    release(students){
        console.log(`please take a Indivitual session for  ${students}`);
    }
   
}
// const thisSession = new sessionSupport('Chowdhury', 'Bangladesh');
// thisSession.release('Wekest students');
// console.log(thisSession);