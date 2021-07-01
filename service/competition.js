let Competitions = require("../model/Competition");
function getListCompetitions(req, res) {
  return new Promise((resolve, reject) => {
    Competitions.find((err, competitions) => {
      if (err) reject(err);
      else {
        resolve(competitions);
      }
    });
  });
}

module.exports = { getListCompetitions };
