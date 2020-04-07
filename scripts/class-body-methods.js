var PersonDetails = /** @class */ (function () {
    function PersonDetails(pname) {
        this.pname = pname;
        console.log("Hello " + this.pname + "!");
    }
    PersonDetails.staticMethod = function () {
        console.log("Hello Guru! Static method()");
    };
    PersonDetails.prototype.greetMethod = function () {
        console.log("Hello " + this.pname + "! greet method");
    };
    return PersonDetails;
}());
var p = new PersonDetails('Guru');
PersonDetails.staticMethod();
p.greetMethod();
//# sourceMappingURL=class-body-methods.js.map