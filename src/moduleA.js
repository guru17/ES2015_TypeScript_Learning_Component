import{fname, lname, obj} from './moduleB.js'
import{greet, Employee} from './moduleC.js'
obj.name = "Steve Jobs";
console.log(`First Name: ${fname} Last Name: ${lname}`);
console.log(`Apple CEO - ${obj.name}`);

greet();
let emp = new Employee();
emp.greet();