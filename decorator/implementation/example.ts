abstract class Beverage {
  public cost(): number {
    return 5;
  }
}

class Espresso implements Beverage {
  public cost(): number {
    return 1;
  }
}

// DECORATORS
abstract class AddOnDecorator implements Beverage {
  public cost(): number {
    return 5;
    // console.log(this);
  }
}

class Caramel implements AddOnDecorator {
  Beverage: Beverage;

  public constructor(b: Beverage) {
    this.Beverage = b;
  }

  public cost(): number {
    return this.Beverage.cost() + 2;
  }
}

let coffee = new Caramel(new Espresso());
let cost = coffee.cost();
