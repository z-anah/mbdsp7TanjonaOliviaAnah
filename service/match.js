const { aggregate } = require("../model/Matchs");
let Match = require("../model/Matchs");

// Récupérer tous les match (GET)
function getMatch(reqs, res) {
  let aggregate = Match.aggregate([
    { $lookup: {
      from: "equipes",
      localField: "idequipe",
      foreignField: "id",
      as: "equipes" 
    }},
    { $lookup: {
        from: "equipes",
        localField: "equ_idequipe",
        foreignField: "id",
        as: "equ_equipes" 
    }},
    { $lookup: {
        from: "formation",
        localField: "idformation",
        foreignField: "id",
        as: "formation" 
    }},
  ]);

  let options = { 
    page: parseInt(req.query.page) || 1,
    limit: parseInt(req.query.limit) || 10,
  };
  // callback
  Match.aggregatePaginate(aggregate, options, (err, Match) => {
  
      if (err) {
        res.send(err);
      }
      res.send(Match);
    }
  );
}
module.exports = { getMatch };
