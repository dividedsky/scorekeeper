class AtBat {
  constructor(pitcher, batter) {
    this.pitcher = pitcher;
    this.batter = batter;
    this.strikes = 0;
    this.balls = 0;

    const strikeButton = document.querySelector('.strike-button');
    const ballButton = document.querySelector('.ball-button');
    strikeButton.addEventListener('click', this.strike);
    ballButton.addEventListener('click', this.ball);
  }

  strike() {
    this.strikes += 1;
    if (this.strikes === 3) {
      this.strikeout();
    }
  }

  ball() {
    this.balls += 1;
    if (this.balls === 4) {
      this.walk();
    }
  }

  strikeout() {
    this.pitcher.strikeouts += 1;
    this.pitcher.inningsPitched[1]++;

    this.batter.atBats++;
    this.batter.strikeouts++;
    return `${this.pitcher.name} strikes out ${this.batter.name}`;
  }

  walk() {
    this.pitcher.bbAllowed++;
    this.batter.bbs++;
    return `${this.pitcher.name} walks ${this.batter.name}`;
  }

  hit(bases) {
    this.picher.hitsAllowed++;
    this.batter.hits++;

    if (bases === 4) {
      this.pitcher.hrAllowed++;
      this.batter.homeruns++;
    }

    if (bases === 3) {
      this.batter.triples++
    }

    if (bases === 2) {
      this.batter.doubles++;
    }

    // here call function to move runners on basepaths
    console.log(`${this.batter} hits for ${bases} bases`);
  }

  updateScoreboard() {
    const strikeDisplay = document.querySelector('.strikes-display');
    const ballDisplay = document.querySelector('.balls-display');
    const outsDisplay = document.querySelector('.outs-display');

    strikeDisplay.innerText = this.strikes;
    ballDisplay.innerText = this.balls;
    outsDisplay.innerText = this.outs;
  }
}

// function to display balls and strikes

a = new AtBat(sale, mookie);