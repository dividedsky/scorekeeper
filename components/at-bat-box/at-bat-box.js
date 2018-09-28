/* global sale, mookie, document */
class AtBat {
  constructor(pitcher, batter, element) {
    this.element = element;
    this.pitcher = pitcher;
    this.batter = batter;
    this.strikes = 0;
    this.balls = 0;
    this.outs = 0;
    this.updateScoreboard();

    const strikeButton = this.element.querySelector('.strike-button');
    const ballButton = this.element.querySelector('.ball-button');
    strikeButton.addEventListener('click', event => this.strike(event));
    ballButton.addEventListener('click', event => this.ball(event));
  }

  strike(event) {
    this.strikes += 1;
    console.log(`${this.pitcher.name} throws a strike to ${this.batter.name}`);
    this.updateScoreboard();
    if (this.strikes === 3) {
      this.strikeout();
    }
  }

  ball() {
    this.balls += 1;
    console.log(`${this.batter.name} takes a ball from ${this.pitcher.name}`);
    this.updateScoreboard();
    if (this.balls === 4) {
      this.walk();
    }
  }

  strikeout() {
    console.log(`${this.pitcher.name} strikes out ${this.batter.name}`);
    this.outs++;
    this.pitcher.strikeouts += 1;
    this.pitcher.inningsPitched[1]++;
    this.resetCount();
    this.updateScoreboard();

    this.batter.atBats++;
    this.batter.strikeouts++;
    return `${this.pitcher.name} strikes out ${this.batter.name}`;
  }

  walk() {
    this.resetCount();
    this.updateScoreboard();
    this.pitcher.bbAllowed++;
    this.batter.bbs++;
    return `${this.pitcher.name} walks ${this.batter.name}`;
  }

  hit(bases) {
    this.picher.hitsAllowed++;
    this.batter.hits++;

    this.resetCount();
    this.updateScoreboard();
    if (bases === 4) {
      this.pitcher.hrAllowed++;
      this.batter.homeruns++;
    }

    if (bases === 3) {
      this.batter.triples++;
    }

    if (bases === 2) {
      this.batter.doubles++;
    }

    // here call function to move runners on basepaths
    console.log(`${this.batter} hits for ${bases} bases`);
  }

  resetCount() {
    this.balls = 0;
    this.strikes = 0;
  }

  updateScoreboard() {
    const strikeDisplay = this.element.querySelector('.strikes-display');
    const ballDisplay = this.element.querySelector('.balls-display');
    const outsDisplay = this.element.querySelector('.outs-display');

    strikeDisplay.innerText = this.strikes;
    ballDisplay.innerText = this.balls;
    outsDisplay.innerText = this.outs;
  }
}

// function to display balls and strikes

let ab = document.querySelector('.at-bat-box');
ab = new AtBat(sale, mookie, ab);
