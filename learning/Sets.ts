let mySets = Object.create(null);
mySets.id = 1;
if(mySets.id){
    console.log("id exists");
}
mySets.id = true;
if(mySets.id){
    console.log("id exists");
}
mySets.id = 0;
if(mySets.id){
    console.log("id exists");
}
else{
    console.log("id not exists");
}

let myMaps = Object.create(null);
myMaps.name = "Guru";
let val = myMaps.name;
console.log(val);

myMaps[100]="Hundred";
console.log(myMaps["100"]);

let obj1 = {}
let obj2 = {}

myMaps[obj1] = "Hello world";
console.log(myMaps[obj1]);
console.log(myMaps[obj2]);
