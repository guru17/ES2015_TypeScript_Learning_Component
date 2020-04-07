var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(fname, lname, gender, age) {
        this.fname = fname;
        this.lname = lname;
        this.gender = gender;
        this.age = age;
    }
    User.prototype.displayName = function () {
        console.log("Hello " + this.fname + "!");
    };
    return User;
}());
var People = /** @class */ (function (_super) {
    __extends(People, _super);
    function People(fname, lname, gender, age) {
        return _super.call(this, fname, lname, gender, age) || this;
    }
    People.prototype.displayName = function () {
        console.log("Hello " + this.fname + " " + this.lname + "!");
        _super.prototype.displayName.call(this);
    };
    return People;
}(User));
var p = new People('Gurunath', 'Sankar', 'Male', 31);
p.displayName();
//# sourceMappingURL=class-inheritance.js.map