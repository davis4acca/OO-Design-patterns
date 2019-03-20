interface Person {
  name: string;
  age: number;
  identify(): void;
}

class SimplePerson implements Person {
  public name: string;
  public age: number;

  public identify() {
    console.log(`${this.name} age ${this.age}`);
  }
}

abstract class PersonDecorator implements Person {
  protected decoratedPerson: Person;

  public constructor(person: Person) {
    this.decoratedPerson = person;
  }

  public get name() {
    return this.decoratedPerson.name;
  }

  public get age() {
    return this.decoratedPerson.age;
  }

  identify(): void {
    return this.decoratedPerson.identify();
  }
}

class Child extends PersonDecorator {
  public Mother: Person;
  public Father: Person;

  public logParents() {
    console.log("Parents:");
    this.Mother.identify();
    this.Father.identify();
  }
}

class Student extends PersonDecorator {
  public school: string;

  public logSchool() {
    console.log(this.school);
  }
}

let Dad = new SimplePerson();
Dad.name = "Brad";
Dad.age = 32;

let Mom = new SimplePerson();
Mom = new Student(Mom);
Mom.name = "Janet";
Mom.age = 34;
(Mom as Student).school = "College of Night School Moms";

let Johnny = new SimplePerson();
Johnny = new Child(Johnny);
Johnny = new Student(Johnny);
Johnny.name = "Johnny";
Johnny.age = 12;
(Johnny as Child).Mother = Mom;
(Johnny as Child).Father = Dad;
(Johnny as Student).school = "School for kids who can't read good";
