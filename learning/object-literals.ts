let firstname = "Gurunath";
let lastname = "Sankar";

let person = {
    firstname,
    lastname
}

const displayName = () => {
    return person.firstname + " " + person.lastname
}

console.log(person.firstname);
console.log(person.lastname);
console.log(displayName());