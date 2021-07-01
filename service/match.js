const { aggregate } = require("../model/Matchs");
let Match = require("../model/Matchs");

// Récupérer tous les match (GET)
function getMatch(reqs, res) {
  let aggregate = Match.aggregate([
    {
      $lookup: {
        from: "equipes",
        localField: "idequipe",
        foreignField: "id",
        as: "equipes",
      },
    },
    {
      $lookup: {
        from: "equipes",
        localField: "equ_idequipe",
        foreignField: "id",
        as: "equ_equipes",
      },
    },
    {
      $lookup: {
        from: "formation",
        localField: "idformation",
        foreignField: "id",
        as: "formation",
      },
    },
  ]);

  let options = {
    page: parseInt(req.query.page) || 1,
    limit: parseInt(req.query.limit) || 10,
  };
  // callback
  Match.aggregatePaginate(aggregate, options, (err, match) => {
    if (err) {
      res.send(err);
    }
    res.send(match);
  });
}

// Récupérer un match par son id de competition (GET)
function getMatchBycompetition(req, res) {
  let matchId = parseInt(req.params.idcompetition);
  let aggregate = Match.aggregate([
    { $match: { idcompetition: matchId } },
    {
      $lookup: {
        from: "equipes",
        localField: "idequipe",
        foreignField: "id",
        as: "equipes",
      },
    },
    {
      $lookup: {
        from: "equipes",
        localField: "equ_idequipe",
        foreignField: "id",
        as: "equ_equipes",
      },
    },
    {
      $lookup: {
        from: "formation",
        localField: "idformation",
        foreignField: "id",
        as: "formation",
      },
    },
  ]);
  // callback
  Match.aggregatePaginate(aggregate, options, (err, match) => {
    if (err) {
      res.send(err);
    }
    res.send(match);
  });
}
module.exports = { getMatchBycompetition };
module.exports = { getMatch };
