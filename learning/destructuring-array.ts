let employee = ["Gurunath", "Sankar", "Male", 31];
let [fname, lname, gender, age] = employee;
let [ftname, ...others] = employee;
console.log(fname);
console.log(lname);
console.log(gender);
console.log(age);
console.log(ftname);
console.log(others);