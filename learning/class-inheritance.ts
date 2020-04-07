class User {
    constructor(fname, lname, gender, age){
        this.fname = fname;
        this.lname = lname;
        this.gender = gender;
        this.age = age;
    }

    displayName() {
         console.log(`Hello ${this.fname}!`);
    }
}

class People extends User {
    constructor(fname, lname, gender, age){
        super(fname, lname, gender, age);
    }
    displayName(){
        console.log(`Hello ${this.fname} ${this.lname}!`);
        super.displayName();
    }
}

let p = new People('Gurunath','Sankar', 'Male', 31);
p.displayName();