/*
Following:
https://www.youtube.com/watch?v=13nftsQUUE0&list=PLrhzvIcii6GNCgHSj44-gXZeTUVbSPC-3






*/
setTimeout(main); // Run the programn
function main() {
    var duck = new WildDuck(new WalkBehaviourD(), new FlyBehaviourA());
    console.log(duck.fly());
    console.log(duck.walk());
}
var FlyBehaviourA = /** @class */ (function () {
    function FlyBehaviourA() {
    }
    FlyBehaviourA.prototype.fly = function () {
        return "A";
    };
    return FlyBehaviourA;
}());
var WalkBehaviourD = /** @class */ (function () {
    function WalkBehaviourD() {
    }
    WalkBehaviourD.prototype.walk = function () {
        return "D";
    };
    return WalkBehaviourD;
}());
var WildDuck = /** @class */ (function () {
    function WildDuck(walkB, flyB) {
        this.walkBehaviour = walkB;
        this.flyBehaviour = flyB;
    }
    WildDuck.prototype.fly = function () {
        return this.flyBehaviour.fly();
    };
    WildDuck.prototype.walk = function () {
        return this.walkBehaviour.walk();
    };
    return WildDuck;
}());
var CityDuck = /** @class */ (function () {
    function CityDuck() {
    }
    CityDuck.prototype.fly = function () {
        return "City duck flying";
    };
    CityDuck.prototype.walk = function () {
        return "City Walking";
    };
    return CityDuck;
}());
var MountainDuck = /** @class */ (function () {
    function MountainDuck() {
    }
    MountainDuck.prototype.fly = function () {
        return "Mountain duck flying";
    };
    MountainDuck.prototype.walk = function () {
        return "Mountain walking";
    };
    return MountainDuck;
}());
var CloudDuck = /** @class */ (function () {
    function CloudDuck() {
    }
    CloudDuck.prototype.fly = function () {
        return "CloudDuck duck flying";
    };
    CloudDuck.prototype.walk = function () {
        return "No walking ";
    };
    return CloudDuck;
}());
