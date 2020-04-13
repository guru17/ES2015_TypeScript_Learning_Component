var mySets = Object.create(null);
mySets.id = 1;
if (mySets.id) {
    console.log("id exists");
}
mySets.id = true;
if (mySets.id) {
    console.log("id exists");
}
mySets.id = 0;
if (mySets.id) {
    console.log("id exists");
}
else {
    console.log("id not exists");
}
var myMaps = Object.create(null);
myMaps.name = "Guru";
var val = myMaps.name;
console.log(val);
myMaps[100] = "Hundred";
console.log(myMaps["100"]);
var obj1 = {};
var obj2 = {};
myMaps[obj1] = "Hello world";
console.log(myMaps[obj1]);
console.log(myMaps[obj2]);
//# sourceMappingURL=Sets.js.map