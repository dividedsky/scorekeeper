class AtBat {
  constructor(pitcher, batter) {
    this.pitcher = pitcher;
    this.batter = batter;
    this.strikes = 0;
    this.balls = 0;
  }

  strike() {
    this.strikes += 1;
    if (this.strikes === 3) {
      this.strikeout();
      return `${this.pitcher.name} strikes out ${this.batter.name}`;
    }
  }

  ball() {
    this.balls += 1;
    if (this.balls === 4) {
      return `${this.pitcher.name} walks ${this.batter.name}`;
    }
  }

  this.strikeout() {
    this.pitcher.strikeouts += 1;
    this.pitcher.inningsPitches[1]++;

    this.batter.atBats++;
    this.batter.strikeouts++;
  }

  this.walk() {
    this.pitcher.bbAllowed++;

    this.batter.bbs++;
  }
}
