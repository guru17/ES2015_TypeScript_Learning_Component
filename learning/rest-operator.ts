let displayColors = function(message, ...colors) {
        console.log(message);
    for(let index in colors){
        console.log(colors[index]);
    }
};

let message = "List of colors";
displayColors(message, 'Red');
displayColors(message, 'Red', 'Blue');
displayColors(message, 'Red', 'Blue', 'Green');
