/* global document, mookie */
const batter = mookie;
mookie.cg.hits = 3;
mookie.cg.atBats = 4;

function updateBatterStats() {
  const bBox = document.querySelector('.batter-box');
  bBox.querySelector('.name').innerText = batter.name;
  bBox.querySelector('.avg-display').innerText = batter.avg;
  bBox.querySelector('.obp-display').innerText = batter.obp;
  bBox.querySelector('.homeruns-display').innerText = batter.homeruns;
  bBox.querySelector('.current-game-display').innerText = `${batter.cg.hits} / ${batter.cg.atBats}`;
}

updateBatterStats();
