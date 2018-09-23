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
    this.team = attributes.team;
    this.position = attributes.position;
    this.number = attributes.number;
    this.cg = {};
  }
}

class Pitcher extends Player {
  constructor(attributes) {
    super(attributes);
    this.inningsPitched = attributes.inningsPitched;
    this.wins = attributes.wins;
    this.losses = attributes.losses;
    this.earnedRuns = attributes.earnedRuns;
    this.games = attributes.games;
    this.gamesStarted = attributes.gamesStarted;
    this.hitsAllowed = attributes.hitsAllowed;
    this.runsAllowed = attributes.runsAllowed;
    this.hrAllowed = attributes.hrAllowed;
    this.bbAllowed = attributes.bbAllowed;
    this.strikeouts = attributes.strikeouts;
    this.hbp = attributes.hbp;
  }

  // getters
  get record() {
    return `${this.wins}-${this.losses}`;
  }

  get era() {
    // to convert baseball decimal: Math.floor(inningsPitches) + (thirds % 1)
    return (9 * this.earnedRuns / this.inningsPitched).toFixed(2);
  }

  get whip() {
    return ((this.hitsAllowed + this.bbAllowed) / this.inningsPitched).toFixed(2);
  }
}

class Batter extends Player {
  constructor(attributes) {
    super(attributes);
    this.plateApps = attributes.plateApps;
    this.atBats = attributes.atBats;
    this.runs = attributes.runs;
    this.hits = attributes.hits;
    this.doubles = attributes.doubles;
    this.triples = attributes.triples;
    this.homeruns = attributes.homeruns;
    this.rbi = attributes.rbi;
    this.stolenBases = attributes.stolenBases;
    this.caughtStealing = attributes.caughtStealing;
    this.bbs = attributes.bbs;
    this.hbp = attributes.hbp;
    this.bStrikeouts = attributes.bStrikeouts;
  }

  // getters
  get avg() {
    return (this.hits / this.atBats).toFixed(3).slice(1);
  }

  get obp() {
    return ((this.hits + this.bbs + this.hbp) / this.plateApps).toFixed(3).slice(1);
  }
}

// test objects
const cora = new Person({
  firstName: 'Alex',
  lastName: 'Cora',
  age: 42,
});

const sale = new Pitcher({
  firstName: 'Chris',
  lastName: 'Sale',
  age: 29,
  position: 'SP',
  team: 'Boston Red Sox',
  inningsPitched: 153.1,
  wins: 12,
  losses: 4,
  earnedRuns: 34,
  games: 26,
  gamesStarted: 26,
  hitsAllowed: 98,
  runsAllowed: 36,
  hrAllowed: 11,
  bbAllowed: 33,
  strikeouts: 229,
  hbp: 12,
  whip: 1.029,
});

const mookie = new Batter({
  firstName: 'Mookie',
  lastName: 'Betts',
  age: 25,
  position: 'RF',
  team: 'Boston Red Sox',
  plateApps: 593,
  atBats: 502,
  runs: 121,
  hits: 170,
  doubles: 44,
  triples: 5,
  homeruns: 30,
  rbi: 77,
  stolenBases: 28,
  caughtStealing: 6,
  bbs: 78,
  hbp: 8,
  bStrikeouts: 86,
});



