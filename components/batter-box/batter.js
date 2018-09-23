/* global document, mookie */
const batter = mookie;

function updateBatterStats() {
  const bBox = document.querySelector('.batter-box');
  bBox.querySelector('.name').innerText = batter.name;
  bBox.querySelector('.avg-display').innerText = batter.avg;
  bBox.querySelector('.obp-display').innerText = batter.obp;
  bBox.querySelector('.homeruns-display').innerText = batter.homeruns;
  bBox.querySelector('.current-game-display').innerText = `${batter.cg.hits} / ${batter.cg.atBats}`;
}

updateBatterStats()