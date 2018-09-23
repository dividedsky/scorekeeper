/* global document, sale */

const pitcher = sale;

function updatePitcherStats() {
  const pBox = document.querySelector('.pitcher-box');
  pBox.querySelector('.name').innerText = `${pitcher.name}`;
  pBox.querySelector('.era-display').innerText = pitcher.era;
  pBox.querySelector('.runs-allowed-display').innerText = pitcher.earnedRuns;
  pBox.querySelector('.hits-allowed-display').innerText = pitcher.hitsAllowed;
  pBox.querySelector('.walks-allowed-display').innerText = pitcher.bbAllowed;
}

updatePitcherStats();
