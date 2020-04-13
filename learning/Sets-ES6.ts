let mySets = new Set();
mySets.add("Guru");
mySets.add(1);
console.log(mySets.size);

mySets.add(1);
console.log(mySets.size);

let newSets = new Set().add("One").add("Two");
console.log(newSets.size);

console.log(newSets.has("One"));
console.log(newSets.delete("Two"));

let objSet = new Set([1,2,3,4,4,4,5])
console.log(objSet);
console.log(typeof objSet);
console.log(objSet.size);