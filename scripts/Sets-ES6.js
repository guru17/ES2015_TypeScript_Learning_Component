var mySets = new Set();
mySets.add("Guru");
mySets.add(1);
console.log(mySets.size);
mySets.add(1);
console.log(mySets.size);
var newSets = new Set().add("One").add("Two");
console.log(newSets.size);
console.log(newSets.has("One"));
console.log(newSets.delete("Two"));
//# sourceMappingURL=Sets-ES6.js.map