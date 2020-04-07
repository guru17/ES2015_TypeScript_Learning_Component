class PersonDetails {
    constructor(pname) {
        this.pname = pname;
        console.log(`Hello ${this.pname}!`);
    }

    static staticMethod() {
        console.log("Hello Guru! Static method()")
    }
    greetMethod() {
        console.log(`Hello ${this.pname}! greet method`);
    }
}

let p = new PersonDetails('Guru');
PersonDetails.staticMethod();
p.greetMethod();