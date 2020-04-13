export let greet = () => {
    console.log("this is greet function");
}

export class Employee {
    constructor() {
        console.log("this is constructor method");
    }

    greet() {
        console.log('this is greet function from employee class');
    }
}