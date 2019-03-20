var Beverage = /** @class */ (function () {
    function Beverage() {}
    Beverage.prototype.cost = function () {
        return 5;
    };
    return Beverage;
}());
var Espresso = /** @class */ (function () {
    function Espresso() {}
    Espresso.prototype.cost = function () {
        return 1;
    };
    return Espresso;
}());
// DECORATORS
var AddOnDecorator = /** @class */ (function () {
    function AddOnDecorator() {}
    AddOnDecorator.prototype.cost = function () {
        return 5;
        // console.log(this);
    };
    return AddOnDecorator;
}());
var Caramel = /** @class */ (function () {
    function Caramel(b) {
        this.Beverage = b;
    }
    Caramel.prototype.cost = function () {
        return this.Beverage.cost() + 2;
    };
    let x = Caramel
    return Caramel;
}());
var coffee = new Caramel(new Espresso());
var cost = coffee.cost();