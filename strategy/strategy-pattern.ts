/*
Following:
https://www.youtube.com/watch?v=13nftsQUUE0&list=PLrhzvIcii6GNCgHSj44-gXZeTUVbSPC-3






*/

setTimeout(main); // Run the programn

function main(): void {
  let duck: Duck = new WildDuck(new WalkBehaviourD(), new FlyBehaviourA());

  console.log(duck.fly());
  console.log(duck.walk());
}

interface Duck {
  fly(): string;
  walk(): string;
}

interface WalkBehaviour {
  walk(): string;
}

interface FlyBehaviour {
  fly(): string;
}

class FlyBehaviourA implements FlyBehaviour {
  fly(): string {
    return "A";
  }
}

class WalkBehaviourD implements WalkBehaviour {
  walk(): string {
    return "D";
  }
}

class WildDuck implements Duck {
  walkBehaviour: WalkBehaviour;
  flyBehaviour: FlyBehaviour;

  constructor(walkB: WalkBehaviour, flyB: FlyBehaviour) {
    this.walkBehaviour = walkB;
    this.flyBehaviour = flyB;
  }

  public fly(): string {
    return this.flyBehaviour.fly();
  }

  public walk(): string {
    return this.walkBehaviour.walk();
  }
}

class CityDuck implements Duck {
  public fly(): string {
    return "City duck flying";
  }

  public walk(): string {
    return "City Walking";
  }
}

class MountainDuck implements Duck {
  public fly(): string {
    return "Mountain duck flying";
  }

  public walk(): string {
    return "Mountain walking";
  }
}

class CloudDuck implements Duck {
  public fly(): string {
    return "CloudDuck duck flying";
  }

  public walk(): string {
    return "No walking ";
  }
}
