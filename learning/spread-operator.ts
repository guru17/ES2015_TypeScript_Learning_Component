let displayColor = (message, ...colors) => {
    console.log(message);
    for(let index in colors){
        console.log(colors[index]);
    }
}

let displayText = "list of colors";
let colorArray = ['Yellow', 'Orange', 'Voilet']
displayColor(displayText,...colorArray);