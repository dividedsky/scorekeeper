class Person {
  constructor(attributes) {
    this.firstName = attributes.firstName;
    this.lastName = attributes.lastName;
    this.age = attributes.age;
  }

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }

  greeting() {
    return `Hello, I'm ${this.name}. I'm ${this.age} years old.`;
  }
}

class Player extends Person {
  constructor(attributes) {
    super(attributes);
    this._team = attributes.team;
    this.position = attributes.position;
    this.number = attributes.number;
  }
}

class Pitcher extends Player {
  constructor(attributes) {
    super(attributes);
    this.inningsPitched = attributes.inningsPitched;
    this.wins = attributes.wins;
    this.losses = attributes.losses;
    this.earnedRuns = attributes.earnedRuns;
  }

  get record() {
    return `${this.wins}-${this.losses}`;
  }

  get era() {
    return 9 * this.earnedRuns / this.inningsPitched;
  }
}

// test objects
const cora = new Person({
  firstName: "Alex",
  lastName: "Cora",
  age: 42
});

const sale = new Pitcher({
  firstName: "Chris",
  lastName: "Sale",
  age: 29,
  position: "SP",
  team: "Boston Red Sox",
  inningsPitched: 153.1,
  wins: 12,
  losses: 4,
  earnedRuns: 34,
});

cora.greeting();
sale.greeting();
