var displayColors = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    for (var index in colors) {
        console.log(colors[index]);
    }
};
displayColors('Red');
displayColors('Red', 'Blue');
//# sourceMappingURL=rest-operator.js.map