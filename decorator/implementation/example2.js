var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SimplePerson = /** @class */ (function () {
    function SimplePerson() {
    }
    SimplePerson.prototype.identify = function () {
        console.log(this.name + " age " + this.age);
    };
    return SimplePerson;
}());
var PersonDecorator = /** @class */ (function () {
    function PersonDecorator(person) {
        this.decoratedPerson = person;
    }
    Object.defineProperty(PersonDecorator.prototype, "name", {
        get: function () {
            return this.decoratedPerson.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonDecorator.prototype, "age", {
        get: function () {
            return this.decoratedPerson.age;
        },
        enumerable: true,
        configurable: true
    });
    PersonDecorator.prototype.identify = function () {
        return this.decoratedPerson.identify();
    };
    return PersonDecorator;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.logParents = function () {
        console.log("Parents:");
        this.Mother.identify();
        this.Father.identify();
    };
    return Child;
}(PersonDecorator));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.logSchool = function () {
        console.log(this.school);
    };
    return Student;
}(PersonDecorator));
var Dad = new SimplePerson();
Dad.name = "Brad";
Dad.age = 32;
var Mom = new SimplePerson();
Mom = new Student(Mom);
Mom.name = "Janet";
Mom.age = 34;
Mom.school = "College of Night School Moms";
var Johnny = new SimplePerson();
Johnny = new Child(Johnny);
Johnny = new Student(Johnny);
Johnny.name = "Johnny";
Johnny.age = 12;
Johnny.Mother = Mom;
Johnny.Father = Dad;
Johnny.school = "School for kids who can't read good";
